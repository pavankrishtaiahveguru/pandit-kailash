"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const videos = [
  {
    id: 1,
    title: "Meet Pandit Kailash",
    description:
      "Discover the approach behind personalised astrology, psychic readings and spiritual guidance.",
    thumbnail: "/images/about/pandit-kailash.jpg",
    videoUrl: "/videos/astro-1.mp4",
  },
  {
    id: 2,
    title: "Astrology & Life Guidance",
    description:
      "Learn how astrology and personal guidance can help bring clarity to important areas of life.",
    thumbnail: "/images/services/horoscope-birth-chart.jpeg",
    videoUrl: "/videos/astro-2.mp4",
  },
  {
    id: 3,
    title: "Love, Marriage & Career",
    description:
      "Explore personalised guidance for relationships, marriage, career and important life decisions.",
    thumbnail: "/images/services/career-life.jpg",
    videoUrl: "/videos/astro-3.MOV",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PromotionalVideoCard({ video, index }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoType = video.videoUrl.toLowerCase().endsWith(".mov")
    ? "video/quicktime"
    : "video/mp4";

  return (
    <motion.article
      variants={cardVariants}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group w-[72vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c9a45c]/40 hover:shadow-[0_22px_60px_rgba(201,164,92,0.08)] sm:w-auto sm:max-w-none"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
        {!videoFailed ? (
          <video
            key={video.videoUrl}
            poster={video.thumbnail}
            controls
            playsInline
            preload="metadata"
            aria-label={video.title}
            onError={() => setVideoFailed(true)}
            className="h-full w-full object-cover"
          >
            <source src={video.videoUrl} type={videoType} />
            Your browser does not support HTML video.
          </video>
        ) : (
          <div className="absolute inset-0 isolate flex items-end overflow-hidden">
            <Image
              src={video.thumbnail}
              alt=""
              fill
              sizes="(max-width: 640px) 72vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/95 via-[#07111f]/25 to-black/10" />
            <div className="relative z-10 p-4 sm:p-5">
              <h3 className="font-serif text-xl leading-tight text-white sm:text-2xl">
                {video.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-[#e0bf76]">
                Video temporarily unavailable.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="font-serif text-xl leading-tight text-white sm:text-2xl">
          {video.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-white/50">
          {video.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function PromotionalVideos() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07111f] py-12 sm:py-14 lg:py-16">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#c9a45c]/6 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#c9a45c]/5 blur-[130px]" />

          <div className="absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a45c] sm:text-xs">
                Discover the Guidance
              </span>

              <span className="h-px w-7 bg-[#c9a45c]" />
            </div>

            <h2 className="font-serif text-3xl leading-[1.1] text-white sm:text-4xl lg:text-[3.1rem]">
              Discover the Guidance
              <span className="block italic text-[#d8b56a]">
                Behind the Reading
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              Get to know Pandit Kailash and discover how personalised
              astrology, psychic readings and spiritual guidance can help bring
              clarity to different areas of your life.
            </p>
          </motion.div>

          {/* Video Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
          >
            {videos.map((video, index) => (
              <PromotionalVideoCard
                key={video.videoUrl}
                video={video}
                index={index}
              />
            ))}
          </motion.div>

          {/* Mobile Swipe Hint */}
          <div className="mt-2 text-center sm:hidden">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
              Swipe to explore videos
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
