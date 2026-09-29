"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredImages = useMemo(() => {
    return activeFilter === "all"
      ? t.gallery.images
      : t.gallery.images.filter((img) => img.category === activeFilter);
  }, [activeFilter, t.gallery.images]);

  const initialLimit = 4;
  const showButton = filteredImages.length > initialLimit;
  
  const visibleImages = useMemo(() => {
    return isExpanded ? filteredImages : filteredImages.slice(0, initialLimit);
  }, [isExpanded, filteredImages]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredImages.length : 0
      );
    }
  }, [lightboxIndex, filteredImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + visibleImages.length) % visibleImages.length
          : 0
      );
    }
  }, [lightboxIndex, visibleImages.length]);

  // Reset expanded state when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIsExpanded(false);
  };

  return (
    <section id="gallery" className="bg-secondary/30 py-20 lg:py-28">
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
            {t.gallery.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t.gallery.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-card/50 border border-border/50 shadow-sm backdrop-blur-sm max-w-fit mx-auto"
        >
          <button
            onClick={() => handleFilterChange("all")}
            className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeFilter === "all"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeFilter === "all" && (
              <motion.div
                layoutId="activeGalleryFilter"
                className="absolute inset-0 rounded-full bg-blue shadow-md shadow-blue/25"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{t.gallery.filterAll}</span>
          </button>
          {t.gallery.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === cat.id
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeFilter === cat.id && (
                <motion.div
                  layoutId="activeGalleryFilter"
                  className="absolute inset-0 rounded-full bg-blue shadow-md shadow-blue/25"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  layout: { type: "spring", bounce: 0.25, duration: 0.7 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.3 }
                }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-muted"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Camera className="size-5 text-white" />
                  </div>
                  <p className="max-w-[80%] text-center text-sm font-medium text-white">
                    {image.alt}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute left-3 top-3 rounded-full bg-blue/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {t.gallery.categories.find((c) => c.id === image.category)
                    ?.label ?? image.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:border-blue hover:text-blue hover:shadow-sm"
            >
              {isExpanded ? t.gallery.showLess : t.gallery.showMore}
              {isExpanded ? (
                <ChevronUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && visibleImages[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Close lightbox"
              >
                <X className="size-5" />
              </button>

              {/* Prev */}
              {visibleImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-4 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
              )}

              {/* Next */}
              {visibleImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              )}

              {/* Image */}
              <motion.div
                key={visibleImages[lightboxIndex].src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={visibleImages[lightboxIndex].src}
                  alt={visibleImages[lightboxIndex].alt}
                  width={1200}
                  height={900}
                  className="max-h-[85vh] w-auto object-contain"
                  priority
                />
              </motion.div>

              {/* Caption */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-6 py-2 backdrop-blur-sm">
                <p className="text-center text-sm text-white/90">
                  {visibleImages[lightboxIndex].alt}
                  <span className="ml-3 text-white/50">
                    {lightboxIndex + 1} / {visibleImages.length}
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
