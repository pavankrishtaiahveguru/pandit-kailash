"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Astrology Talk — Career & Finance",
    description:
      "A short reel on career and finance questions, and how online consultations work.",
    videoUrl: "/videos/astro-1.mp4",
  },
  {
    id: 2,
    title: "Introduction to Pandit Kailash",
    description:
      "A short introduction to personal astrology guidance and the questions you may wish to explore.",
    videoUrl: "/videos/astro-2.mp4",
  },
  {
    id: 3,
    title: "Astrology Talk — Which Reading Is Right for You?",
    description:
      "A short reel on choosing the right reading — love, palm reading and personal guidance.",
    // Confirm the actual filename in public/videos before deployment.
    videoUrl: "/videos/astro-3.mp4",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function getVideoType(videoUrl) {
  const extension = videoUrl.split(".").pop()?.toLowerCase();

  if (extension === "mov") return "video/quicktime";
  if (extension === "webm") return "video/webm";

  return "video/mp4";
}

function PromotionalVideoCard({ video }) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <motion.article
      variants={cardVariants}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101c2d] shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/50 hover:shadow-[0_24px_60px_rgba(201,164,92,0.12)]"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#030914]">
        {!videoFailed ? (
          <video
            key={video.videoUrl}
            className="absolute inset-0 h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            aria-label={video.title}
            onError={() => setVideoFailed(true)}
          >
            <source src={video.videoUrl} type={getVideoType(video.videoUrl)} />
            Your browser does not support HTML video.
          </video>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#101c32] via-[#0b1728] to-[#07111f] px-6 text-center">
            <span className="mb-5 h-px w-12 bg-[#c9a45c]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9a45c]">
              Video unavailable
            </p>
            <h3 className="mt-2 font-serif text-xl leading-snug text-white sm:text-2xl">
              {video.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/60">
              This video could not be loaded. Please try again later.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-4 lg:p-5">
        <h3 className="font-serif text-lg leading-snug text-white sm:text-xl lg:text-xl">
          {video.title}
        </h3>
        <p className="mt-1.5 text-sm leading-4 text-white/60">
          {video.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function PromotionalVideos() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#c9a45c]/[0.06] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#c9a45c]/[0.05] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a45c]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a45c] sm:text-xs">
              Discover the Guidance
            </span>
            <span className="h-px w-8 bg-[#c9a45c]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Discover the Guidance
            <span className="mt-1 block italic text-[#d8b56a]">
              Behind the Reading
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Get to know Pandit Kailash and discover how personalised astrology,
            psychic readings and spiritual guidance can help bring clarity to
            different areas of your life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:gap-8"
        >
          {videos.map((video) => (
            <PromotionalVideoCard key={video.id} video={video} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 text-center text-xs leading-6 text-white/40 sm:mt-10 sm:text-sm"
        >
          Take a moment to explore our videos and find the guidance that feels
          right for you.
        </motion.p>
      </div>
    </section>
  );
}
