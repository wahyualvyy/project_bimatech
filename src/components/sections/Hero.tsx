"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-20"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-50" />
      <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-yellow/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-4 py-1.5 text-sm font-medium text-blue">
            <span className="size-2 rounded-full bg-blue" />
            {t.hero.badge}
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-navy dark:text-white sm:text-5xl lg:text-6xl xl:text-[4rem]">
            {t.hero.headlinePart1}{" "}
            <span className="relative">
              {t.hero.headlineHighlight}
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-yellow" />
            </span>{" "}
            {t.hero.headlinePart2}
          </h1>

          {/* Mobile Hero Visual (Only visible on mobile, below heading) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative mt-8 block w-full lg:hidden"
          >
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl shadow-2xl shadow-navy/10">
                <Image
                  src="/images/hero-visual.jpeg"
                  alt={t.hero.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 -z-10 size-20 rounded-xl border-2 border-yellow/30 bg-yellow/5" />
              <div className="absolute -right-4 -top-4 -z-10 size-12 rounded-lg border-2 border-blue/30 bg-blue/5" />
            </div>
          </motion.div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href="#services">
              <Button className="w-full bg-blue text-white hover:bg-blue-light gap-2 px-6 py-3 text-base font-semibold rounded-lg sm:w-auto">
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="https://wa.me/6282291116343?text=Halo%20BIMATECH" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="w-full border-navy/20 text-navy dark:text-white hover:bg-navy/5 gap-2 px-6 py-3 text-base font-semibold rounded-lg sm:w-auto transition-transform hover:scale-105 active:scale-95"
              >
                <Phone className="size-4" />
                {t.hero.ctaSecondary}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Desktop Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative hidden w-full flex-1 lg:block"
        >
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Image Wrapper */}
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl shadow-2xl shadow-navy/10">
              <Image
                src="/images/hero-visual.jpeg"
                alt={t.hero.heroImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative accent (outside overflow-hidden) */}
            <div className="absolute -bottom-4 -left-4 -z-10 size-24 rounded-xl border-2 border-yellow/30 bg-yellow/5" />
            <div className="absolute -right-4 -top-4 -z-10 size-16 rounded-lg border-2 border-blue/30 bg-blue/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
