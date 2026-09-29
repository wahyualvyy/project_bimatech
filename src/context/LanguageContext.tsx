"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  translations,
  type Locale,
  type Translations,
} from "@/data/translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  const value: LanguageContextValue = {
    locale,
    t: translations[locale],
    toggleLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
