"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Reading",
    description:
      "Choose the reading that best matches the area of life where you are looking for guidance and clarity.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Speak With Pandit Kailash",
    description:
      "Connect directly for a private one-to-one consultation focused on your questions and personal situation.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Receive Your Personal Guidance",
    description:
      "Receive personalised guidance and a clearer perspective on the questions and decisions that matter to you.",
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ef] py-14 sm:py-16 lg:py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-1/3 h-80 w-80 rounded-full bg-[#c9a45c]/6 blur-[120px]" />
        <div className="absolute -right-48 bottom-0 h-80 w-80 rounded-full bg-[#c9a45c]/6 blur-[120px]" />
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a45c]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#b28a3e]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a7534] sm:text-xs">
              Simple & Personal
            </span>

            <span className="h-px w-7 bg-[#b28a3e]" />
          </div>

          <h2 className="font-serif text-3xl leading-[1.1] text-[#172033] sm:text-4xl lg:text-[3.2rem]">
            Your Reading in
            <span className="block italic text-[#b28a3e]">3 Simple Steps</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
            Getting started is simple. Choose the guidance you need, connect
            with Pandit Kailash and receive a private personalised reading.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative grid gap-8 md:grid-cols-3 md:gap-5 lg:gap-8"
        >
          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[44px] hidden h-px bg-gradient-to-r from-[#c9a45c]/10 via-[#c9a45c]/50 to-[#c9a45c]/10 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="relative mx-auto mb-5 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#c9a45c]/35 bg-[#f8f5ef]">
                  <div className="absolute inset-2 rounded-full border border-[#c9a45c]/15" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#172033] text-[#d8b56a] shadow-[0_8px_22px_rgba(23,32,51,0.14)]">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#c9a45c]/40 bg-[#c9a45c] text-[8px] font-bold text-[#172033]">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl leading-tight text-[#172033] sm:text-[22px]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#667085]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-9 flex flex-col items-center text-center sm:mt-10"
        >
          <p className="text-xs text-[#727987] sm:text-sm">
            Ready to begin your personal reading?
          </p>

          <Link
            href="/contact"
            className="group mt-3 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#b28a3e] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_18px_rgba(201,164,92,0.12)] transition-all duration-300 ease-out hover:bg-[#96732f] hover:shadow-[0_0_26px_rgba(201,164,92,0.22)]"
          >
            Book Your Reading
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
