"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ArrowRight, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2"
          aria-label="BIMATECH Home"
        >
          <Image
            src="/logo/bimatech-logo-transparent.png"
            alt="BIMATECH Logo"
            width={140}
            height={48}
            className="h-10 w-auto sm:h-12 transition-all dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden items-center gap-1 lg:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-blue ${
                  scrolled ? "text-foreground" : "text-navy dark:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Language */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Theme Toggle */}
          <ModeToggle />

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="gap-1.5 text-sm font-medium text-muted-foreground hover:text-navy dark:hover:text-white"
            aria-label={`Switch to ${locale === "id" ? "English" : "Bahasa Indonesia"}`}
          >
            <Languages className="size-4" />
            {locale === "id" ? "EN" : "ID"}
          </Button>

          <Link href="#contact">
            <Button className="bg-blue text-white hover:bg-blue-light gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-lg">
              {t.nav.getStarted}
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-1 lg:hidden">
          <ModeToggle />
          
          {/* Mobile Language Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLocale}
            aria-label={`Switch to ${locale === "id" ? "English" : "Bahasa Indonesia"}`}
          >
            <span className="text-xs font-bold text-muted-foreground">
              {locale === "id" ? "EN" : "ID"}
            </span>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <Image
                    src="/logo/bimatech-logo-transparent.png"
                    alt="BIMATECH Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto transition-all dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  />
                </div>
                <nav
                  className="flex flex-col gap-1"
                  aria-label="Mobile navigation"
                >
                  <AnimatePresence>
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={handleNavClick}
                          className="block rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-blue"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </nav>
                <Link href="#contact" onClick={handleNavClick}>
                  <Button className="w-full bg-blue text-white hover:bg-blue-light gap-1.5 py-2.5 font-semibold rounded-lg">
                    {t.nav.getStarted}
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
