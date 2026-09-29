"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 5-2 14-4-3-4-1 13-10z"/>
    <path d="m15 5-6 8v5l2-2"/>
  </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const socialLinks = [
  { label: "Instagram", icon: InstagramIcon, href: "https://instagram.com/ibey_beyy" },
  { label: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/faisal.bima.814060" },
  { label: "Telegram", icon: TelegramIcon, href: "https://t.me/Ical_bey" },
  { label: "TikTok", icon: TiktokIcon, href: "https://tiktok.com/@ibey_beyyy" },
];

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const serviceLinks = [
    { label: t.services.cards[0].title, href: "#services" },
    { label: t.services.cards[1].title, href: "#services" },
    { label: t.services.cards[2].title, href: "#services" },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo/bimatech-logo-transparent.png"
              alt="BIMATECH Logo"
              width={160}
              height={54}
              className="mb-4 h-12 w-auto transition-all dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            />
            <p className="text-sm leading-relaxed text-gray-300">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-lg bg-white/10 text-gray-300 transition-colors hover:bg-blue hover:text-white"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">
              {t.footer.socialNote}
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-xs text-gray-500 tracking-widest">
            {t.footer.bottomTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
