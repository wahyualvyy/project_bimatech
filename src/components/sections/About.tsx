"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Eye, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-background py-20 lg:py-28">
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
            {t.about.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.about.title}
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="/images/about-visual.jpeg"
              alt="BIMATECH professional workspace — computer service and repair"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-4 -right-4 size-20 rounded-xl border-2 border-yellow/30 bg-yellow/5 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.about.paragraph1}
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              {t.about.paragraph2}
            </p>

            <ul className="space-y-3">
              {t.about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-blue" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {/* Vision */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-blue/10">
                <Eye className="size-5 text-blue" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {t.about.visionTitle}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.about.visionText}
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-yellow/10">
                <Target className="size-5 text-yellow" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {t.about.missionTitle}
              </h3>
            </div>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-2">
              {t.about.missionText.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {t.about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-background p-6 text-center"
            >
              <p className="font-heading text-3xl font-bold text-blue sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
