"use client";

import {
  useState,
  useEffect,
  type FormEvent,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Star,
  MessageSquarePlus,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

type TestimonialItem = {
  id?: string;
  name: string;
  email?: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  createdAt?: string;
};

export default function Testimonials() {
  const { t } = useLanguage();

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [itemsPerView, setItemsPerView] =
    useState(1);

  const [showForm, setShowForm] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      company: "",
      rating: 5,
      message: "",
    });

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [
    localTestimonials,
    setLocalTestimonials,
  ] = useState<TestimonialItem[]>([]);

  // =========================================================
  // LOAD TESTIMONIAL DARI REDIS
  // =========================================================

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const response = await fetch(
          "/api/testimonials",
          {
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.error ||
              "Failed to load testimonials"
          );
        }

        const testimonials =
          Array.isArray(data.data)
            ? data.data
            : [];

        /*
         * Redis LPUSH:
         *
         * index 0 = paling baru
         *
         * Kita reverse agar:
         * lama -> baru
         * sehingga carousel berjalan normal.
         */
        setLocalTestimonials(
          [...testimonials].reverse()
        );
      } catch (error) {
        console.error(
          "Failed to load testimonials:",
          error
        );

        setErrorMessage(
          t.testimonials.loadError
        );
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, [t.testimonials.loadError]);

  /*
   * PENTING:
   *
   * Tidak ada lagi data dummy.
   *
   * Semua yang tampil di sini
   * hanya berasal dari Redis.
   */
  const allTestimonials =
    localTestimonials;

  // =========================================================
  // RESPONSIVE
  // =========================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const totalItems =
    allTestimonials.length;

  const maxIndex = Math.max(
    0,
    totalItems - itemsPerView
  );

  // =========================================================
  // RESET INDEX JIKA DATA BERUBAH
  // =========================================================

  const visibleIndex = Math.min(currentIndex, maxIndex);

  // =========================================================
  // AUTOPLAY
  // =========================================================

  useEffect(() => {
    if (allTestimonials.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex
          ? 0
          : prev + 1
      );
    }, 5000);

    return () =>
      clearInterval(timer);
  }, [
    maxIndex,
    allTestimonials.length,
  ]);

  // =========================================================
  // NAVIGATION
  // =========================================================

  const prev = () => {
    setCurrentIndex((index) =>
      index === 0
        ? maxIndex
        : index - 1
    );
  };

  const next = () => {
    setCurrentIndex((index) =>
      index >= maxIndex
        ? 0
        : index + 1
    );
  };

  // =========================================================
  // SUBMIT TESTIMONIAL
  // =========================================================

  const handleSubmit = async (
    e: FormEvent
  ) => {
    e.preventDefault();

    if (submitting) {
      return;
    }

    try {
      setSubmitting(true);
      setErrorMessage("");
      setSubmitted(false);

      const response = await fetch(
        "/api/testimonials",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name:
              formData.name.trim(),

            email:
              formData.email.trim(),

            company:
              formData.company.trim(),

            rating:
              formData.rating,

            message:
              formData.message.trim(),
          }),
        }
      );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        setErrorMessage(
          data.error === "REDIS_WRITE_FORBIDDEN" || data.error === "REDIS_NOT_CONFIGURED"
            ? t.testimonials.unavailable
            : data.error === "INVALID_INPUT"
              ? t.testimonials.invalidInput
              : t.testimonials.saveError
        );
        return;
      }

      /*
       * Baru masukkan ke tampilan
       * setelah Redis berhasil simpan.
       */
      setLocalTestimonials(
        (prev) =>
          [
            ...prev,
            data.data,
          ].slice(-15)
      );

      /*
       * Langsung pindah ke testimoni
       * paling baru.
       */
      setTimeout(() => {
        setCurrentIndex(
          Math.max(
            0,
            Math.min(localTestimonials.length + 1, 15) -
              itemsPerView
          )
        );
      }, 100);

      setSubmitted(true);

      /*
       * Reset form.
       */
      setTimeout(() => {
        setSubmitted(false);

        setShowForm(false);

        setFormData({
          name: "",
          email: "",
          company: "",
          rating: 5,
          message: "",
        });
      }, 2000);
    } catch {
      setErrorMessage(
        t.testimonials.saveError
      );
    } finally {
      setSubmitting(false);
    }
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue">
            {
              t.testimonials
                .label
            }
          </p>

          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem]">
            {
              t.testimonials
                .title
            }
          </h2>
        </motion.div>

        {/* LOADING */}
        {loading && (
          <p className="mb-6 text-center text-sm text-muted-foreground">
            {
              t.testimonials
                .loading
            }
          </p>
        )}

        {/* DATABASE KOSONG */}
        {!loading &&
          allTestimonials.length ===
            0 &&
          !errorMessage && (
            <p className="mb-6 text-center text-sm text-muted-foreground">
              {
                t.testimonials
                  .empty
              }
            </p>
          )}

        {/* ERROR */}
        {errorMessage && (
          <p role="alert" className="mb-6 text-center text-sm font-medium text-destructive">
            {errorMessage}
          </p>
        )}

        {/* ================================================= */}
        {/* CAROUSEL */}
        {/* ================================================= */}

        <div className="mx-auto w-full">
          <div className="relative overflow-hidden px-2 py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  visibleIndex *
                  (100 /
                    itemsPerView)
                }%)`,
              }}
            >
              {!loading &&
                allTestimonials.map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      key={
                        item.id ||
                        index
                      }
                      className="w-full shrink-0 px-3 lg:w-1/3"
                    >
                      <Card className="h-full border-border bg-card shadow-sm">
                        <CardContent className="flex h-full flex-col p-8 sm:p-10">

                          <Quote className="mb-4 size-8 text-yellow" />

                          <p className="flex-1 text-base leading-relaxed text-foreground sm:text-lg">
                            &ldquo;
                            {
                              item.content
                            }
                            &rdquo;
                          </p>

                          {/* RATING */}
                          <div
                            className="mt-4 flex gap-1"
                            aria-label={`${
                              item.rating ??
                              0
                            } ${t.testimonials.ratingDescription}`}
                          >
                            {[
                              1,
                              2,
                              3,
                              4,
                              5,
                            ].map(
                              (
                                star
                              ) => (
                                <Star
                                  key={
                                    star
                                  }
                                  className={`size-4 ${
                                    star <=
                                    (item.rating ??
                                      0)
                                      ? "fill-yellow text-yellow"
                                      : "fill-muted text-muted"
                                  }`}
                                />
                              )
                            )}
                          </div>

                          {/* CUSTOMER */}
                          <div className="mt-8 flex items-center gap-3">
                            
                              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                                <User className="size-5" />
                              </div>
                            

                            <div>
                              <p className="line-clamp-1 text-sm font-semibold text-foreground">
                                {
                                  item.name
                                }
                              </p>

                              <p className="line-clamp-1 text-xs text-muted-foreground">
                                {
                                  item.role || t.testimonials.customer
                                }
                                ,{" "}
                                {
                                  item.company
                                }
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                )}
            </div>
          </div>

          {/* ================================================= */}
          {/* NAVIGATION */}
          {/* ================================================= */}

          {allTestimonials.length >
            0 && (
            <div className="mt-8 flex items-center justify-center gap-4">

              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                disabled={
                  allTestimonials.length <=
                  itemsPerView
                }
                aria-label={t.testimonials.previous}
                className="border-border hover:bg-blue hover:text-white"
              >
                <ChevronLeft className="size-4" />
              </Button>

              <div className="flex gap-2">
                {Array.from({
                  length:
                    maxIndex +
                    1,
                }).map(
                  (
                    _,
                    index
                  ) => (
                    <button
                      key={
                        index
                      }
                      onClick={() =>
                        setCurrentIndex(
                          index
                        )
                      }
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index ===
                        visibleIndex
                          ? "w-6 bg-blue"
                          : "w-2 bg-muted hover:bg-muted-foreground"
                      }`}
                      aria-label={`${t.testimonials.slide} ${
                        index +
                        1
                      }`}
                    />
                  )
                )}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                disabled={
                  allTestimonials.length <=
                  itemsPerView
                }
                aria-label={t.testimonials.next}
                className="border-border hover:bg-blue hover:text-white"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          )}
        </div>

        {/* ================================================= */}
        {/* FORM TESTIMONIAL */}
        {/* ================================================= */}

        <div className="mx-auto mt-16 max-w-2xl">

          <div className="text-center">
            <Button
              onClick={() => {
                setShowForm(
                  !showForm
                );

                setErrorMessage(
                  ""
                );
              }}
              variant="outline"
              className="gap-2 border-border text-foreground transition-colors hover:border-blue hover:text-blue"
            >
              <MessageSquarePlus className="size-4" />

              {
                t.testimonials
                  .form.title
              }
            </Button>
          </div>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height:
                    "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="mt-8 overflow-hidden"
              >
                <Card className="border-border bg-card shadow-md">
                  <CardContent className="p-6 sm:p-8">

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-foreground">
                        {
                          t
                            .testimonials
                            .form
                            .title
                        }
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {
                          t
                            .testimonials
                            .form
                            .description
                        }
                      </p>
                    </div>

                    <form
                      onSubmit={
                        handleSubmit
                      }
                      className="space-y-4"
                    >

                      <div className="grid gap-4 sm:grid-cols-2">

                        {/* NAME */}
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-foreground">
                            {
                              t
                                .testimonials
                                .form
                                .namePlaceholder
                            }{" "}

                            <span className="text-red-500">
                              *
                            </span>
                          </label>

                          <Input
                            required
                            maxLength={
                              100
                            }
                            value={
                              formData.name
                            }
                            onChange={(
                              e
                            ) =>
                              setFormData(
                                {
                                  ...formData,
                                  name:
                                    e
                                      .target
                                      .value,
                                }
                              )
                            }
                            placeholder={
                              t
                                .testimonials
                                .form
                                .namePlaceholder
                            }
                            className="border-border bg-background"
                          />
                        </div>

                        {/* EMAIL */}
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-foreground">
                            {
                              t
                                .testimonials
                                .form
                                .emailPlaceholder
                            }{" "}

                            <span className="text-red-500">
                              *
                            </span>
                          </label>

                          <Input
                            required
                            type="email"
                            maxLength={
                              150
                            }
                            value={
                              formData.email
                            }
                            onChange={(
                              e
                            ) =>
                              setFormData(
                                {
                                  ...formData,
                                  email:
                                    e
                                      .target
                                      .value,
                                }
                              )
                            }
                            placeholder={t.testimonials.form.emailPlaceholder}
                            className="border-border bg-background"
                          />
                        </div>

                        {/* COMPANY */}
                        <div className="sm:col-span-2">
                          <label className="mb-1.5 block text-sm font-medium text-foreground">
                            {
                              t
                                .testimonials
                                .form
                                .companyPlaceholder
                            }{" "}

                            <span className="text-red-500">
                              *
                            </span>
                          </label>

                          <Input
                            required
                            maxLength={
                              100
                            }
                            value={
                              formData.company
                            }
                            onChange={(
                              e
                            ) =>
                              setFormData(
                                {
                                  ...formData,
                                  company:
                                    e
                                      .target
                                      .value,
                                }
                              )
                            }
                            placeholder={
                              t
                                .testimonials
                                .form
                                .companyPlaceholder
                            }
                            className="border-border bg-background"
                          />
                        </div>
                      </div>

                      {/* RATING */}
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          {
                            t
                              .testimonials
                              .form
                              .ratingLabel
                          }
                        </label>

                        <div className="flex gap-1">
                          {[
                            1,
                            2,
                            3,
                            4,
                            5,
                          ].map(
                            (
                              star
                            ) => (
                              <button
                                key={
                                  star
                                }
                                type="button"
                                aria-label={`${star} ${t.testimonials.stars}`}
                                onClick={() =>
                                  setFormData(
                                    {
                                      ...formData,
                                      rating:
                                        star,
                                    }
                                  )
                                }
                                className="focus:outline-none"
                              >
                                <Star
                                  className={`size-6 ${
                                    star <=
                                    formData.rating
                                      ? "fill-yellow text-yellow"
                                      : "fill-muted text-muted"
                                  } transition-colors hover:fill-yellow/80`}
                                />
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      {/* MESSAGE */}
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">
                          {
                            t
                              .testimonials
                              .form
                              .messagePlaceholder
                          }{" "}

                          <span className="text-red-500">
                            *
                          </span>
                        </label>

                        <Textarea
                          required
                          rows={
                            4
                          }
                          maxLength={
                            1000
                          }
                          value={
                            formData.message
                          }
                          onChange={(
                            e
                          ) =>
                            setFormData(
                              {
                                ...formData,
                                message:
                                  e
                                    .target
                                    .value,
                              }
                            )
                          }
                          placeholder={
                            t
                              .testimonials
                              .form
                              .messagePlaceholder
                          }
                          className="resize-none border-border bg-background"
                        />
                      </div>

                      {/* SUBMIT */}
                      <Button
                        type="submit"
                        disabled={
                          submitting
                        }
                        className="w-full gap-2 bg-blue text-white hover:bg-blue-light sm:w-auto"
                      >
                        <Send className="size-4" />

                        {submitting
                          ? t
                              .testimonials
                              .saving
                          : t
                              .testimonials
                              .form
                              .submit}
                      </Button>

                      {/* SUCCESS */}
                      {submitted && (
                        <p className="mt-2 text-sm font-medium text-green-600">
                          {
                            t
                              .testimonials
                              .form
                              .success
                          }
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
