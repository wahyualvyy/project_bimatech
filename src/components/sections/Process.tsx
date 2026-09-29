"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, HeartHandshake, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons: LucideIcon[] = [Search, PenTool, Rocket, HeartHandshake];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue">
            {t.process.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.process.title}
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-border lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-6 flex size-20 flex-col items-center justify-center rounded-full border-4 border-white bg-blue/10 text-blue shadow-sm relative z-10 transition-colors hover:bg-blue hover:text-white">
                    <Icon className="size-8" />
                  </div>
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <span className="font-heading text-lg font-bold text-navy dark:text-white">
                      {step.title}
                    </span>
                    <span className="text-sm font-bold text-yellow">
                      {step.number}
                    </span>
                  </div>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
