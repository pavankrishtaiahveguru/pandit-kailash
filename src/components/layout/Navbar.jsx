"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Menu, Phone, X } from "lucide-react";
import { displaySerif } from "@/lib/fonts";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

const PHONE_NUMBER = "+447417395914";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="w-full border-b border-white/15 bg-[#0a1630]/95 font-(family-name:--font-geist-sans) backdrop-blur-md">
        <div className="mx-auto flex h-[70px] max-w-[1920px] items-center px-5 sm:px-8 lg:h-[90px] lg:px-[3.6vw]">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobile}
            aria-label="Pandit Kailash Home"
            className="flex shrink-0 cursor-pointer items-center gap-3 xl:gap-4"
          >
            <Image
              src="/logo/logo-mark.png"
              alt="Pandit Kailash logo"
              width={120}
              height={120}
              priority
              className="h-[48px] w-[48px] object-contain drop-shadow-[0_0_10px_rgba(242,196,109,0.25)] lg:h-[60px] lg:w-[60px]"
            />
            <span className={`${displaySerif.className} leading-none`}>
              <span className="block text-[21px] font-medium text-[#f2c46d] lg:text-[22px] xl:text-[27px]">
                Pandit Kailash
              </span>
              <span className="mt-1 block text-[11px] text-white/80 lg:text-[12px] xl:text-[14px]">
                Astrology &amp; Psychic Readings
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative flex h-[90px] cursor-pointer items-center px-3 text-[14px] font-medium transition-colors duration-300 xl:px-5 xl:text-[16px] ${active ? "text-white" : "text-white/90 hover:text-[#f2c46d]"}`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-[20px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#f2c46d] transition-all duration-300 ${active ? "w-[calc(100%-1.5rem)] xl:w-[calc(100%-2.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)] xl:group-hover:w-[calc(100%-2.5rem)]"}`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-6">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label={`Call ${PHONE_NUMBER}`}
              className="group flex h-[46px] cursor-pointer items-center justify-center gap-3 rounded-full border border-white/40 px-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:border-[#f2c46d] hover:text-[#f2c46d] xl:h-[52px] xl:px-6 xl:text-[16px]"
            >
              <Phone
                size={17}
                strokeWidth={1.7}
                className="text-white/85 transition-colors group-hover:text-[#f2c46d]"
              />
              <span className="hidden xl:inline">Call</span>
            </a>

            <Link
              href="/contact"
              className="group flex h-[46px] cursor-pointer items-center gap-2.5 rounded-md bg-[#f2c46d] px-5 text-[14px] font-bold text-[#0a1630] shadow-[0_6px_20px_rgba(242,196,109,0.18)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#f7d38a] hover:shadow-[0_10px_28px_rgba(242,196,109,0.3)] xl:h-[52px] xl:px-6 xl:text-[15px]"
            >
              <CalendarDays size={17} strokeWidth={1.8} />
              <span>Book a Reading</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            className="ml-auto flex h-10 w-10 cursor-pointer items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-[#e5b450] hover:text-[#e5b450] lg:hidden"
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.7} />
            ) : (
              <Menu size={20} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/10 bg-[#03182d] lg:hidden"
            >
              <div className="px-5 pb-5 pt-3 sm:px-8">
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const active = isActive(item.href);

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMobile}
                        aria-current={active ? "page" : undefined}
                        className={`block cursor-pointer border-l-2 px-3 py-3 text-sm font-medium transition-colors duration-200 ${active ? "border-[#e5b450] bg-white/5 text-[#e5b450]" : "border-transparent text-white/80 hover:text-[#e5b450]"}`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    aria-label={`Call ${PHONE_NUMBER}`}
                    className="flex cursor-pointer items-center justify-center gap-2 border border-white/20 px-3 py-3 text-xs font-semibold text-white transition-all hover:border-[#e5b450] hover:text-[#e5b450]"
                  >
                    <Phone size={16} />
                    Call
                  </a>

                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="flex cursor-pointer items-center justify-center gap-2 bg-[#e5b450] px-3 py-3 text-xs font-bold text-[#03182d] transition-all hover:bg-[#f2ca72]"
                  >
                    <CalendarDays size={15} />
                    Book Reading
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
