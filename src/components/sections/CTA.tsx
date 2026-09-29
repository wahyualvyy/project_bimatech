"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      {/* Subtle circuit pattern */}
      <div className="pointer-events-none absolute inset-0 circuit-pattern opacity-20" />
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-yellow/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
            {t.cta.titlePart1}{" "}
            <span className="text-yellow">{t.cta.titleHighlight}</span>
            {t.cta.titlePart2}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            {t.cta.description}
          </p>
          <div className="mt-8">
            <Link href="#contact">
              <Button className="bg-yellow text-navy hover:bg-yellow-light gap-2 px-8 py-3 text-base font-bold rounded-lg">
                {t.cta.button}
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
