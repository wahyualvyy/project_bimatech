"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Wrench,
  Network,
  Headphones,
  Server as ServerIcon,
  Laptop,
  Cable,
  Cctv,
  Printer,
  Globe,
  Smartphone,
  Code,
  Settings,
  Layers,
  HardDrive,
  MonitorCog,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

/** Icon mapping for service features — keep in sync with translation feature order */
const serviceIcons: LucideIcon[] = [Wrench, Laptop, Settings, MonitorCog];
const featureIconSets: LucideIcon[][] = [
  [Monitor, Network, Settings, Headphones, ServerIcon],
  [Laptop, ServerIcon, Cable, Cctv, Printer],
  [Globe, Layers, Smartphone, HardDrive, Settings],
  [Globe, Code, Smartphone, Code2],
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue">
            {t.services.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            {t.services.description}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.cards.map((card, index) => {
            const ServiceIcon = serviceIcons[index];
            const featureIcons = featureIconSets[index];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden border-border bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-blue/5">
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-blue to-navy" />

                  <CardContent className="p-6 sm:p-8">
                    {/* Icon */}
                    <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                      <ServiceIcon className="size-7" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.features.map((feature, fIdx) => {
                        const FeatureIcon = featureIcons[fIdx] ?? Settings;
                        return (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="bg-background text-foreground font-normal text-xs px-2.5 py-1 gap-1.5"
                          >
                            <FeatureIcon className="size-3 text-blue" />
                            {feature}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
