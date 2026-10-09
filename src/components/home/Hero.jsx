"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, MapPin, Users,Phone } from "lucide-react";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import { displaySerif } from "@/lib/fonts";
import CosmicBackground, {
  Particles,
} from "@/components/home/CosmicBackground";

const WHATSAPP_URL = "https://wa.me/447417395914";
const ORBIT_DURATION = 80;
const EASE = [0.22, 1, 0.36, 1];

// Angles run clockwise from 12 o'clock: ♓ sits at the top, ♈ just left of it, ♍ at the bottom.
// U+FE0E forces the text (non-emoji) presentation of each glyph.
const zodiacSigns = [
  { symbol: "♈︎", name: "Aries", angle: 330 },
  { symbol: "♉︎", name: "Taurus", angle: 300 },
  { symbol: "♊︎", name: "Gemini", angle: 270 },
  { symbol: "♋︎", name: "Cancer", angle: 240 },
  { symbol: "♌︎", name: "Leo", angle: 210 },
  { symbol: "♍︎", name: "Virgo", angle: 180 },
  { symbol: "♎︎", name: "Libra", angle: 150 },
  { symbol: "♏︎", name: "Scorpio", angle: 120 },
  { symbol: "♐︎", name: "Sagittarius", angle: 90 },
  { symbol: "♑︎", name: "Capricorn", angle: 60 },
  { symbol: "♒︎", name: "Aquarius", angle: 30 },
  { symbol: "♓︎", name: "Pisces", angle: 0 },
];

// Symbol centres sit at 42.5% of the orbit box, between the inner (35%) and outer (50%) rings.
const ORBIT_RADIUS = 42.5;

const stats = [
  { value: "10,000+", label: "Happy Clients", icon: Users },
  { value: "15+ Years", label: "Guidance Experience", icon: Award },
  { value: "3 Locations", label: "UK Coverage", icon: MapPin },
];

const guidanceItems = [
  {
    title: "Love & Relationships",
    description: "Find harmony in relationships",
    icon: HeartIcon,
  },
  {
    title: "Career & Success",
    description: "Make confident decisions",
    icon: CareerIcon,
  },
  {
    title: "Health & Wellbeing",
    description: "Inner peace and balance",
    icon: LeafIcon,
  },
  {
    title: "Spiritual Growth",
    description: "Reconnect with your higher self",
    icon: LotusIcon,
  },
];

function HeartIcon() {
  return <FaHeart className="h-9 w-9 text-[#f2738f] lg:h-10 lg:w-10" />;
}

function CareerIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-10 w-10 text-[#f2c46d] lg:h-11 lg:w-11"
    >
      <rect x="6" y="31" width="6" height="12" rx="1" fill="currentColor" />
      <rect x="16" y="25" width="6" height="18" rx="1" fill="currentColor" />
      <rect x="26" y="19" width="6" height="24" rx="1" fill="currentColor" />
      <rect x="36" y="13" width="6" height="30" rx="1" fill="currentColor" />
      <path
        d="M5 24L15 17L23 20L39 7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 6H40V14"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-10 w-10 text-[#f2c46d] lg:h-11 lg:w-11"
    >
      <path
        d="M41 6C24 6 9 15 9 31C9 35 10 38 12 41C29 41 41 29 41 12V6Z"
        fill="currentColor"
      />
      <path
        d="M14 37C19 29 25 22 33 15"
        stroke="#0a1830"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M12 41L7 45"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-10 w-10 text-[#f2c46d] lg:h-12 lg:w-12"
    >
      <path
        d="M24 8C29 14 29.5 25 24 34C18.5 25 19 14 24 8Z"
        fill="currentColor"
      />
      <path
        d="M23 34C15 32.5 10.5 25 10.5 16C17 18.5 21.5 25 23 34Z"
        fill="currentColor"
      />
      <path
        d="M25 34C33 32.5 37.5 25 37.5 16C31 18.5 26.5 25 25 34Z"
        fill="currentColor"
      />
      <path
        d="M23 36.5C13.5 38 5.5 33.5 2.5 26C10.5 25 18.5 29 23 36.5Z"
        fill="currentColor"
      />
      <path
        d="M25 36.5C34.5 38 42.5 33.5 45.5 26C37.5 25 29.5 29 25 36.5Z"
        fill="currentColor"
      />
      <path
        d="M12 40H36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ZodiacOrbit({ reduceMotion }) {
  const spin = reduceMotion ? undefined : { rotate: 360 };
  const counterSpin = reduceMotion ? undefined : { rotate: -360 };
  const loop = { duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" };

  return (
    <div className="absolute left-1/2 top-1/2 z-20 aspect-square w-[min(80vw,340px)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(66vw,480px)] lg:top-[47%] lg:w-[min(38vw,600px,calc((100svh-210px)*0.92))] lg:min-w-[380px] 2xl:w-[min(41vw,820px,calc((100svh-210px)*0.92))]">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
        className="@container absolute inset-0"
      >
        {/* Warm halo behind the logo */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.75, 1, 0.75], scale: [0.98, 1.03, 0.98] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(255,206,120,0.42)_0%,rgba(244,168,70,0.2)_38%,rgba(244,168,70,0.06)_58%,transparent_72%)] blur-xl"
        />

        {/* Thin wheel rings */}
        <div className="absolute inset-0 rounded-full border border-[#e5b450]/45 shadow-[0_0_24px_rgba(229,180,80,0.18),inset_0_0_24px_rgba(229,180,80,0.12)]" />
        <div className="absolute inset-[1.6%] rounded-full border border-[#e5b450]/20" />
        <div className="absolute inset-[15%] rounded-full border border-[#e5b450]/50 shadow-[0_0_18px_rgba(229,180,80,0.25)]" />

        {/* Rotating wheel: spokes + zodiac symbols */}
        <motion.div
          animate={spin}
          transition={loop}
          className="absolute inset-0"
        >
          {zodiacSigns.map((sign) => (
            <div
              key={`spoke-${sign.name}`}
              className="absolute inset-0"
              style={{ transform: `rotate(${sign.angle + 15}deg)` }}
            >
              <span className="absolute left-1/2 top-[1.6%] h-[13.4%] w-px -translate-x-1/2 bg-gradient-to-b from-[#e5b450]/45 to-[#e5b450]/15" />
            </div>
          ))}

          {zodiacSigns.map((sign) => {
            const radians = (sign.angle * Math.PI) / 180;
            const left = 50 + ORBIT_RADIUS * Math.sin(radians);
            const top = 50 - ORBIT_RADIUS * Math.cos(radians);

            return (
              <div
                key={sign.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <motion.span
                  animate={counterSpin}
                  transition={loop}
                  role="img"
                  aria-label={sign.name}
                  className="block font-serif text-[length:7.6cqw] leading-none text-[#f3c86b] [text-shadow:0_0_12px_rgba(235,185,85,0.55),0_0_2px_rgba(255,228,170,0.8)]"
                >
                  {sign.symbol}
                </motion.span>
              </div>
            );
          })}
        </motion.div>

        {/* Stationary central logo */}
        <div className="absolute inset-[18%]">
          <Image
            src="/logo/logo-mark.png"
            alt="Pandit Kailash Astrology & Psychic Readings"
            fill
            priority
            sizes="(min-width: 1024px) 28vw, 60vw"
            className="object-contain drop-shadow-[0_0_35px_rgba(255,196,110,0.45)]"
          />
        </div>
      </motion.div>
    </div>
  );
}

function HeroArtwork({ reduceMotion }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: EASE }}
      className="relative order-2 -mx-5 mt-8 aspect-square overflow-hidden sm:-mx-10 sm:mt-10 sm:aspect-[5/4] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mt-0 lg:aspect-auto lg:w-[64%]"
    >
      <CosmicBackground reduceMotion={reduceMotion} />
      <Particles reduceMotion={reduceMotion} />
      <ZodiacOrbit reduceMotion={reduceMotion} />
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

function HeroCopy() {
  return (
    <div className="relative z-30 order-1 pt-12 sm:pt-16 lg:max-w-[46%] lg:pt-0">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e9b44f] sm:text-xs xl:text-[13px] 2xl:text-[15px]"
      >
        Vedic Astrology &amp; Psychic Guidance
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className={`${displaySerif.className} mt-4 text-[42px] font-normal leading-[1.05] tracking-[-0.012em] text-[#fbf6ec] sm:text-[56px] lg:text-[clamp(52px,calc(3.4vw+12px),74px)] xl:mt-5`}
      >
        Discover Clarity
        <br />
        in Every Chapter
        <br />
        of <span className="italic text-[#f2c46d]">Your Life</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.35}
        className="mt-4 max-w-[600px] text-[15px] leading-[1.6] text-[#e6ebf2]/90 sm:text-[17px] lg:max-w-[min(680px,40vw)] lg:text-[clamp(16px,1.24vw,22px)] xl:mt-5"
      >
        Personalised astrology, psychic readings and spiritual guidance from
        Pandit Kailash. Trusted by clients in London, Manchester, Birmingham and
        worldwide.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 xl:mt-8"
      >
        {/* WhatsApp */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#f2c46d] px-4 text-sm font-bold text-[#0a1830] shadow-[0_6px_20px_rgba(242,196,109,0.16)] transition-all duration-300 hover:bg-[#f7d38a] hover:shadow-[0_10px_28px_rgba(242,196,109,0.28)] sm:px-5 xl:h-[50px] xl:px-6"
        >
          <FaWhatsapp className="h-[18px] w-[18px]" />
          <span>WhatsApp a Psychic</span>
          <ArrowRight
            size={16}
            strokeWidth={2.2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>

        {/* Book a Reading */}
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/contact"
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#fff5e4] px-4 text-sm font-bold text-[#0a1830] transition-colors duration-300 hover:bg-white sm:px-5 xl:h-[50px] xl:px-6"
          >
            <span>Book a Reading</span>
            <ArrowRight size={16} strokeWidth={2.2} />
          </Link>
        </motion.div>

        {/* Call Now */}
        <motion.a
          href="tel:+447552063168"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/35 bg-[#061225]/40 px-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#f2c46d] hover:text-[#f2c46d] sm:px-5 xl:h-[50px] xl:px-6"
        >
          <Phone size={16} strokeWidth={2} />
          <span>Call Now</span>
        </motion.a>
      </motion.div>
    </div>
  );
}

function HeroStats() {
  return (
    <motion.ul
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.65}
      className="relative z-30 order-3 mt-8 grid grid-cols-3 gap-3 sm:gap-6 lg:mt-9 lg:flex lg:max-w-[58%] lg:gap-[clamp(24px,2.8vw,64px)]"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <li
            key={stat.label}
            className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-4 lg:whitespace-nowrap"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#e5b450] text-[#f2c46d] sm:h-12 sm:w-12 xl:h-14 xl:w-14">
              <Icon className="h-5 w-5 xl:h-6 xl:w-6" strokeWidth={1.9} />
            </span>
            <span>
              <span className="block text-[15px] font-semibold leading-tight text-white sm:text-[17px] xl:text-[20px]">
                {stat.value}
              </span>
              <span className="mt-1 block text-[12px] leading-snug text-white/75 sm:text-[14px] xl:text-[16px]">
                {stat.label}
              </span>
            </span>
          </li>
        );
      })}
    </motion.ul>
  );
}

function GuidanceStrip() {
  return (
    <div className="relative z-20 border-t border-white/10 bg-[#0a1830]">
      <ul className="mx-auto grid max-w-[1920px] grid-cols-1 px-5 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-[4.5vw]">
        {guidanceItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: EASE }}
              className="group relative border-b border-white/10 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[62%] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-white/15 lg:first:before:hidden"
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="flex cursor-default items-center gap-4 py-5 lg:gap-4 lg:px-[2vw] lg:py-7 lg:whitespace-nowrap xl:gap-5 xl:py-8 lg:group-first:pl-[1.6vw]"
              >
                <span className="flex w-11 shrink-0 justify-center transition-transform duration-500 group-hover:scale-110 lg:w-12">
                  <Icon />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-white xl:text-[18px]">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[13px] text-white/70 xl:text-[14px] 2xl:text-[15px]">
                    {item.description}
                  </span>
                </span>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#061225] pt-[70px] font-(family-name:--font-geist-sans) text-white lg:pt-[90px]">
      <div className="relative isolate flex lg:min-h-[max(620px,calc(100svh-90px-112px))]">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col px-5 pb-10 sm:px-10 lg:justify-center lg:px-[6vw] lg:py-12">
          <HeroCopy />
          <HeroArtwork reduceMotion={reduceMotion} />
          <HeroStats />
        </div>
      </div>

      <GuidanceStrip />
    </section>
  );
}
