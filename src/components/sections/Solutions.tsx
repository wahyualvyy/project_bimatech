"use client";

import { motion } from "framer-motion";
import { 
  Laptop, 
  Cpu, 
  Mouse, 
  Wifi, 
  Cctv, 
  Printer, 
  Database, 
  Cloud, 
  Bot, 
  type LucideIcon 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons: LucideIcon[] = [
  Laptop,    // Komputer & Laptop
  Cpu,       // Spare Part
  Mouse,     // Aksesoris
  Wifi,      // Jaringan & WiFi
  Cctv,      // CCTV
  Printer,   // Printer & Scanner
  Database,  // Sistem Management
  Cloud,     // Layanan Digital
  Bot        // Produk AI
];

export default function Solutions() {
  const { t } = useLanguage();

  return (
    <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle circuit pattern */}
      <div className="pointer-events-none absolute inset-0 circuit-pattern opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow">
            {t.solutions.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
            {t.solutions.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300">
            {t.solutions.description}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.solutions.items.map((item, index) => {
            const Icon = icons[index] || Laptop; // Fallback icon just in case
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-blue text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
