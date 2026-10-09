"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { readingIcons } from "@/components/readings/readingIcons";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "447552063168";

const readingSteps = [
  {
    number: "01",
    title: "Choose Your Reading",
    description: "Start with the topic or questions you would like to discuss.",
  },
  {
    number: "02",
    title: "Speak With Your Astrologer",
    description:
      "Share your questions and discuss the consultation options available.",
  },
  {
    number: "03",
    title: "Receive Your Personal Reading",
    description:
      "Explore your questions in a private, one-to-one consultation.",
  },
];

function ReadingImage({ service }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = readingIcons[service.icon];

  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-[#C5A15D]/55 bg-[#14233C] shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
      {!imageFailed ? (
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_22%,rgba(197,161,93,0.24),transparent_38%),linear-gradient(145deg,#1D3150,#0A162B)]" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111F]/75 via-transparent to-[#07111F]/10" />
      <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/20 bg-[#101C32]/75 px-4 py-3 text-[#F2C46D] backdrop-blur-md sm:bottom-6 sm:left-6">
        <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white">
          {service.category}
        </span>
      </div>
    </div>
  );
}

function GuidanceVideoPlayer({ service }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const Icon = readingIcons[service.icon];

  return (
    <figure className="rounded-[1.4rem] border border-[#C5A15D]/35 bg-[#101C32] p-3 shadow-[0_24px_60px_rgba(16,28,50,0.18)] sm:p-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#0A162B]">
        {service.video && !videoFailed ? (
          <video
            key={service.video}
            poster={service.image}
            controls
            playsInline
            preload="metadata"
            aria-label={service.videoTitle}
            onError={() => setVideoFailed(true)}
            className="h-full w-full object-cover"
          >
            <source src={service.video} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        ) : (
          <div className="absolute inset-0 isolate flex flex-col items-center justify-center overflow-hidden px-8 text-center">
            <Image
              src={service.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,43,0.35),rgba(10,22,43,0.96))]" />
            <div className="pointer-events-none absolute -right-12 -top-10 -z-10 h-56 w-56 rounded-full border border-[#D4B574]/20" />
            <div className="pointer-events-none absolute -right-2 top-0 -z-10 h-36 w-36 rounded-full border border-[#D4B574]/15" />
            <Icon
              size={42}
              strokeWidth={1.2}
              className="relative z-10 mb-5 text-[#D4B574]"
              aria-hidden="true"
            />
            <p className="relative z-10 text-xs font-medium text-white/75">
              Video temporarily unavailable.
            </p>
          </div>
        )}
      </div>
      <figcaption className="px-2 pb-1 pt-4 sm:px-3 sm:pt-5">
        <h3 className="font-serif text-xl text-white sm:text-2xl">
          {service.videoTitle}
        </h3>
        <p className="mt-2 text-sm leading-6 text-white/60">
          {service.videoDescription}
        </p>
      </figcaption>
    </figure>
  );
}

function GuidanceVideo({ service }) {
  return <GuidanceVideoPlayer key={service.video} service={service} />;
}

export default function ReadingDetailPage({ service }) {
  const reducedMotion = useReducedMotion();
  const Icon = readingIcons[service.icon];
  const whatsappMessage = `Hello Pandit Kailash, I would like to ask about a ${service.title}.`;
  const initial = reducedMotion ? false : "hidden";
  const transition = {
    duration: reducedMotion ? 0 : 0.65,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <div id="top" className="overflow-hidden bg-[#FAF7F0] text-[#17243A]">
      <section className="relative isolate overflow-hidden bg-[#101C32] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_34%,rgba(197,161,93,0.19),transparent_38%),radial-gradient(ellipse_at_8%_85%,rgba(56,83,126,0.25),transparent_42%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(#DCC18A_0.8px,transparent_0.8px)] [background-size:34px_34px]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.8fr] lg:gap-16">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={transition}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A15D]/35 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#DCC18A] sm:text-xs">
              <Icon size={15} aria-hidden="true" />
              {service.eyebrow}
            </div>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              {service.shortDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask about ${service.title} on WhatsApp`}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-[#F2C46D] px-6 py-3 text-sm font-bold text-[#101C32] transition-colors hover:bg-[#F7D38A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101C32]"
              >
                <FaWhatsapp size={17} aria-hidden="true" />
                Ask on WhatsApp
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D4B574] hover:text-[#D4B574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4B574] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101C32]"
              >
                Book a Reading
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs leading-6 text-white/65 sm:flex-row sm:flex-wrap sm:gap-x-7">
              <p>London · Manchester · Birmingham</p>
              <p>WhatsApp · Phone · Online · In person where available</p>
            </div>
          </motion.div>

          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ ...transition, delay: reducedMotion ? 0 : 0.1 }}
          >
            <ReadingImage service={service} />
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:gap-20">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={transition}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A7823F] sm:text-xs">
              A Personal Consultation
            </span>
            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#17243A] sm:text-4xl md:text-5xl">
              {service.detailHeading}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              {service.detailDescription}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex min-h-12 items-center gap-3 border-b border-[#E8DFCF] py-3 text-sm leading-6 text-[#334155]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFE5D1] text-[#A7823F]">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 border-b border-[#C5A15D] pb-2 text-sm font-semibold text-[#17243A] transition-colors hover:text-[#A7823F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7823F]"
            >
              Discuss your questions
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={transition}
          >
            <GuidanceVideo service={service} />
          </motion.div>
        </div>
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/services"
            className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-lg border border-[#C5A15D]/60 bg-white px-6 py-3 text-sm font-semibold text-[#101C32] transition-all duration-300 hover:border-[#C5A15D] hover:bg-[#FBF2DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15D] focus-visible:ring-offset-2"
          >
            Explore All Services
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#101C32] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,161,93,0.12),transparent_48%)]"
        />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={transition}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4B574] sm:text-xs">
              Simple and Private
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              How It Works
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-7 md:mt-14 md:grid-cols-3 md:gap-0">
            {readingSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={initial}
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  ...transition,
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
                className={`border-t border-[#D4B574]/45 pt-5 md:px-7 md:pt-6 ${index === 0 ? "md:pl-0" : ""} ${index === readingSteps.length - 1 ? "md:pr-0" : "md:border-r"}`}
              >
                <span className="font-serif text-4xl text-[#D4B574]">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
