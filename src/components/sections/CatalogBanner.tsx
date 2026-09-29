"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Laptop, ShoppingBag, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

/** Laptop brands for the auto-scrolling marquee */
const laptopBrands = [
  "Lenovo",
  "ASUS",
  "HP",
  "Dell",
  "Acer",
  "Apple",
  "MSI",
  "Toshiba",
  "Samsung",
  "Huawei",
  "ThinkPad",
  "ROG",
];

export default function CatalogBanner() {
  const { t } = useLanguage();
  const catalogUrl = "https://wa.me/c/6282291116343";
  const askUrl =
    "https://wa.me/6282291116343?text=Halo%20BIMATECH%2C%20saya%20tertarik%20dengan%20laptop%20di%20katalog";

  return (
    <section className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-navy py-16 lg:py-20">
      {/* Decorative gradient blurs */}
      <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-blue/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 left-0 size-80 rounded-full bg-yellow/10 blur-[100px]" />

      {/* ── Animated Marquee Background ── */}
      <div className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-center gap-16 overflow-hidden opacity-[0.06] sm:opacity-[0.08]">
        {/* Row 1: Scrolling Left */}
        <div className="flex w-full">
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
            {[...laptopBrands, ...laptopBrands].map((brand, i) => (
              <div key={`r1-${i}`} className="flex items-center gap-3 px-5">
                <Laptop className="size-6 text-white" strokeWidth={1.5} />
                <span className="text-3xl font-bold tracking-widest text-white uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap pl-10" aria-hidden>
            {[...laptopBrands, ...laptopBrands].map((brand, i) => (
              <div key={`r1-dup-${i}`} className="flex items-center gap-3 px-5">
                <Laptop className="size-6 text-white" strokeWidth={1.5} />
                <span className="text-3xl font-bold tracking-widest text-white uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right (Reverse) */}
        <div className="flex w-full">
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap [animation-direction:reverse]">
            {[...laptopBrands, ...laptopBrands].map((brand, i) => (
              <div key={`r2-${i}`} className="flex items-center gap-3 px-5">
                <Laptop className="size-6 text-white" strokeWidth={1.5} />
                <span className="text-3xl font-bold tracking-widest text-white uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap pl-10 [animation-direction:reverse]" aria-hidden>
            {[...laptopBrands, ...laptopBrands].map((brand, i) => (
              <div key={`r2-dup-${i}`} className="flex items-center gap-3 px-5">
                <Laptop className="size-6 text-white" strokeWidth={1.5} />
                <span className="text-3xl font-bold tracking-widest text-white uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Scrolling Left */}
        <div className="flex w-full">
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
            {[...laptopBrands, ...laptopBrands].map((brand, i) => (
              <div key={`r3-${i}`} className="flex items-center gap-3 px-5">
                <Laptop className="size-6 text-white" strokeWidth={1.5} />
                <span className="text-3xl font-bold tracking-widest text-white uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap pl-10" aria-hidden>
            {[...laptopBrands, ...laptopBrands].map((brand, i) => (
              <div key={`r3-dup-${i}`} className="flex items-center gap-3 px-5">
                <Laptop className="size-6 text-white" strokeWidth={1.5} />
                <span className="text-3xl font-bold tracking-widest text-white uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Fade mask for top and bottom of the marquee background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-navy via-transparent to-navy" />

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md">
            <ShoppingBag className="size-4 text-yellow" />
            {t.catalog.badge}
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] leading-tight drop-shadow-sm">
            {t.catalog.title}{" "}
            <span className="text-yellow">{t.catalog.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg drop-shadow-sm">
            {t.catalog.description}
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-300">
            {t.catalog.badges.map((badge, i) => (
              <span key={i} className="flex items-center gap-1.5 drop-shadow-sm">
                <BadgeCheck className="size-4 text-yellow" />
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href={catalogUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow text-navy hover:bg-yellow-light gap-2.5 px-8 py-3 text-base font-bold rounded-lg shadow-xl shadow-yellow/20 transition-all hover:scale-105 active:scale-95">
                <ShoppingBag className="size-4" />
                {t.catalog.ctaPrimary}
                <ExternalLink className="size-3.5" />
              </Button>
            </Link>
            <Link href={askUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 gap-2 px-8 py-3 text-base font-semibold rounded-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                {t.catalog.ctaSecondary}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
