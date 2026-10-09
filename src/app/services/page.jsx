"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Compass,
  Clock3,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { readingServiceList } from "@/data/readingServices";
import { readingIcons } from "@/components/readings/readingIcons";

const steps = [
  {
    number: "01",
    title: "Choose a service",
    description:
      "Explore the available readings and select the area you would like to discuss.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Share your enquiry",
    description:
      "Tell Pandit Kailash what you are looking for through the contact page.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Confirm the details",
    description:
      "Discuss the consultation format, availability and applicable fees before booking.",
    icon: Clock3,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function ServiceImage({ service }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = readingIcons[service.icon];

  return (
    <div className="relative isolate aspect-[1.25/1] overflow-hidden bg-[#14233C]">
      {!imageFailed && (
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setImageFailed(true)}
        />
      )}

      {imageFailed && (
        <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_70%_20%,rgba(197,161,93,0.25),transparent_38%),linear-gradient(145deg,#1D3150,#0A162B)]">
          <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-[#D4B574]/20" />
          <div className="absolute -right-1 -top-5 h-28 w-28 rounded-full border border-[#D4B574]/15" />
          <div className="absolute bottom-5 left-6 text-[#D4B574]/20">
            <Icon size={100} strokeWidth={0.7} />
          </div>
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#DCC18A_0.8px,transparent_0.8px)] [background-size:25px_25px]" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081426]/95 via-[#081426]/15 to-[#081426]/5" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4B574]/50 bg-[#101C32]/90 text-[#E5BF72] shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-[#F2C46D] group-hover:bg-[#F2C46D] group-hover:text-[#101C32]">
          <Icon size={21} strokeWidth={1.7} />
        </div>
        <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
          {service.category}
        </span>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8DFCF] bg-white shadow-[0_8px_28px_rgba(16,28,50,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A15D]/70 hover:shadow-[0_22px_48px_rgba(16,28,50,0.11)]"
    >
      <ServiceImage service={service} />

      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7823F]">
            {service.category}
          </span>
          <span className="font-serif text-2xl text-[#C5A15D]/35">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h2 className="font-serif text-xl leading-snug text-[#17243A] transition-colors duration-300 group-hover:text-[#A7823F] sm:text-2xl">
          {service.title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#667085]">
          {service.description}
        </p>

        <div className="mt-auto pt-4">
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#ECE4D7] pt-4">
            <Link
              href={`/readings/${service.slug}`}
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#DCCBAA] px-3 py-3 text-xs font-semibold text-[#17243A] transition-all duration-300 hover:border-[#C5A15D] hover:bg-[#FAF5EA] sm:text-sm"
            >
              Explore Reading
              <ArrowRight size={15} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#101C32] px-3 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#C5A15D] hover:text-[#101C32] sm:text-sm"
            >
              Book Reading
              <MessageCircle size={15} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF7F0] text-[#17243A]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101C32] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_20%,rgba(197,161,93,0.2),transparent_38%),radial-gradient(ellipse_at_10%_90%,rgba(56,83,126,0.27),transparent_44%)]" />

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(#DCC18A_0.8px,transparent_0.8px)] [background-size:34px_34px]" />

        <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-72 w-72 rounded-full border border-[#C5A15D]/15 sm:h-96 sm:w-96" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A15D]/30 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.23em] text-[#DCC18A] sm:text-xs">
            <Sparkles size={15} />
            Pandit Kailash · Services
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Guidance for Every
            <span className="mt-2 block italic text-[#F2C46D]">
              Chapter of Your Life
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
            Explore psychic readings, astrology, palm reading and relationship
            guidance. Discover the available services and choose a consultation
            that fits your questions.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-[#F2C46D] px-6 text-sm font-bold text-[#101C32] shadow-[0_8px_25px_rgba(242,196,109,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7D38A] sm:w-auto"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </Link>

            <a
              href="#services-list"
              className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/30 px-6 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D4B574] hover:text-[#D4B574] sm:w-auto"
            >
              Explore Services
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#D4B574]" />
              Personalised consultations
            </span>
            <span className="inline-flex items-center gap-2">
              <Heart size={15} className="text-[#D4B574]" />
              Multiple reading options
            </span>
            <span className="inline-flex items-center gap-2">
              Enquire before booking
            </span>
          </div>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="services-list"
        className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-[0.23em] text-[#A7823F]">
              Explore Your Options
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#17243A] sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              Each consultation offers an opportunity to discuss the topics that
              matter to you. Select a service to begin your enquiry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {readingServiceList.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-[#E9E1D4] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-[0.23em] text-[#A7823F]">
              A Simple Process
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#17243A] sm:text-4xl md:text-5xl">
              How to Get Started
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base">
              Three straightforward steps to arrange a consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose a service",
                description:
                  "Select the reading that best matches the questions you would like to discuss.",
                icon: Compass,
              },
              {
                number: "02",
                title: "Send an enquiry",
                description:
                  "Contact Pandit Kailash to explain your requirements and ask about available options.",
                icon: MessageCircle,
              },
              {
                number: "03",
                title: "Confirm your booking",
                description:
                  "Discuss the format, availability and fees before confirming your consultation.",
                icon: Clock3,
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-[#E8DFCF] bg-[#FAF7F0] p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#101C32] text-[#D4B574]">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <span className="font-serif text-4xl text-[#C5A15D]/40">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-[#17243A]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
