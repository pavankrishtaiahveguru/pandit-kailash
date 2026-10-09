"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe2, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const locations = [
  {
    city: "London",
    description:
      "Private astrology, psychic and spiritual guidance for clients across London.",
    image: "/images/home/locations/london.jpg",
  },
  {
    city: "Manchester",
    description:
      "Personalised readings and guidance available for clients in Manchester.",
    image: "/images/home/locations/manchester.jpg",
  },
  {
    city: "Birmingham",
    description:
      "Private consultations and personalised guidance for clients in Birmingham.",
    image: "/images/home/locations/birmingham.jpg",
  },
];

const cardVariants = {
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

export default function Locations() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[28rem] w-[28rem] rounded-full bg-[#c9a45c]/7 blur-[140px]" />
        <div className="absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#c9a45c]/6 blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a45c]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d1ad63] sm:text-xs">
              Available Across The UK
            </span>

            <span className="h-px w-8 bg-[#c9a45c]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Astrology Readings
            <span className="block italic text-[#d8b56a]">Across The UK</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Pandit Kailash offers personalised astrology, psychic and spiritual
            guidance for clients in London, Manchester, Birmingham and remotely
            across the UK.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {locations.map((location, index) => (
            <motion.article
              key={location.city}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.city} astrology readings`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />

                {/* Location Icon */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#e0bd70]/40 bg-[#07111f]/70 text-[#e0bd70] backdrop-blur-md">
                  <MapPin size={18} />
                </div>

                {/* City */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#e0bd70]">
                    UK Location
                  </p>

                  <h3 className="mt-1 font-serif text-3xl text-white">
                    {location.city}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-sm leading-6 text-white/55">
                  {location.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d8b56a]">
                  <span>Book a Reading</span>

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Online Consultation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 overflow-hidden rounded-2xl border border-[#c9a45c]/30 bg-gradient-to-r from-[#c9a45c]/10 via-white/[0.035] to-[#c9a45c]/5"
        >
          <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c9a45c]/40 bg-[#c9a45c]/10 text-[#d8b56a]">
                <Globe2 size={21} />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-white sm:text-3xl">
                  Prefer to Read Online?
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                  Remote consultations are available for clients who prefer to
                  speak with Pandit Kailash from wherever they are.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 rounded-full bg-[#c9a45c] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#111827] transition-all duration-300 hover:bg-[#e0bd70]"
            >
              Book Online
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* Contact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4"
        >
          <a
            href="tel:+447552063168"
            className="group inline-flex min-w-[150px] cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_20px_rgba(201,164,92,0.18)] transition-all duration-300 ease-out hover:border-[#c9a45c]/70 hover:bg-[#c9a45c]/10 hover:text-[#e0bd70] hover:shadow-[0_0_28px_rgba(201,164,92,0.28)]"
          >
            <Phone size={16} strokeWidth={1.8} className="text-[#d8b56a]" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/447552063168"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-w-[150px] cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#c9a45c]/35 bg-[#c9a45c]/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0bd70] shadow-[0_0_20px_rgba(201,164,92,0.18)] transition-all duration-300 ease-out hover:border-[#c9a45c]/70 hover:bg-[#c9a45c]/10 hover:text-[#f0d28e] hover:shadow-[0_0_28px_rgba(201,164,92,0.28)]"
          >
            <FaWhatsapp size={17} className="text-[#d8b56a]" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
