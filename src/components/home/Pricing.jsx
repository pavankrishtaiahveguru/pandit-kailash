"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Quick Reading",
    price: "£10",
    description:
      "A short reading for a focused question or situation when you need quick personal guidance.",
    features: [
      "Focused personal question",
      "Private consultation",
      "Clear and direct guidance",
    ],
    href: "/contact?reading=quick",
    featured: false,
  },
  {
    name: "Detailed Reading",
    price: "£20",
    description:
      "A more detailed consultation covering your main concerns and the guidance you are looking for.",
    features: [
      "Detailed personal reading",
      "Multiple questions",
      "Love, career or life guidance",
      "Personalised consultation",
    ],
    href: "/contact?reading=detailed",
    featured: true,
  },
  {
    name: "Comprehensive Consultation",
    price: "£45",
    description:
      "A comprehensive consultation for deeper guidance across several important areas of your life.",
    features: [
      "Comprehensive consultation",
      "Multiple areas of life",
      "Astrology and personal guidance",
      "Detailed individual attention",
    ],
    href: "/contact?reading=comprehensive",
    featured: false,
  },
];

const cardVariants = {
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

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-14 sm:py-16 lg:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#c9a45c]/6 blur-[130px]" />

        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#c9a45c]/5 blur-[110px]" />

        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-[#c9a45c]/4 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-10 lg:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#c9a45c]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d1ad63] sm:text-xs">
              Simple & Transparent
            </span>

            <span className="h-px w-7 bg-[#c9a45c]" />
          </div>

          <h2 className="font-serif text-3xl leading-[1.1] text-white sm:text-4xl lg:text-[3.2rem]">
            Choose Your
            <span className="block italic text-[#d8b56a]">Reading</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
            Choose the consultation that best suits your questions and the level
            of guidance you are looking for.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
              className={`relative flex h-full flex-col rounded-2xl border p-5 sm:p-6 ${
                plan.featured
                  ? "border-[#c9a45c]/70 bg-gradient-to-b from-[#c9a45c]/15 to-white/[0.04] shadow-[0_20px_60px_rgba(201,164,92,0.1)]"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              {/* Recommended */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full border border-[#d8b56a]/50 bg-[#c9a45c] px-3.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#111827]">
                    <Sparkles size={11} />
                    Recommended
                  </div>
                </div>
              )}

              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
                  0{index + 1}
                </span>

                <span className="h-px w-10 bg-[#c9a45c]/30" />
              </div>

              {/* Name */}
              <h3 className="mt-5 font-serif text-2xl leading-tight text-white sm:text-[26px]">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-end gap-2">
                <span className="font-serif text-5xl leading-none text-[#e0bd70]">
                  {plan.price}
                </span>

                <span className="mb-1 text-[11px] text-white/40">
                  per reading
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-white/55">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-white/10" />

              {/* Features */}
              <div className="flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/10 text-[#d8b56a]">
                      <Check size={11} strokeWidth={2.5} />
                    </span>

                    <span className="text-[13px] leading-5 text-white/65">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`group mt-6 inline-flex cursor-pointer items-center justify-center gap-3 rounded-full px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] shadow-[0_0_16px_rgba(201,164,92,0.08)] transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(201,164,92,0.2)] ${
                  plan.featured
                    ? "bg-[#c9a45c] text-[#111827] hover:bg-[#e0bd70]"
                    : "border border-[#c9a45c]/50 text-[#d8b56a] hover:bg-[#c9a45c] hover:text-[#111827]"
                }`}
              >
                Book This Reading
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-center"
        >
          <p className="text-xs leading-5 text-white/40">
            Not sure which reading to choose? Contact Pandit Kailash and get
            help choosing the consultation that best fits your needs.
          </p>

          <Link
            href="/contact"
            className="group mt-2 inline-flex cursor-pointer items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#d8b56a] transition-colors duration-300 hover:text-[#f0d28e]"
          >
            Ask Before Booking
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
