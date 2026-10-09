"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
  FaCheckCircle,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineGlobeAlt } from "react-icons/hi2";

const WHATSAPP_NUMBER = "447552063168";
const PHONE_NUMBER = "+447552063168";

const locations = [
  {
    name: "London",
    region: "Greater London",
    image: "/images/home/locations/london.jpg",
    imageAlt: "Tower Bridge and the London skyline at sunset",
    description:
      "Personalised astrology and spiritual guidance for people across London, with convenient remote consultation options.",
    services: ["Psychic Readings", "Love & Relationships", "Vedic Astrology"],
    initials: "LDN",
  },
  {
    name: "Manchester",
    region: "North West England",
    image: "/images/home/locations/manchester.jpg",
    imageAlt: "Manchester city centre skyline at sunset",
    description:
      "Explore questions about relationships, career decisions and your personal journey through one-to-one consultations.",
    services: ["Career Guidance", "Horoscope Reading", "Palm Reading"],
    initials: "MAN",
  },
  {
    name: "Birmingham",
    region: "West Midlands",
    image: "/images/home/locations/birmingham.jpg",
    imageAlt: "Birmingham city centre skyline at sunset",
    description:
      "Connect for personalised spiritual guidance and astrology consultations from wherever you are in Birmingham.",
    services: ["Astrology", "Marriage Compatibility", "Psychic Guidance"],
    initials: "BHM",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/panditkailashuk?stkn=NnBhYzFvNHczMjBy",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CL7Lz5HBj/",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@panditkailashuk?si=A45cndSnP3Unp-qs",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@panditkailashuk",
    icon: FaTiktok,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function WhatsAppButton({ location = "the UK" }) {
  const message = `Hello Pandit Kailash, I would like to enquire about a consultation for ${location}. Please share the available options.`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#B8944D] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(184,148,77,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9E7A38] sm:w-auto"
    >
      <FaWhatsapp className="text-lg" />
      Enquire on WhatsApp
      <FaArrowRight className="ml-1 text-xs" />
    </a>
  );
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF8F3] text-[#17243A]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#101C32] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_25%,rgba(184,148,77,0.18),transparent_38%),radial-gradient(ellipse_at_85%_80%,rgba(68,91,133,0.28),transparent_42%)]" />
        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full border border-[#C8A96B]/15 sm:h-[28rem] sm:w-[28rem]" />
        <div className="pointer-events-none absolute -right-12 -top-16 -z-10 h-64 w-64 rounded-full border border-[#C8A96B]/10 sm:h-96 sm:w-96" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8A96B]/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DCC18A] sm:text-sm">
            <HiOutlineSparkles className="text-lg" />
            Serving clients across the UK
          </div>

          <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Spiritual Guidance,{" "}
            <span className="text-[#D4B574]">Wherever You Are</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            From London to Manchester and beyond, connect with Pandit Kailash
            for personalised astrology, psychic readings and spiritual guidance.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton />
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D4B574] hover:bg-white/5"
            >
              <FaPhoneAlt />
              Call Pandit Kailash
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#D4B574]" />
              UK-wide enquiries
            </span>
            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#D4B574]" />
              Flexible consultation options
            </span>
            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#D4B574]" />
              Open every day, 8 AM–8 PM
            </span>
          </div>
        </motion.div>
      </section>

      {/* Location cards */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#A7823F] sm:text-sm">
              Our Locations
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#17243A] sm:text-4xl md:text-5xl">
              Guidance Across the United Kingdom
            </h2>
            <p className="mt-5 text-base leading-7 text-[#687386] sm:text-lg">
              Wherever life takes you, explore consultation options designed
              around your questions, preferences and convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
              <motion.article
                key={location.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8E1D4] bg-white shadow-[0_12px_40px_rgba(23,36,58,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4B574]/70 hover:shadow-[0_24px_55px_rgba(23,36,58,0.09)]"
              >
                <div className="group/image relative isolate h-56 overflow-hidden bg-[#14223B] sm:h-60">
                  <Image
                    src={location.image}
                    alt={location.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover/image:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081426]/90 via-[#081426]/20 to-transparent" />
                  <span className="absolute right-6 top-5 font-serif text-5xl font-bold tracking-widest text-white/20 sm:text-6xl">
                    {location.initials}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-3 inline-flex items-center gap-2 text-sm text-[#F0D28E]">
                      <FaMapMarkerAlt />
                      {location.region}
                    </div>
                    <h3 className="font-serif text-3xl text-white sm:text-4xl">
                      {location.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-sm leading-7 text-[#687386] sm:text-base">
                    {location.description}
                  </p>

                  <div className="my-6 h-px bg-[#EEE9DF]" />

                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8D713C]">
                    Consultation options
                  </p>

                  <ul className="mb-7 space-y-3">
                    {location.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-3 text-sm text-[#354258]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F6F0E3] text-[#A7823F]">
                          <FaCheckCircle className="text-xs" />
                        </span>
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <WhatsAppButton location={location.name} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Remote consultation */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#F0E9DC] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#B8944D]/20 sm:h-80 sm:w-80" />
          <div className="pointer-events-none absolute -right-4 -top-8 h-48 w-48 rounded-full border border-[#B8944D]/15 sm:h-64 sm:w-64" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B8944D]/30 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8D713C]">
                <HiOutlineGlobeAlt className="text-lg" />
                Wherever you are
              </div>
              <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-[#17243A] sm:text-4xl lg:text-5xl">
                Not in These Cities? We Can Still Connect.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#687386]">
                You don’t need to be based in a particular city to enquire.
                Contact Pandit Kailash to discuss available consultation
                methods, including WhatsApp and telephone.
              </p>
            </div>

            <div className="rounded-2xl border border-white/80 bg-white/80 p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F6EE] text-2xl text-[#218C51]">
                  <FaWhatsapp />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#17243A]">
                    Start a Conversation
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#687386]">
                    Tell us your location and what type of guidance you’re
                    looking for. We’ll help you explore the next steps.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <WhatsAppButton location="a UK-wide consultation" />
              </div>
              <p className="mt-4 text-xs leading-5 text-[#8490A0]">
                Consultation format and in-person availability should be
                confirmed before booking.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact strip */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7823F]">
              Get in Touch
            </span>
            <h2 className="mt-3 font-serif text-3xl text-[#17243A] sm:text-4xl">
              Your Journey Starts with a Conversation
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#687386] sm:text-base">
              Have a question about a consultation? Contact us directly or
              explore our social channels.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#E5DED1] px-6 py-3.5 text-sm font-semibold text-[#17243A] transition-colors hover:border-[#B8944D] hover:bg-[#FAF8F3]"
            >
              <FaPhoneAlt className="text-[#A7823F]" />
              Call Us
            </a>
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#17243A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#263751]"
            >
              Contact Page
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="border-t border-[#EAE5DC] bg-[#FAF8F3] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-[#687386]">
            Follow Pandit Kailash for updates and spiritual insights.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#E5DED1] bg-white text-[#354258] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8944D] hover:bg-[#17243A] hover:text-white"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
