"use client";

import { useState, useEffect, useMemo, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight, User, Star, MessageSquarePlus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    rating: 5,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  type TestimonialItem = {
    name: string;
    email?: string;
    role: string;
    company: string;
    content: string;
  };

  const [localTestimonials, setLocalTestimonials] = useState<TestimonialItem[]>([]);

  // Fetch testimonials from the database on initial load
  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          // Redis lpush puts newest at index 0. We reverse it so newest is at the end of the array,
          // matching the carousel flow.
          setLocalTestimonials(data.data.reverse());
        }
      })
      .catch((err) => console.error("Failed to load testimonials:", err));
  }, []);

  // Menggabungkan testimoni bawaan dengan yang baru ditambah, lalu membatasi maksimal 15 testimoni terakhir
  const allTestimonials = useMemo(() => {
    const defaultItems = t.testimonials.items as TestimonialItem[];
    return [...defaultItems, ...localTestimonials].slice(-15);
  }, [t.testimonials.items, localTestimonials]);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else setItemsPerView(1);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = allTestimonials.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const prev = () => setCurrentIndex((i) => (i === 0 ? maxIndex : i - 1));
  const next = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newTestimonial = {
      name: formData.name,
      email: formData.email,
      role: "Pelanggan", // Default role for new submissions
      company: formData.company,
      message: formData.message, // Map to message for the API
      content: formData.message, // Map to content for the local state
    };

    // Add to local display immediately for instant UI feedback (Optimistic UI)
    setLocalTestimonials((prev) => [...prev, newTestimonial]);

    // Send to backend database
    try {
      await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTestimonial),
      });
    } catch (error) {
      console.error("Failed to save to database:", error);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: "", email: "", company: "", rating: 5, message: "" });
      // Scroll to the newest testimonial (last one)
      setCurrentIndex(maxIndex + 1); 
    }, 2000);
  };

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
            {t.testimonials.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.testimonials.title}
          </h2>
        </motion.div>

        {/* Testimonial Slider / Carousel */}
        <div className="mx-auto w-full">
          <div className="relative overflow-hidden px-2 py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {allTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-3 lg:w-1/3"
                >
                  <Card className="h-full border-border bg-card shadow-sm">
                    <CardContent className="flex h-full flex-col p-8 sm:p-10">
                      <Quote className="mb-4 size-8 text-yellow" />
                      <p className="flex-1 text-base leading-relaxed text-foreground sm:text-lg">
                        &ldquo;{item.content}&rdquo;
                      </p>

                      <div className="mt-8 flex items-center gap-3">
                        {/* Avatar */}
                        {item.email ? (
                          <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                              item.name
                            )}&background=0878C9&color=fff&rounded=true&bold=true`}
                            alt={item.name}
                            loading="lazy"
                            className="size-11 shrink-0 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                            <User className="size-5" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-navy dark:text-white line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {item.role}, {item.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
              className="border-border hover:bg-blue hover:text-white"
            >
              <ChevronLeft className="size-4" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-blue"
                      : "w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
              className="border-border hover:bg-blue hover:text-white"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Add Testimonial Button & Form */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="text-center">
            <Button
              onClick={() => setShowForm(!showForm)}
              variant="outline"
              className="gap-2 border-border text-navy transition-colors hover:border-blue hover:text-blue dark:text-white"
            >
              <MessageSquarePlus className="size-4" />
              {t.testimonials.form.title}
            </Button>
          </div>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 overflow-hidden"
              >
                <Card className="border-border bg-card shadow-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-navy dark:text-white">
                        {t.testimonials.form.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t.testimonials.form.description}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-navy dark:text-white">
                            {t.testimonials.form.namePlaceholder}{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder={t.testimonials.form.namePlaceholder}
                            className="border-border bg-background"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-navy dark:text-white">
                            {t.testimonials.form.emailPlaceholder} <span className="text-red-500">*</span>
                          </label>
                          <Input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="anda@gmail.com"
                            className="border-border bg-background"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="mb-1.5 block text-sm font-medium text-navy dark:text-white">
                            {t.testimonials.form.companyPlaceholder}{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <Input
                            required
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            placeholder={t.testimonials.form.companyPlaceholder}
                            className="border-border bg-background"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-navy dark:text-white">
                          {t.testimonials.form.ratingLabel}
                        </label>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, rating: star })
                              }
                              className="focus:outline-none"
                            >
                              <Star
                                className={`size-6 ${
                                  star <= formData.rating
                                    ? "fill-yellow text-yellow"
                                    : "fill-muted text-muted"
                                } transition-colors hover:fill-yellow/80`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-navy dark:text-white">
                          {t.testimonials.form.messagePlaceholder}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder={t.testimonials.form.messagePlaceholder}
                          className="resize-none border-border bg-background"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full gap-2 bg-blue text-white hover:bg-blue-light sm:w-auto"
                      >
                        <Send className="size-4" />
                        {t.testimonials.form.submit}
                      </Button>

                      {submitted && (
                        <p className="mt-2 text-sm font-medium text-green-600">
                          {t.testimonials.form.success}
                        </p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
