"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const { t } = useLanguage();
  
  const mainContacts: { icon: React.ElementType; label: string; value: string; link?: string }[] = [
    {
      icon: MapPin,
      label: t.contact.info.addressLabel,
      value: t.contact.info.addressValue,
    },
    {
      icon: Phone,
      label: t.contact.info.phoneLabel,
      value: t.contact.info.phoneValue,
      link: "https://wa.me/6282291116343",
    },
    {
      icon: Mail,
      label: t.contact.info.emailLabel,
      value: t.contact.info.emailValue,
    },
    {
      icon: Clock,
      label: t.contact.info.hoursLabel,
      value: t.contact.info.hoursValue,
    },
  ];

  const socialLinks: { icon: React.ElementType; label: string; value: string; link?: string }[] = [
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: "@ibey_beyy",
      link: "https://instagram.com/ibey_beyy",
    },
    {
      icon: FacebookIcon,
      label: "Facebook",
      value: "Faisal Bima",
      link: "https://www.facebook.com/faisal.bima.814060",
    },
    {
      icon: TelegramIcon,
      label: "Telegram",
      value: "@Ical_bey",
      link: "https://t.me/Ical_bey",
    },
    {
      icon: TiktokIcon,
      label: "TikTok",
      value: "@ibey_beyyy",
      link: "https://tiktok.com/@ibey_beyyy",
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Redirect direct to Email (mailto)
    const emailTo = "bimatech13@gmail.com";
    const subject = `Pesan dari ${formData.name} - BIMATECH Web`;
    const body = `Halo Tim BIMATECH,

Nama: ${formData.name}
Email: ${formData.email}
No HP: ${formData.phone || '-'}
Instansi/Perusahaan: ${formData.company || '-'}

Pesan:
${formData.message}`;

    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
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
            {t.contact.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Main Contact Info Card */}
            <Card className="border-border bg-card mb-8 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  {mainContacts.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
                        <info.icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy dark:text-white">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer" className="mt-0.5 block text-sm text-muted-foreground hover:text-blue transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <div>
              <p className="mb-4 text-sm font-semibold text-navy dark:text-white">
                {t.footer.followUs}
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-blue hover:text-blue dark:hover:text-white"
                  >
                    <social.icon className="size-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="border-border bg-card">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-navy dark:text-white"
                      >
                        {t.contact.form.name} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.namePlaceholder}
                        className="border-border bg-background"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-navy dark:text-white"
                      >
                        {t.contact.form.email} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.emailPlaceholder}
                        className="border-border bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-navy dark:text-white"
                      >
                        {t.contact.form.phone}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="border-border bg-background"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-sm font-medium text-navy dark:text-white"
                      >
                        {t.contact.form.company}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.contact.form.companyPlaceholder}
                        className="border-border bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-navy dark:text-white"
                    >
                      {t.contact.form.message} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="border-border bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue text-white hover:bg-blue-light gap-2 py-3 text-base font-semibold rounded-lg sm:w-auto sm:px-8"
                  >
                    <Send className="size-4" />
                    {t.contact.form.submit}
                  </Button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm font-medium text-green-600"
                    >
                      {t.contact.form.success}
                    </motion.p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="h-[350px] w-full lg:h-[450px]">
            <iframe
              title="Lokasi BIMATECH - Dusun III RT 000 RW 000 Desa Were Kecamatan Weda"
              src="https://maps.google.com/maps?q=0.3317288,127.8726499&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[90%] dark:grayscale-[50%] dark:invert-[90%] dark:hue-rotate-180 transition-all duration-300"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
