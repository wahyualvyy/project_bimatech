"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import {
  portfolioProjects,
  portfolioCategories,
  type PortfolioCategory,
} from "@/data/portfolio";

export default function Portfolio() {
  const { t, locale } = useLanguage();
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  /** Translate category labels based on locale */
  const categoryLabel = (cat: PortfolioCategory): string => {
    if (cat === "All") return t.portfolio.filterAll;
    const map: Record<string, Record<string, string>> = {
      Jaringan: { id: "Jaringan", en: "Network" },
      Printer: { id: "Printer", en: "Printer" },
      Sistem: { id: "Sistem", en: "System" },
    };
    return map[cat]?.[locale] ?? cat;
  };

  /** Get the translated project data from translations by id */
  const getProjectTranslation = (id: string) =>
    t.portfolio.projects.find((p) => p.id === id);

  return (
    <section id="portfolio" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue">
            {t.portfolio.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.portfolio.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            {t.portfolio.description}
          </p>
        </motion.div>

        {/* Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 transition-colors ${
                activeCategory === category
                  ? "bg-blue text-white hover:bg-blue-light"
                  : "border-border text-muted-foreground hover:border-blue hover:text-blue"
              }`}
            >
              {categoryLabel(category)}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const translated = getProjectTranslation(project.id);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={translated?.title ?? project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Category Badge */}
                    <div className="absolute left-3 top-3 rounded-full bg-blue/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {categoryLabel(project.category)}
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-lg font-bold text-navy dark:text-white line-clamp-1">
                      {translated?.title ?? project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {translated?.description ?? project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
