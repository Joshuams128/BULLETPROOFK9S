"use client";

import { motion } from "framer-motion";
import { PHONE_HREF } from "@/lib/constants";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  ctaText = "Book Free Call",
  ctaHref = PHONE_HREF,
  secondaryCtaText,
  secondaryCtaHref,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden grain bg-black flex items-center pt-32 pb-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 0% 100%, rgba(192,0,10,0.30), transparent)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block border border-[var(--red)] text-white uppercase text-[10px] tracking-[0.3em] px-3 py-1.5 rounded-full mb-6">
            {eyebrow}
          </span>

          <h1
            className="font-heading uppercase text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(40px, 7vw, 84px)" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
            <a href={ctaHref} className="btn-red glow-red">
              {ctaText}
            </a>
            {secondaryCtaText && secondaryCtaHref && (
              <a href={secondaryCtaHref} className="btn-ghost">
                {secondaryCtaText}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
