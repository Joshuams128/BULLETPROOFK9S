"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LOGO, PHONE, PHONE_HREF, SERVICE_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="BulletproofK9s" style={{ height: 52 }} />
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-sm">
          <a href="/" className="hover:text-[var(--red)] transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-[var(--red)] transition-colors">
            About
          </a>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-[var(--red)] transition-colors flex items-center gap-1">
              Services
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                >
                  <div className="bg-black/85 backdrop-blur-md border border-[var(--border)] py-2">
                    {SERVICE_LINKS.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-2.5 text-sm text-gray-300 hover:bg-[var(--red)]/10 hover:text-white transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="/contact"
            className="hover:text-[var(--red)] transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={PHONE_HREF}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            {PHONE}
          </a>
          <a
            href={PHONE_HREF}
            className="bg-[var(--red)] hover:bg-[var(--red-dim)] text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all glow-red"
          >
            Book Free Call
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          aria-label="menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
              />
            ) : (
              <>
                <path d="M3 7h18" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
                <path d="M3 17h18" stroke="currentColor" strokeWidth="2" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-black/95 border-t border-[var(--border)]"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              <a href="/" className="py-3 text-sm uppercase tracking-widest">
                Home
              </a>
              <a
                href="/about"
                className="py-3 text-sm uppercase tracking-widest"
              >
                About
              </a>
              <div className="py-2">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-xs text-[var(--red)] uppercase tracking-widest py-3 hover:bg-white/5 rounded transition-colors"
                >
                  Services
                  <span>{mobileServicesOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden flex flex-col"
                    >
                      {SERVICE_LINKS.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          className="py-2 pl-4 text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {s.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a
                href="/contact"
                className="py-3 text-sm uppercase tracking-widest"
              >
                Contact
              </a>
              <a
                href={PHONE_HREF}
                className="mt-4 btn-red justify-center w-full"
              >
                Book Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
