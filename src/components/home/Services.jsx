"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { readingServices } from "@/data/readingServices";

const services = [
  {
    title: "Love & Relationship Reading",
    description:
      "Personal guidance around relationships, communication, emotions and compatibility.",
    image: "/images/services/relationship-reading.jpg",
    href: `/readings/${readingServices["love-relationships"].slug}`,
  },

  {
    title: "Horoscope & Birth Chart",
    description:
      "Personalised interpretation based on your birth details and traditional astrology.",
    image: "/images/services/birth-chart.jpg",
    href: `/readings/${readingServices["horoscope-birth-chart"].slug}`,
  },
  {
    title: "Career & Life Reading",
    description:
      "Gain clarity around career direction, opportunities, decisions and life changes.",
    image: "/images/services/career-business.jpg",
    href: `/readings/${readingServices["career-life"].slug}`,
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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-40 h-96 w-96 rounded-full bg-[#c9a45c]/5 blur-[130px]" />
        <div className="absolute -right-52 bottom-20 h-[28rem] w-[28rem] rounded-full bg-[#c9a45c]/5 blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a45c]/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
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
              Personalised Readings
            </span>

            <span className="h-px w-8 bg-[#b28a3e]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#172033] sm:text-4xl lg:text-5xl">
            Astrology, Psychic &
            <span className="block italic text-[#b28a3e]">
              Spiritual Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
            Choose a personalised reading based on the area of life where you
            are looking for clarity, direction and guidance.
          </p>
        </motion.div>

        {/* Featured Vedic Astrology Service */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="group relative mb-8 overflow-hidden rounded-[1.5rem] border border-[#dcd4c5] bg-[#101827] shadow-[0_25px_80px_rgba(15,23,42,0.12)] lg:mb-10"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Featured Image */}
            <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
              <Image
                src="/images/services/spiritual-guidance.jpg"
                alt="Vedic Astrology Reading"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#101827]" />

              {/* Featured Label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <div className="flex items-center gap-2 rounded-full border border-[#e1bd6c]/40 bg-[#07111f]/65 px-4 py-2 backdrop-blur-md">
                  <Sparkles size={14} className="text-[#e0bd70]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f0d28e] sm:text-[10px]">
                    Featured Reading
                  </span>
                </div>
              </div>

              {/* Image Bottom Text */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 lg:hidden">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e0bd70]">
                  Vedic Astrology
                </p>

                <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                  Vedic Astrology Reading
                </h3>
              </div>
            </div>

            {/* Featured Content */}
            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <div className="hidden lg:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9a45c]">
                  Vedic Astrology
                </p>

                <h3 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Vedic Astrology
                  <span className="block italic text-[#d8b56a]">Reading</span>
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Discover personalised guidance through traditional Vedic
                astrology and your birth details. Understand important areas of
                your life and gain a clearer perspective on the questions that
                matter to you.
              </p>

              {/* Features */}
              <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3">
                {[
                  "Birth details",
                  "Personal guidance",
                  "Life direction",
                  "Traditional astrology",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9a45c]" />

                    <span className="text-xs text-white/55">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="group/btn inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#c9a45c] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#111827] transition-all duration-300 hover:bg-[#e0bd70]"
                >
                  Explore Vedic Astrology
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link
                  href={service.href}
                  className="group block h-full cursor-pointer overflow-hidden rounded-2xl border border-[#e3ded4] bg-[#faf9f6] transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a45c]/60 hover:bg-white hover:shadow-[0_20px_50px_rgba(34,31,24,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-xl text-[#172033] transition-colors duration-300 group-hover:text-[#9a7534] sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#667085]">
                      {service.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#e8e3da] pt-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a7534]">
                        Explore Reading
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8c7a3] text-[#9a7534] transition-all duration-300 group-hover:border-[#b28a3e] group-hover:bg-[#b28a3e] group-hover:text-white">
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
          className="mt-12 flex flex-col items-center text-center sm:mt-14"
        >
          <p className="max-w-xl text-sm leading-7 text-[#7a7f89]">
            Not sure which reading is right for you? Speak with Pandit Kailash
            and choose the guidance that best suits your situation.
          </p>

          <Link
            href="/services"
            className="group mt-5 inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#b28a3e] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8e6b2f] transition-all duration-300 hover:bg-[#b28a3e] hover:text-white sm:px-7"
          >
            View All Services
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
