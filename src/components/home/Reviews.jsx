"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Client in London",
    location: "London",
    category: "Relationship Reading",
    image: "/images/home/reviews/client-london.jpg",
    text: "I contacted Pandit Kailash for a relationship reading and the consultation was very calm and easy to understand. I felt comfortable asking personal questions and the guidance was explained clearly.",
  },
  {
    name: "Client in Manchester",
    location: "Manchester",
    category: "Career & Personal Guidance",
    image: "/images/home/reviews/client-manchester.jpg",
    text: "This was my first astrology reading, so I was not sure what to expect. Pandit Kailash explained everything in a simple way and gave me useful insight about my career and personal life.",
  },
  {
    name: "Client in Birmingham",
    location: "Birmingham",
    category: "Marriage & Family Reading",
    image: "/images/home/reviews/client-birmingham.jpg",
    text: "I booked a detailed reading about marriage and family matters. The consultation was private, respectful and very professional. I appreciated the way everything was explained without rushing.",
  },
  {
    name: "Client in Leicester",
    location: "Leicester",
    category: "Palm & Birth-Chart Reading",
    image: "/images/home/reviews/client-leicester.jpg",
    text: "I had a palm and birth-chart reading and was surprised by how detailed the consultation was. The astrologer listened carefully to my questions and gave me a much clearer understanding of my situation.",
  },
  {
    name: "Client in Glasgow",
    location: "Glasgow",
    category: "Spiritual Guidance",
    image: "/images/home/reviews/client-glasgow.jpg",
    text: "I contacted Pandit Kailash for spiritual guidance during a confusing time in my life. The conversation was respectful and reassuring, and I felt much clearer after speaking with the astrologer.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f2] py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b28a3e]/25 to-transparent" />

        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#c9a45c]/5 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#c9a45c]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b28a3e]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a7534] sm:text-xs">
              Client Experiences
            </span>

            <span className="h-px w-8 bg-[#b28a3e]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#10213b] sm:text-4xl lg:text-[3rem]">
            Real Experiences.
            <span className="block">Personal Guidance.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
            Clients share their experiences of private readings with Pandit
            Kailash.
          </p>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex justify-center sm:mb-12"
        >
          <div className="flex items-center gap-1 text-[#b28a3e]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} fill="currentColor" strokeWidth={1} />
            ))}
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.location}-${index}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#ded5c5] bg-[#f7ecd9] shadow-[0_8px_25px_rgba(50,40,25,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c9a45c]/60 hover:shadow-[0_18px_40px_rgba(50,40,25,0.12)]"
            >
              {/* Client Image */}
              <div className="relative aspect-[1/0.93] overflow-hidden bg-[#e8ddca]">
                <Image
                  src={review.image}
                  alt={`${review.name} testimonial`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Review Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-5">
                {/* Name */}
                <h3 className="font-serif text-xl leading-tight text-[#10213b]">
                  {review.name}
                </h3>

                {/* Category */}
                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.08em] text-[#a0712c] sm:text-[10px]">
                  {review.category}
                </p>

                {/* Stars */}
                <div className="mt-4 flex gap-0.5 text-[#b28a3e]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={11}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-4 flex-1 text-sm leading-6 text-[#5d6675]">
                  “{review.text}”
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col items-center text-center sm:mt-14"
        >
          <p className="text-sm leading-7 text-[#727987]">
            Looking for personal guidance? Start with a private consultation.
          </p>

          <Link
            href="/contact"
            className="group mt-5 inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#b28a3e] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8e6b2f] shadow-[0_0_18px_rgba(201,164,92,0.08)] transition-all duration-300 ease-out hover:bg-[#b28a3e] hover:text-white hover:shadow-[0_0_26px_rgba(201,164,92,0.18)] sm:px-7"
          >
            Book a Reading
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
