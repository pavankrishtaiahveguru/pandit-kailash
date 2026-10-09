"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const highlights = [
  "Personalised one-to-one consultations",
  "Astrology, Vedic astrology and psychic guidance",
  "Guidance for love, marriage, career and life decisions",
  "Private and respectful consultation experience",
];

export default function MeetAstrologer() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#c9a45c]/7 blur-[140px]" />
        <div className="absolute -right-52 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#c9a45c]/6 blur-[150px]" />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a45c]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.5rem] border border-[#c9a45c]/30 sm:-bottom-5 sm:-left-5" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e8e1d5] shadow-[0_25px_70px_rgba(34,31,24,0.14)]">
              <Image
                src="/images/about/pandit-kailash.jpg"
                alt="Pandit Kailash"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/65 via-transparent to-transparent" />

              {/* Image Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-xl border border-white/20 bg-[#07111f]/70 p-4 backdrop-blur-md sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a45c] text-[#101827]">
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <p className="font-serif text-lg text-white">
                        Pandit Kailash
                      </p>

                      <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#e0bd70]">
                        Astrologer & Psychic Consultant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b28a3e]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a7534] sm:text-xs">
                Meet Your Astrologer
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl leading-tight text-[#172033] sm:text-4xl lg:text-5xl">
              Meet
              <span className="italic text-[#b28a3e]"> Pandit Kailash</span>
            </h2>

            <p className="mt-2 font-serif text-lg italic text-[#697386] sm:text-xl">
              Personal Guidance With Clarity & Understanding
            </p>

            {/* Main Description */}
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              <p>
                Pandit Kailash offers private psychic readings, palm reading,
                astrology and spiritual guidance for people looking for clarity
                around important areas of life.
              </p>

              <p>
                Each consultation is personalised around your questions,
                concerns and current situation, creating a private and
                comfortable one-to-one experience.
              </p>

              <p>
                Whether you are looking for guidance about love, relationships,
                marriage, career, family matters or personal decisions, your
                reading is focused on the area that matters most to you.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-[#e2ddd3] bg-white/70 px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b28a3e]/10 text-[#9a7534]">
                    <Check size={12} strokeWidth={2.5} />
                  </span>

                  <span className="text-xs leading-5 text-[#596273]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#b28a3e] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#96732f]"
              >
                Meet Pandit Kailash
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#b28a3e] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#8e6b2f] transition-all duration-300 hover:bg-[#b28a3e] hover:text-white"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
