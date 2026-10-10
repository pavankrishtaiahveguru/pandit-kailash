"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Vedic tradition and guidance",
    image: "/images/gallery/img-1.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Carefully prepared offerings",
    image: "/images/gallery/img-2.jpg",
    size: "medium",
  },
  {
    id: 3,
    title: "Traditional spiritual practice",
    image: "/images/gallery/img-3.jpg",
    size: "medium",
  },
  {
    id: 4,
    title: "Personal spiritual observance",
    image: "/images/gallery/img-4.jpg",
    size: "small",
  },
  {
    id: 5,
    title: "A respectful spiritual setting",
    image: "/images/gallery/img-5.jpg",
    size: "small",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WorkGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F0] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#C5A15D]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C5A15D]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9B7434] sm:text-xs">
              A Visual Journey
            </span>
            <span className="h-px w-8 bg-[#C5A15D]" />
          </div>
          <h2 className="font-serif text-3xl leading-tight text-[#101C32] sm:text-4xl lg:text-5xl">
            A Glimpse of Our <span className="italic text-[#B18A45]">Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore moments inspired by astrology, personal consultations and
            the traditions behind spiritual guidance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-2 items-start gap-3 sm:gap-5 lg:grid-cols-3"
        >
          {galleryItems.map((item) => (
            <motion.button
              key={item.id}
              variants={itemVariants}
              type="button"
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title}`}
              className={`group relative block w-full cursor-pointer overflow-hidden rounded-xl border border-[#C5A15D]/25 bg-[#101C32] text-left shadow-[0_10px_30px_rgba(16,28,50,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C5A15D]/70 hover:shadow-[0_18px_40px_rgba(16,28,50,0.16)] sm:rounded-2xl ${item.size === "large" ? "col-span-2 aspect-[16/9] lg:col-span-2 lg:aspect-[5/3]" : item.size === "medium" ? "col-span-1 aspect-[4/5] lg:aspect-[4/5]" : "col-span-1 aspect-[4/5] lg:aspect-[5/4]"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-[#071426]/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4 lg:p-5">
                <h3 className="font-serif text-sm leading-snug text-white sm:text-base lg:text-lg">
                  {item.title}
                </h3>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300 group-hover:border-[#E3C17C] group-hover:bg-[#E3C17C] group-hover:text-[#101C32] sm:h-8 sm:w-8">
                  <Eye size={16} />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              key="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedImage.title}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-[#050B16]/90 p-4 backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
                className="absolute right-5 top-5 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              >
                <X size={22} />
              </button>
              <motion.div
                initial={{ scale: 0.96, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96 }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[#C5A15D]/40 bg-[#101C32] shadow-2xl"
              >
                <div className="relative h-[55vh] min-h-[260px] max-h-[700px] w-full">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-contain"
                  />
                </div>
                <div className="px-5 py-4 sm:px-7">
                  <h3 className="font-serif text-xl text-white sm:text-2xl">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
