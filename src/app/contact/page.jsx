"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCheck,
} from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi2";

const WHATSAPP_NUMBER = "447552063168";
const PHONE_NUMBER = "+447552063168";
const EMAIL_ADDRESS = "psychickailashshastri@gmail.com";

const consultationOptions = [
  "WhatsApp",
  "Telephone",
  "Online consultation",
  "In person where available",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/panditkailashuk?stkn=NnBhYzFvNHczMjBy",
    icon: FaInstagram,
    label: "Follow Pandit Kailash on Instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CL7Lz5HBj/",
    icon: FaFacebookF,
    label: "Follow Pandit Kailash on Facebook",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@panditkailashuk?si=A45cndSnP3Unp-qs",
    icon: FaYoutube,
    label: "Watch Pandit Kailash on YouTube",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@panditkailashuk",
    icon: FaTiktok,
    label: "Follow Pandit Kailash on TikTok",
  },
];

const contactCards = [
  {
    title: "WhatsApp",
    description: "Message directly for a private enquiry.",
    detail: "+44 7552 063168",
    icon: FaWhatsapp,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    action: "Send a WhatsApp message",
  },
  {
    title: "Telephone",
    description: "Call to discuss your reading and availability.",
    detail: "+44 7552 063168",
    icon: FaPhoneAlt,
    href: `tel:${PHONE_NUMBER}`,
    action: "Call Pandit Kailash",
  },
  {
    title: "Email",
    description: "Write to us about your personal guidance needs.",
    detail: EMAIL_ADDRESS,
    icon: FaEnvelope,
    href: `mailto:${EMAIL_ADDRESS}`,
    action: "Send an email",
  },
  {
    title: "Consultation options",
    description: "Choose a convenient way to receive personal guidance.",
    detail: "Online, telephone, WhatsApp or in person",
    icon: FaCalendarAlt,
    href: "#enquiry-form",
    action: "Make an enquiry",
  },
];

/* Gentle drift timings for the hero stars (kept subtle and CSS-driven) */
const starSeeds = [
  { top: "12%", left: "8%", size: 2, delay: 0 },
  { top: "22%", left: "26%", size: 2, delay: 1.1 },
  { top: "9%", left: "44%", size: 3, delay: 0.5 },
  { top: "30%", left: "61%", size: 2, delay: 2 },
  { top: "14%", left: "74%", size: 2, delay: 1.6 },
  { top: "38%", left: "88%", size: 3, delay: 0.8 },
  { top: "48%", left: "15%", size: 2, delay: 2.4 },
  { top: "56%", left: "34%", size: 2, delay: 0.3 },
  { top: "44%", left: "51%", size: 3, delay: 1.9 },
  { top: "60%", left: "70%", size: 2, delay: 1.2 },
  { top: "66%", left: "92%", size: 2, delay: 0.6 },
  { top: "72%", left: "5%", size: 3, delay: 2.2 },
  { top: "78%", left: "22%", size: 2, delay: 1.5 },
  { top: "84%", left: "42%", size: 2, delay: 0.9 },
  { top: "74%", left: "58%", size: 3, delay: 2.6 },
  { top: "88%", left: "76%", size: 2, delay: 0.4 },
  { top: "90%", left: "95%", size: 2, delay: 1.8 },
  { top: "35%", left: "95%", size: 2, delay: 2.8 },
  { top: "6%", left: "63%", size: 2, delay: 0.2 },
  { top: "5%", left: "18%", size: 2, delay: 1.4 },
  { top: "52%", left: "3%", size: 2, delay: 2.1 },
  { top: "68%", left: "12%", size: 2, delay: 0.7 },
  { top: "82%", left: "64%", size: 2, delay: 1.7 },
  { top: "94%", left: "33%", size: 2, delay: 2.9 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroStars() {
  const stars = useMemo(() => starSeeds, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={`star-${index}`}
          className="animate-star-twinkle absolute rounded-full bg-white/70"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: "3.6s",
            boxShadow: "0 0 6px 1px rgba(255,255,255,0.35)",
          }}
        />
      ))}

      {/* Delicate golden constellation accents */}
      <span
        aria-hidden="true"
        className="animate-star-twinkle absolute h-1.5 w-1.5 rounded-full bg-[#C5A15D]/80"
        style={{
          top: "18%",
          right: "16%",
          animationDelay: "1.3s",
          animationDuration: "4.2s",
          boxShadow: "0 0 10px 2px rgba(197,161,93,0.4)",
        }}
      />
      <span
        aria-hidden="true"
        className="animate-star-twinkle absolute h-1 w-1 rounded-full bg-[#C5A15D]/70"
        style={{
          top: "62%",
          left: "8%",
          animationDelay: "2.5s",
          animationDuration: "4.6s",
          boxShadow: "0 0 8px 2px rgba(197,161,93,0.35)",
        }}
      />

      {/* Thin gold celestial arcs */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-[-90px] h-64 w-64 rounded-full"
        style={{
          border: "1px solid rgba(197,161,93,0.22)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 top-[-60px] h-44 w-44 rounded-full"
        style={{
          border: "1px solid rgba(197,161,93,0.16)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-[-70px] h-52 w-52 rounded-full"
        style={{
          border: "1px solid rgba(197,161,93,0.18)",
        }}
      />
    </div>
  );
}

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    method: "WhatsApp",
    message: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const message = formData.message.trim();

    if (!name) {
      setError("Please enter your name so we know who is enquiring.");
      return;
    }

    if (!message) {
      setError("Please tell us briefly what you would like guidance about.");
      return;
    }

    const whatsappMessage = [
      "Namaste Pandit Kailash,",
      "",
      `My name is ${name}.`,
      `Preferred consultation method: ${formData.method}.`,
      "",
      "I would like guidance about:",
      message,
      "",
      "Please let me know the next steps and availability.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setError("");
  };

  const heroMotion = prefersReducedMotion
    ? { variants: undefined, initial: false, animate: undefined }
    : { variants: fadeUp, initial: "hidden", animate: "visible" };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF7F0] text-[#101C32]">
      {/* Deep navy hero with CSS stars */}
      <section className="relative overflow-hidden bg-[#101C32] text-white">
        {!prefersReducedMotion && <HeroStars />}

        {/* Subtle radial depth, pure CSS */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(23,36,58,0.9), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <motion.div {...heroMotion}>
            <div className="mb-6 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#C5A15D]/60" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A15D] sm:text-xs">
                Personal Astrology &amp; Spiritual Guidance
              </p>
              <span aria-hidden="true" className="h-px w-8 bg-[#C5A15D]/60" />
            </div>

            <h1 className="font-serif text-4xl leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Let&apos;s Find Your
              <span className="mt-1 block italic text-[#C5A15D]">
                Path to Clarity
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Have a question about love, relationships, marriage, career or
              astrology? Send a private enquiry to Pandit Kailash and choose
              the consultation method that suits you.
            </p>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(197,161,93,0.45), transparent)",
          }}
        />
      </section>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.3fr] lg:gap-10">
          {/* Left column */}
          <motion.aside
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            transition={prefersReducedMotion ? undefined : { delay: 0.12 }}
            className="space-y-4"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("https://") ? "_blank" : undefined}
                  rel={card.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.25 }}
                  className="group flex cursor-pointer items-start gap-4 rounded-lg border border-[#E9DFC9] bg-[#FFFFFF] p-5 shadow-[0_2px_10px_rgba(16,28,50,0.04)] transition-all duration-300 hover:border-[#C5A15D]/50 hover:shadow-[0_10px_28px_rgba(16,28,50,0.08)] sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#E9DFC9] bg-[#FAF7F0] text-[#C5A15D] transition-colors duration-300 group-hover:border-[#C5A15D]/40 group-hover:bg-[#F5EBD8]">
                    <Icon size={18} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-serif text-lg text-[#101C32] sm:text-xl">
                        {card.title}
                      </span>
                      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C5A15D] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block">
                        {card.action} <FaExternalLinkAlt className="ml-1 inline" size={9} />
                      </span>
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[#667085]">
                      {card.description}
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-[#101C32]">
                      {card.detail}
                    </span>
                  </span>
                </motion.a>
              );
            })}

            {/* Availability card */}
            <div className="rounded-lg border border-[#C5A15D]/40 bg-gradient-to-br from-[#F5EBD8] to-[#FAF7F0] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#C5A15D] shadow-sm">
                  <HiOutlineMoon size={18} />
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#101C32] sm:text-[15px]">
                  Consultation availability
                </h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Consultations are available Monday to Sunday, from 8 AM to 8
                PM. Contact Pandit Kailash to discuss availability and arrange
                a suitable time.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#8E6A30]">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Enquiries welcome throughout the week
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-lg border border-[#E9DFC9] bg-[#FFFFFF] p-5 sm:p-6">
              <h2 className="font-serif text-xl text-[#101C32] sm:text-2xl">
                Follow Pandit Kailash
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Explore astrology insights, videos and spiritual guidance
                across social media.
              </p>

              <div className="mt-5 grid grid-cols-4 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.name}
                      className="group flex aspect-square cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border border-[#E9DFC9] bg-[#FAF7F0] text-[#C5A15D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C5A15D]/50 hover:bg-[#F5EBD8] hover:shadow-[0_8px_18px_rgba(16,28,50,0.07)]"
                    >
                      <Icon size={19} />
                      <span className="text-[10px] font-medium text-[#667085] group-hover:text-[#101C32]">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.aside>

          {/* Enquiry form */}
          <motion.section
            id="enquiry-form"
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            transition={prefersReducedMotion ? undefined : { delay: 0.2 }}
            className="scroll-mt-28 rounded-lg border border-[#E9DFC9] bg-[#FFFFFF] p-5 shadow-[0_3px_14px_rgba(16,28,50,0.05),0_18px_50px_rgba(16,28,50,0.06)] sm:p-8 lg:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#101C32] text-[#C5A15D] sm:flex">
                <FaWhatsapp size={22} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C5A15D] sm:text-xs">
                  Start a Conversation
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-tight text-[#101C32] sm:text-3xl lg:text-[32px]">
                  Send a private enquiry
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#667085] sm:leading-7">
                  Tell us a little about yourself and the guidance you are
                  looking for. Your message will open in WhatsApp for you to
                  review before sending.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#101C32]"
                >
                  Full name <span className="text-[#C5A15D]">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full rounded-md border border-[#E9DFC9] bg-[#FAF7F0] px-4 py-3.5 text-sm text-[#101C32] outline-none transition-all duration-200 placeholder:text-[#9AA1AC] hover:border-[#C5A15D]/60 focus:border-[#C5A15D] focus:bg-white focus:ring-4 focus:ring-[#C5A15D]/15"
                />
              </div>

              {/* Consultation method */}
              <div>
                <label
                  htmlFor="method"
                  className="mb-2 block text-sm font-semibold text-[#101C32]"
                >
                  Preferred consultation method
                </label>

                <div className="relative">
                  <select
                    id="method"
                    name="method"
                    value={formData.method}
                    onChange={handleChange}
                    className="w-full cursor-pointer appearance-none rounded-md border border-[#E9DFC9] bg-[#FAF7F0] px-4 py-3.5 pr-11 text-sm text-[#101C32] outline-none transition-all duration-200 hover:border-[#C5A15D]/60 focus:border-[#C5A15D] focus:bg-white focus:ring-4 focus:ring-[#C5A15D]/15"
                  >
                    {consultationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C5A15D]">
                    <FaArrowRight className="rotate-90" size={12} />
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#667085]">
                  Choose how you would prefer to speak with Pandit Kailash.
                </p>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#101C32]"
                >
                  What would you like guidance about?{" "}
                  <span className="text-[#C5A15D]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={1500}
                  rows={5}
                  placeholder="For example, love and relationships, marriage, career, Vedic astrology or a personal question..."
                  className="w-full resize-y rounded-md border border-[#E9DFC9] bg-[#FAF7F0] px-4 py-3.5 text-sm leading-6 text-[#101C32] outline-none transition-all duration-200 placeholder:text-[#9AA1AC] hover:border-[#C5A15D]/60 focus:border-[#C5A15D] focus:bg-white focus:ring-4 focus:ring-[#C5A15D]/15"
                />

                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="text-xs leading-5 text-[#667085]">
                    Share only what you feel comfortable sharing.
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-[#667085]">
                    {formData.message.length}/1500
                  </span>
                </div>
              </div>

              {/* Validation message */}
              {error && (
                <div
                  role="alert"
                  className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                >
                  {error}
                </div>
              )}

              {/* Success feedback */}
              {submitted && (
                <div
                  role="status"
                  className="flex items-start gap-2.5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800"
                >
                  <FaCheck className="mt-1 shrink-0" size={14} />
                  WhatsApp has been opened. Review your enquiry and press Send
                  in WhatsApp to complete it — your message is not sent until
                  you confirm it there.
                </div>
              )}

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-[#101C32] px-5 py-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(16,28,50,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17243A] hover:shadow-[0_12px_30px_rgba(16,28,50,0.24)] active:translate-y-0"
                >
                  <FaWhatsapp className="text-[#C5A15D]" size={19} />
                  Continue to WhatsApp
                  <FaArrowRight
                    className="ml-auto transition-transform duration-300 group-hover:translate-x-1"
                    size={14}
                  />
                </button>

                <p className="mt-3 text-center text-xs leading-5 text-[#667085]">
                  Your message is not sent until you confirm it in WhatsApp.
                </p>
              </div>
            </form>
          </motion.section>
        </div>

        {/* Bottom reassurance */}
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-12 max-w-3xl space-y-3 text-center sm:mt-16"
        >
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#C5A15D]/50" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A15D] sm:text-xs">
              A private, personal conversation
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-[#C5A15D]/50" />
          </div>

          <p className="mx-auto max-w-xl text-sm leading-6 text-[#667085]">
            Whether you are exploring astrology for the first time or looking
            for a personal consultation, you are welcome to get in touch.
          </p>

          <Link
            href="/"
            className="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-[#C5A15D] transition-colors hover:text-[#101C32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A15D]"
          >
            Return to homepage
            <FaArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
