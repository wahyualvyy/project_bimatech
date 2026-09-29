import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/**
 * BIMATECH - BIMATECH metadata.
 */
export const metadata: Metadata = {
  title: "BIMATECH | BIMATECH",
  description:
    "BIMATECH menyediakan layanan service komputer profesional — perbaikan hardware, instalasi software, dan perawatan berkala dengan harga terjangkau di Ciwaringin.",
  keywords: [
    "BIMATECH",
    "BIMATECH",
    "service komputer",
    "perbaikan hardware",
    "instalasi software",
    "Ciwaringin",
    "service laptop",
    "upgrade komputer",
    "recovery data",
  ],
  authors: [{ name: "BIMATECH" }],
  metadataBase: new URL("https://BIMATECH.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BIMATECH | BIMATECH",
    description:
      "BIMATECH menyediakan layanan service komputer profesional — perbaikan hardware, instalasi software, dan perawatan berkala dengan harga terjangkau di Ciwaringin.",
    url: "https://BIMATECH.example.com",
    siteName: "BIMATECH",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIMATECH | BIMATECH",
    description:
      "BIMATECH menyediakan layanan service komputer profesional — perbaikan hardware, instalasi software, dan perawatan berkala dengan harga terjangkau di Ciwaringin.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <FloatingWhatsApp />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
