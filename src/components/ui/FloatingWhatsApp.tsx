"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    <path d="M14 14.5c.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7l-.7.7c-.2.2-.5.2-.7 0a5.5 5.5 0 0 1-2.8-2.8c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7" />
  </svg>
);

export default function FloatingWhatsApp() {
  const phoneNumber = "6282291116343"; // Format: 62 followed by number without 0
  const defaultMessage = encodeURIComponent("Halo BIMATECH, saya ingin bertanya mengenai layanan service komputer.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 sm:bottom-8 sm:right-8"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <div className="group flex size-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50 active:scale-95">
          <WhatsAppIcon className="size-7 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </Link>
    </motion.div>
  );
}
