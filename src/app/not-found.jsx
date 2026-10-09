"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Telescope } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-[#FAF7F0] px-5 py-20 sm:px-8">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A15D]/10 blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Sparkles className="absolute left-[12%] top-[18%] h-5 w-5 text-[#C5A15D]/50" />
        <Sparkles className="absolute right-[14%] top-[25%] h-7 w-7 text-[#C5A15D]/40" />
        <span className="absolute left-[22%] top-[65%] h-1.5 w-1.5 rounded-full bg-[#C5A15D]/60" />
        <span className="absolute right-[24%] top-[72%] h-2 w-2 rounded-full bg-[#C5A15D]/50" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-3xl text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C5A15D]/40 bg-white shadow-[0_12px_45px_rgba(16,28,50,0.08)] sm:h-28 sm:w-28"
        >
          <Telescope
            className="h-11 w-11 text-[#B58A3A] sm:h-12 sm:w-12"
            strokeWidth={1.3}
          />
        </motion.div>

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#A77A2D] sm:text-sm">
          A Little Cosmic Detour
        </p>

        <h1 className="font-serif text-7xl font-medium tracking-tight text-[#101C32] sm:text-8xl lg:text-9xl">
          404
        </h1>

        <div className="mx-auto mt-5 h-px w-20 bg-[#C5A15D]" />

        <h2 className="mt-7 font-serif text-3xl leading-tight text-[#101C32] sm:text-4xl lg:text-5xl">
          This Path Was Not Written in the Stars
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          The page you are looking for may have moved or no longer exists. Let
          us help you find your way back to the guidance you need.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/"
            className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#101C32] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#101C32]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D2D49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A15D]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Return Home
          </Link>

          <Link
            href="/services"
            className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#C5A15D]/60 bg-white px-7 py-3 text-sm font-semibold text-[#101C32] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C5A15D] hover:bg-[#FBF2DF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A15D]"
          >
            Explore Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Need personal guidance?{" "}
          <Link
            href="/contact"
            className="cursor-pointer font-semibold text-[#A77A2D] underline decoration-[#C5A15D]/40 underline-offset-4 transition-colors hover:text-[#101C32]"
          >
            Contact Pandit Kailash
          </Link>
        </p>
      </motion.section>
    </main>
  );
}
