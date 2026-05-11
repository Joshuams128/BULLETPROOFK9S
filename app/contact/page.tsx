"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const SUBJECTS = [
  "Private Lessons",
  "Board & Train",
  "Group Training",
  "Personal Protection",
  "Law Enforcement / Military",
  "Boarding",
  "General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Failed to send. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-black pt-32 pb-16 md:pb-24 grain overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(192,0,10,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 text-center">
          <FadeUp>
            <span className="inline-block border border-[var(--red)] text-white uppercase text-[10px] tracking-[0.3em] px-3 py-1.5 rounded-full mb-6">
              Get In Touch
            </span>
            <h1
              className="font-heading uppercase text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(40px, 7vw, 84px)" }}
            >
              Let's Talk About <span className="text-[var(--red)]">Your Dog.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Free 15-minute consultation. We'll listen first, then recommend
              the right starting point.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <a
            href={PHONE_HREF}
            className="group flex items-center gap-4 p-5 bg-black border border-[var(--border)] hover:border-[var(--red)] transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--red)]/10 text-[var(--red)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Call
              </div>
              <div className="font-heading text-xl uppercase group-hover:text-[var(--red)] transition-colors">
                {PHONE}
              </div>
            </div>
          </a>

          <a
            href="mailto:info@bulletproofk9s.com"
            className="group flex items-center gap-4 p-5 bg-black border border-[var(--border)] hover:border-[var(--red)] transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--red)]/10 text-[var(--red)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18v12H3z M3 6l9 7 9-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Email
              </div>
              <div className="font-heading text-xl uppercase group-hover:text-[var(--red)] transition-colors break-all">
                info@bulletproofk9s.com
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 bg-black border border-[var(--border)]">
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--red)]/10 text-[var(--red)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Location
              </div>
              <div className="font-heading text-xl uppercase">
                94 Magnum Dr, Schomberg, ON
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-black py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          <FadeUp>
            <div className="label-red">Contact Form</div>
            <h2 className="font-heading mt-2 text-4xl md:text-5xl uppercase leading-[0.95]">
              Tell Us About Your Dog
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl">
              Fill out the form and we'll get back to you within 24 hours. For
              faster response, just call.
            </p>

            {submitted ? (
              <div className="mt-8 border-2 border-[var(--red)] bg-[var(--surface)] p-8 glow-red">
                <div className="font-heading text-3xl uppercase text-[var(--red)]">
                  Got It.
                </div>
                <p className="mt-3 text-gray-300">
                  Thanks for reaching out. We'll be in touch within 24 hours.
                  Need to talk sooner? Call us at{" "}
                  <a href={PHONE_HREF} className="text-[var(--red)] underline">
                    {PHONE}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      Your Name *
                    </span>
                    <input
                      required
                      name="name"
                      type="text"
                      className="bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--red)] focus:outline-none text-white px-4 py-3 transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      Email *
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--red)] focus:outline-none text-white px-4 py-3 transition-colors"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      Phone
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      className="bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--red)] focus:outline-none text-white px-4 py-3 transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      Interested In *
                    </span>
                    <select
                      required
                      name="subject"
                      defaultValue=""
                      className="bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--red)] focus:outline-none text-white px-4 py-3 transition-colors"
                    >
                      <option value="" disabled>
                        Choose one...
                      </option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Tell Us About Your Dog *
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Breed, age, what you're hoping to fix or work on..."
                    className="bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--red)] focus:outline-none text-white px-4 py-3 transition-colors resize-none"
                  />
                </label>

                {error && (
                  <div className="border border-[var(--red)] bg-[var(--red)]/10 text-red-300 px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-red glow-red mt-2 self-start disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="lg:sticky lg:top-32 flex flex-col gap-6">
              <div className="border border-[var(--border)] overflow-hidden aspect-[4/3]">
                <iframe
                  title="BulletproofK9s location"
                  src="https://maps.google.com/maps?q=94+Magnum+Dr,+Schomberg,+ON&z=15&output=embed"
                  className="w-full h-full grayscale contrast-125"
                  loading="lazy"
                />
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] p-6">
                <div className="label-red">Hours</div>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-300">
                  <li className="flex justify-between">
                    <span>Every Day</span>
                    <span className="text-gray-400">10:00 – 8:00</span>
                  </li>
                </ul>
              </div>

              <a
                href={PHONE_HREF}
                className="bg-[var(--red)] text-white p-6 hover:bg-[var(--red-dim)] transition-colors block"
              >
                <div className="text-xs uppercase tracking-[0.3em] opacity-80">
                  Prefer To Call?
                </div>
                <div className="font-heading text-3xl uppercase mt-1">
                  {PHONE}
                </div>
                <div className="text-sm mt-1 opacity-80">
                  Free 15-min consultation
                </div>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
