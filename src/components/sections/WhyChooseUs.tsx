"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Layers,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons: LucideIcon[] = [Award, ShieldCheck, Layers, Headphones];

export default function WhyChooseUs() {
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
            {t.whyChoose.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.whyChoose.title}
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyChoose.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-navy/5 text-navy dark:text-white transition-colors group-hover:bg-blue group-hover:text-white">
                  <Icon className="size-7" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
