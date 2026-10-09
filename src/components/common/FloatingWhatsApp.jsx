"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <>
      <motion.a
        href="https://wa.me/447552063168"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-8 right-8 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {/* Ripple */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.7, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Second Ripple */}
        <motion.span
          className="absolute inset-0 rounded-full border border-[#25D366]"
          animate={{
            scale: [1, 1.8, 1.8],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.8,
            ease: "easeOut",
          }}
        />

        {/* WhatsApp Icon */}
        <motion.span
          className="relative z-10 flex h-full w-full items-center justify-center rounded-full"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaWhatsapp size={28} />
        </motion.span>
      </motion.a>
    </>
  );
}


