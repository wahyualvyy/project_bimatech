"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technologies } from "@/data/technologies";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import {
  Monitor,
  Cpu,
  Network,
  Wrench,
  Shield,
  Globe,
  Smartphone,
  Palette,
  BarChart3,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

/** Icon mapping per category — synced with technologies.ts order */
const categoryIcons: LucideIcon[] = [
  Monitor,     // Sistem Operasi
  Cpu,         // Hardware
  Network,     // Jaringan
  Wrench,      // Software & Tools
  Shield,      // CCTV & Keamanan
  Globe,       // Web Development
  Smartphone,  // Mobile Development
  Palette,     // UI / Design
  BarChart3,   // Data & Analytics
  GitBranch,   // DevOps & Tools
];

export default function Technologies() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const initialCount = 4;
  
  const displayedCategories = useMemo(() => {
    return showAll ? technologies : technologies.slice(0, initialCount);
  }, [showAll]);

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
            {t.technologies.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.technologies.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            {t.technologies.description}
          </p>
        </motion.div>

        {/* Tech Grid — 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, index) => {
              const CategoryIcon = categoryIcons[index] ?? Globe;

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
                  layout
                >
                  <Card className="group relative h-full overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-blue/5">
                    {/* Accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue to-navy" />

                    <CardContent className="p-4 sm:p-5">
                      {/* Category header */}
                      <div className="mb-3 flex items-center gap-2.5">
                        <div className={`flex size-9 items-center justify-center rounded-lg bg-blue/10 ${category.accent} transition-colors group-hover:bg-blue group-hover:text-white`}>
                          <CategoryIcon className="size-4.5" />
                        </div>
                        <h3 className="font-heading text-sm font-bold text-navy dark:text-white sm:text-base">
                          {category.category}
                        </h3>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {category.items.map((tech, tIdx) => (
                          <span
                            key={tech.name}
                            className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-all duration-200 hover:border-blue hover:bg-blue/10 hover:text-blue cursor-default sm:text-xs"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        {technologies.length > initialCount && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-blue text-blue hover:bg-blue hover:text-white"
            >
              {showAll ? t.technologies.showLess : t.technologies.showMore}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
