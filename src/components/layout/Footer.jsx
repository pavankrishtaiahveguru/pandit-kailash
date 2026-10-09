"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "All Services", href: "/services" },
  { label: "Psychic Guidance", href: "/services" },
  { label: "Relationship Guidance", href: "/services" },
  { label: "Career & Finance", href: "/services" },
  { label: "Spiritual Guidance", href: "/services" },
  { label: "Palm Reading", href: "/services" },
];

const locationLinks = [
  { label: "London", href: "/locations/london" },
  { label: "Manchester", href: "/locations/manchester" },
  { label: "Birmingham", href: "/locations/birmingham" },
  { label: "Online Worldwide", href: "/locations/online" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
  {
    label: "TikTok",
    href: "#",
    icon: FaTiktok,
  },
];

const whatsappNumber = "447417395914";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061b32] text-white">
      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* Footer Artwork */}
        <Image
          src="/images/home/footer-cta-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Dark readability overlay */}
        <div className="absolute inset-0 -z-10 bg-[#061b32]/30" />

        {/* Soft center glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(6,27,50,0.12),rgba(6,27,50,0.42)_75%)]" />

        {/* CTA Content */}
        <div className="relative mx-auto flex min-h-[330px] max-w-7xl items-center justify-center px-5 py-12 sm:min-h-[350px] sm:px-8 sm:py-14 lg:min-h-[370px] lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e4bd6b] sm:text-xs">
              Private Guidance
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#fff8eb] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[44px]">
              Ready for Your Personal Guidance?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:text-base sm:leading-8">
              Take the first step towards clarity, peace and a brighter future.
              Connect with Pandit Kailash today.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 min-w-[175px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#e2b85d] px-5 py-3 text-sm font-semibold text-[#071b32] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0ca75] hover:shadow-[0_12px_35px_rgba(226,184,93,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32] sm:text-base"
              >
                <FaWhatsapp size={16} />

                <span>Speak on WhatsApp</span>

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 min-w-[155px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/45 bg-[#061b32]/45 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e2b85d] hover:bg-[#061b32]/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2b85d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32] sm:text-base"
              >
                <span>Book a Reading</span>

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <section className="relative bg-[#061b32]">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(214,166,73,0.06),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.03),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.95fr_0.95fr_1.35fr] lg:gap-8 xl:gap-10">
            {/* =====================================================
                BRAND
            ===================================================== */}
            <div>
              <Link
                href="/"
                className="inline-block cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5bd6a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32]"
                aria-label="Pandit Kailash Home"
              >
                <Image
                  src="/logo/logo.png"
                  alt="Pandit Kailash - Astrology & Psychic Readings"
                  width={190}
                  height={70}
                  className="h-auto w-[165px] object-contain"
                />
              </Link>

              <p className="mt-4 max-w-[360px] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Vedic astrology, psychic readings and spiritual guidance in
                London, Manchester and Birmingham, plus WhatsApp, phone and
                online consultations.
              </p>

              {/* Social Icons */}
              <div className="mt-5">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#d8ad5a] sm:text-base">
                  Follow Pandit Kailash
                </p>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#d8ad5a] hover:bg-[#d8ad5a] hover:text-[#061b32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5bd6a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32]"
                      >
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =====================================================
                QUICK LINKS
            ===================================================== */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#d8ad5a] sm:text-base">
                Quick Links
              </h3>

              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-block cursor-pointer text-base leading-6 text-white/70 transition-colors duration-200 hover:text-[#e5bd6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5bd6a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32] sm:text-[17px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================================
                READINGS
            ===================================================== */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#d8ad5a] sm:text-base">
                Services
              </h3>

              <ul className="space-y-4">
                {servicesLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-block cursor-pointer text-base leading-6 text-white/70 transition-colors duration-200 hover:text-[#e5bd6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5bd6a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32] sm:text-[17px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================================
                LOCATIONS + CONTACT
            ===================================================== */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#d8ad5a] sm:text-base">
                Locations
              </h3>

              <ul className="space-y-4">
                {locationLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-block cursor-pointer text-base leading-6 text-white/70 transition-colors duration-200 hover:text-[#e5bd6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5bd6a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32] sm:text-[17px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact */}
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#d8ad5a] sm:text-base">
                  Contact
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+447417395914"
                    className="flex cursor-pointer items-start gap-3 text-base leading-7 text-white/70 transition-colors hover:text-[#e5bd6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5bd6a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32] sm:text-[17px]"
                  >
                    <Phone size={16} className="mt-1.5 shrink-0" />
                    <span>+44 7417 395914</span>
                  </a>

                  <a
                    href="mailto:info@panditkailash.co.uk"
                    className="flex cursor-pointer items-start gap-3 text-base leading-7 text-white/70 transition-colors hover:text-[#e5bd6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5bd6a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061b32] sm:text-[17px]"
                  >
                    <Mail size={16} className="mt-1.5 shrink-0" />
                    <span>info@panditkailash.co.uk</span>
                  </a>

                  <div className="flex items-start gap-3 text-base leading-7 text-white/70 sm:text-[17px]">
                    <Clock3 size={16} className="mt-1.5 shrink-0" />
                    <span className="text-balance">
                      Mon - Sun: 9AM - 9PM (UK Time)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}
      <div className="border-t border-white/10 bg-[#04172b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-sm text-white/55 sm:text-base">
            © {new Date().getFullYear()} Pandit Kailash. All rights reserved.
          </p>

          <DevelopedByStaffArc />
        </div>
      </div>
    </footer>
  );
}
