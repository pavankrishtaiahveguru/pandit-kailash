"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What types of readings does Pandit Kailash offer?",
    answer:
      "Pandit Kailash offers personalised psychic readings, Love & Relationship readings, Career & Life readings, General Psychic Readings, Palm Reading, Astrology and Vedic Astrology, Horoscope and Birth Chart readings, and Marriage & Compatibility guidance.",
  },
  {
    question: "Do I need to know anything about astrology before my reading?",
    answer:
      "No. You do not need previous knowledge or experience with astrology. Your consultation can be explained in a clear and easy-to-understand way based on your individual questions and situation.",
  },
  {
    question: "What can I ask about during a reading?",
    answer:
      "You can seek guidance around areas such as love, relationships, marriage, career, family matters, personal situations and important life decisions. Your consultation is focused on the areas that are most important to you.",
  },
  {
    question: "Where are consultations available?",
    answer:
      "Consultations are available for clients across London, Manchester and Birmingham, as well as remotely for clients who prefer an online consultation.",
  },
  {
    question: "How do I choose the right reading?",
    answer:
      "Choose a reading based on the area where you need the most guidance. If you are unsure which consultation is right for you, you can contact Pandit Kailash before booking and discuss your requirements.",
  },
  {
    question: "How much does a reading cost?",
    answer:
      "There are three reading options: Quick Reading at £10, Detailed Reading at £20 and Comprehensive Consultation at £45.",
  },
  {
    question: "Are readings private?",
    answer:
      "Yes. Each consultation is designed to provide a private, respectful and comfortable one-to-one experience.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[28rem] w-[28rem] rounded-full bg-[#c9a45c]/6 blur-[140px]" />
        <div className="absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#c9a45c]/6 blur-[150px]" />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a45c]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b28a3e]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a7534] sm:text-xs">
              Frequently Asked Questions
            </span>

            <span className="h-px w-8 bg-[#b28a3e]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#172033] sm:text-4xl lg:text-5xl">
            Questions Before
            <span className="block italic text-[#b28a3e]">Your Reading?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
            Find answers to some of the most common questions about readings,
            consultations, locations and booking.
          </p>
        </motion.div>

        {/* FAQ Layout */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          {/* Left Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-2xl border border-[#ddd6ca] bg-white p-6 shadow-[0_15px_45px_rgba(34,31,24,0.05)] sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b28a3e]/10 text-[#9a7534]">
                <MessageCircle size={21} strokeWidth={1.6} />
              </div>

              <h3 className="mt-5 font-serif text-2xl text-[#172033] sm:text-3xl">
                Still Have a Question?
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                If you cannot find the answer you are looking for, contact
                Pandit Kailash directly and discuss your requirements before
                booking.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#b28a3e] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#96732f]"
              >
                Contact Us
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#c9a45c]/50 bg-white shadow-[0_12px_35px_rgba(34,31,24,0.06)]"
                      : "border-[#e0dbd2] bg-white/60 hover:border-[#c9a45c]/35"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 text-[10px] font-semibold tracking-[0.14em] text-[#b28a3e]">
                        0{index + 1}
                      </span>

                      <span className="font-serif text-base leading-6 text-[#172033] sm:text-lg">
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#b28a3e] bg-[#b28a3e] text-white"
                          : "border-[#d8d2c8] text-[#8e6b2f]"
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="border-t border-[#ebe6de] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                          <p className="pl-8 text-sm leading-7 text-[#667085] sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
