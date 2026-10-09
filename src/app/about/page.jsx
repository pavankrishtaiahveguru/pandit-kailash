"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaTimes,
  FaExpandAlt,
  FaCertificate,
  FaRegStar,
  FaWhatsapp,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "447552063168";

const certificates = [
  {
    id: 1,
    title: "Certificate of Proficiency",
    description:
      "A certificate documenting training or proficiency in astrology.",
    image: "/images/certificates/certificate-1.jpeg",
    alt: "Pandit Kailash astrology certificate of proficiency",
  },
  {
    id: 2,
    title: "Astrology Training Certificate",
    description: "A certificate related to astrology training and study.",
    image: "/images/certificates/certificate-2.jpeg",
    alt: "Pandit Kailash astrology training certificate",
  },
  {
    id: 3,
    title: "Certificate of Astrology",
    description: "An additional certificate shared by Pandit Kailash.",
    image: "/images/certificates/certificate-3.jpeg",
    alt: "Pandit Kailash additional astrology certificate",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  const openWhatsApp = () => {
    const message =
      "Hello Pandit Kailash, I would like to learn more about your consultations and services.";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF7F0] text-[#17243A]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#101C32] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,161,93,0.18),transparent_48%),radial-gradient(ellipse_at_10%_100%,rgba(48,73,111,0.3),transparent_45%)]" />

        <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-72 w-72 rounded-full border border-[#C5A15D]/15 sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute -right-8 -top-16 -z-10 h-56 w-56 rounded-full border border-[#C5A15D]/10 sm:h-72 sm:w-72" />

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(#DCC18A_0.7px,transparent_0.7px)] [background-size:36px_36px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D4B574]">
            <FaRegStar />
            About Your Consultant
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Meet Pandit Kailash
          </h1>

          <div className="mx-auto mt-6 h-px w-20 bg-[#C5A15D]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Vedic Astrologer, Psychic Reader &amp; Spiritual Consultant.
            Personalised guidance for your questions about relationships,
            career, family and life.
          </p>
        </motion.div>
      </section>

      {/* Profile */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative rounded-t-[10rem] rounded-b-2xl border border-[#C5A15D]/60 bg-[#EDE3D1] p-2 shadow-[0_25px_65px_rgba(23,36,58,0.13)] sm:rounded-t-[13rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[9.5rem] rounded-b-xl bg-[#E8DFD1] sm:rounded-t-[12.5rem]">
                <Image
                  src="/images/about/pandit-kailash.jpg"
                  alt="Pandit Kailash"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-center"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-[#D4B574]/40 bg-[#101C32] px-4 py-4 text-center shadow-xl sm:px-6">
                <p className="font-serif text-xl text-white sm:text-2xl">
                  Pandit Kailash
                </p>
                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.17em] text-[#D4B574] sm:text-[10px]">
                  Astrology &amp; Spiritual Guidance
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="pt-6 lg:pt-0"
          >
            <span className="text-xs font-bold uppercase tracking-[0.23em] text-[#A7823F]">
              A Personal Approach
            </span>

            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#17243A] sm:text-4xl lg:text-5xl">
              Private Guidance Centred on Your Questions
            </h2>

            <div className="mt-6 h-px w-16 bg-[#C5A15D]" />

            <div className="mt-6 space-y-5 text-sm leading-8 text-[#667085] sm:text-base">
              <p>
                Pandit Kailash offers personalised astrology, psychic readings
                and spiritual guidance for people seeking clarity about
                different aspects of their lives.
              </p>

              <p>
                Whether you have questions about love and relationships,
                marriage, career, business, family or personal decisions, your
                consultation can focus on the topics that matter most to you.
              </p>

              <p>
                Every conversation is an opportunity to discuss your concerns in
                a respectful and private setting. You can explain your questions
                and explore the consultation options that suit you.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#101C32] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243754]"
              >
                Book a Consultation
                <FaArrowRight className="text-xs text-[#D4B574]" />
              </Link>

              <Link
                href="/services"
                className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-[#DCCDB0] bg-white px-7 py-3.5 text-sm font-semibold text-[#17243A] transition-all duration-300 hover:border-[#C5A15D] hover:bg-[#F6F0E5]"
              >
                Explore Readings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials heading */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.23em] text-[#A7823F]">
              <FaCertificate />
              Training &amp; Credentials
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#17243A] sm:text-4xl md:text-5xl">
              Certificates in Vedic Astrology
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
              Explore the certificates shared by Pandit Kailash, presented here
              for visitors who would like to learn more about his training and
              background.
            </p>
          </motion.div>

          {/* Certificate cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="group overflow-hidden rounded-2xl border border-[#E6DCC9] bg-white shadow-[0_8px_28px_rgba(23,36,58,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A15D]/70 hover:shadow-[0_20px_45px_rgba(23,36,58,0.1)]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`View ${certificate.title}`}
                  className="relative block w-full cursor-pointer overflow-hidden bg-[#F0E8D9] p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C5A15D]"
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-[#E4D6BC] bg-white p-2">
                    <Image
                      src={certificate.image}
                      alt={certificate.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E9DFC9] bg-white/95 text-[#A7823F] shadow-sm transition-colors group-hover:bg-[#101C32] group-hover:text-white">
                      <FaExpandAlt className="text-xs" />
                    </span>
                  </div>
                </button>

                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#A7823F]">
                    <FaCertificate />
                    Certificate {certificate.id}
                  </div>

                  <h3 className="font-serif text-xl leading-snug text-[#17243A]">
                    {certificate.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#667085]">
                    {certificate.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="mt-5 inline-flex cursor-pointer items-center gap-2 border-b border-[#C5A15D]/50 pb-1 text-sm font-semibold text-[#8D713C] transition-colors hover:border-[#8D713C] hover:text-[#17243A]"
                  >
                    View Certificate
                    <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-[#7A8494]">
            For further information about the certificates or relevant training,
            please enquire directly with Pandit Kailash.
          </p>
        </div>
      </section>


      {/* Certificate lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            key="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08111F]/90 p-4 backdrop-blur-md sm:p-8"
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#C5A15D]/40 bg-[#FAF7F0] shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 border-b border-[#E6DCC9] px-4 py-4 sm:px-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7823F]">
                    Pandit Kailash
                  </p>
                  <h3
                    id="certificate-modal-title"
                    className="mt-1 font-serif text-lg text-[#17243A] sm:text-xl"
                  >
                    {selectedCertificate.title}
                  </h3>
                </div>

                <button
                  type="button"
                  autoFocus
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close certificate viewer"
                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E6DCC9] bg-white text-[#17243A] transition-colors hover:bg-[#101C32] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15D]"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="relative min-h-0 flex-1 overflow-auto p-3 sm:p-6">
                <div className="relative mx-auto min-h-[250px] w-full max-w-4xl">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.alt}
                    width={1400}
                    height={1050}
                    sizes="(max-width: 768px) 95vw, 85vw"
                    className="h-auto max-h-[70vh] w-full object-contain"
                  />
                </div>
              </div>

              <div className="border-t border-[#E6DCC9] px-4 py-3 text-center text-xs text-[#667085] sm:px-6">
                Press Escape or select the close button to return to the About
                page.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
