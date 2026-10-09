"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Gem,
  BriefcaseBusiness,
  Users,
  Hand,
  Sparkles,
} from "lucide-react";

const guidanceCategories = [
  {
    title: "Love & Relationships",
    description:
      "Gain personal guidance around love, relationships, communication and emotional situations.",
    image: "/images/home/guidance/love-relationships.jpg",
    icon: Heart,
    href: "/services",
  },
  {
    title: "Marriage & Compatibility",
    description:
      "Explore relationship compatibility, marriage concerns and important decisions about your future.",
    image: "/images/home/guidance/marriage-compatibility.jpg",
    icon: Gem,
    href: "/services",
  },
  {
    title: "Career & Work",
    description:
      "Find clarity around career direction, opportunities, work decisions and professional changes.",
    image: "/images/home/guidance/career-work.jpg",
    icon: BriefcaseBusiness,
    href: "/services",
  },
  {
    title: "Family & Personal Life",
    description:
      "Receive private guidance for family matters, personal situations and important life decisions.",
    image: "/images/home/guidance/family-personal.jpg",
    icon: Users,
    href: "/services",
  },
  {
    title: "Palm Reading",
    description:
      "Traditional palm reading based on the lines and features of your hands for personal insight.",
    image: "/images/home/guidance/palm-reading.jpg",
    icon: Hand,
    href: "/services",
  },
  {
    title: "Horoscope & Birth Chart",
    description:
      "Discover personalised insights through your horoscope, birth details and traditional astrology.",
    image: "/images/home/guidance/horoscope-birth-chart.jpg",
    icon: Sparkles,
    href: "/services",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GuidanceCategories() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#c9a45c]/8 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#c9a45c]/8 blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a45c]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b28a3e]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a7534] sm:text-xs">
              Personalised Guidance
            </span>

            <span className="h-px w-8 bg-[#b28a3e]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#172033] sm:text-4xl lg:text-5xl">
            What Would You Like
            <span className="block italic text-[#b28a3e]">Guidance About?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
            Every consultation is personalised around your questions,
            circumstances and the areas of life where you are looking for
            greater clarity.
          </p>
        </motion.div>

        {/* Guidance Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {guidanceCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div key={category.title} variants={cardVariants}>
                <Link
                  href={category.href}
                  className="group relative block h-full cursor-pointer overflow-hidden rounded-2xl border border-[#ded8cc] bg-white shadow-[0_12px_40px_rgba(34,31,24,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a45c]/60 hover:shadow-[0_24px_60px_rgba(34,31,24,0.12)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/80 via-[#101827]/10 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 backdrop-blur-md">
                      <span className="text-[10px] font-semibold tracking-[0.1em] text-white">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#e4c57e]/60 bg-[#111827]/70 text-[#e4c57e] backdrop-blur-md transition-all duration-500 group-hover:bg-[#c9a45c] group-hover:text-[#172033]">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    {/* Image Label */}
                    <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90">
                        Guidance
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-xl text-[#172033] transition-colors duration-300 group-hover:text-[#a47d34] sm:text-2xl">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#667085]">
                      {category.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#ebe7df] pt-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a7534]">
                        Explore Guidance
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9c9a7] text-[#9a7534] transition-all duration-300 group-hover:border-[#b28a3e] group-hover:bg-[#b28a3e] group-hover:text-white">
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex justify-center sm:mt-14"
        >
          <Link
            href="/services"
            className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#b28a3e] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8e6b2f] transition-all duration-300 hover:bg-[#b28a3e] hover:text-white sm:px-7"
          >
            Explore All Services
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
