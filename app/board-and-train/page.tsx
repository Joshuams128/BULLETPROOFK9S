"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { PHONE_HREF } from "@/lib/constants";

const LEVELS = [
  {
    tag: "Beginner",
    title: "Foundation",
    body: "Marker training, name recognition, basic obedience, leash manners, and crate training, building confidence. Ideal for puppies and untrained adults.",
    points: ["Sit, down, place, come", "Loose-leash walking", "Crate + house manners", "Marker work"],
  },
  {
    tag: "Intermediate",
    title: "Real-World Reliability",
    body: "Low-distraction obedience, environmental exposure, and the introduction of mild stress to build a thinking dog.",
    points: ["Off-leash heel work", "Distance commands", "Mild distractions", "Public space exposure"],
  },
  {
    tag: "Advanced",
    title: "Bulletproof",
    body: "High-distraction work, complex command chains, and the kind of reliability you can stake your name on.",
    points: ["Crowds + traffic + dogs", "Long-duration stays", "Off-leash recall under pressure", "Complex sequences"],
  },
];

const INCLUDED = [
  "Live-in training at our facility",
  "Multiple training sessions per day",
  "Daily exercise + structured play",
  "Photo + video updates throughout",
  "Mid-program transfer lesson with you",
  "End-of-program handover + ongoing support",
  "Custom plan based on intake assessment",
  "Socialization with vetted dogs as appropriate",
];

const FACILITY = [
  {
    title: "Spacious Kennels",
    body: "Indoor/outdoor runs designed for safety, cleanliness, and comfort.",
  },
  {
    title: "Training Areas",
    body: "Indoor + outdoor spaces engineered for distraction-managed work.",
  },
  {
    title: "Exercise Yards",
    body: "Dedicated areas for daily decompression, structured play, and socialization.",
  },
  {
    title: "24/7 Care",
    body: "Your dog is supervised, fed, exercised, and trained with a level of care most owners can't replicate at home.",
  },
];

export default function BoardAndTrainPage() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />

      <PageHero
        eyebrow="Most Popular Program"
        title="Board & Train. The Complete Reset."
        subtitle="They live, eat, and train alongside our head trainer every day. They come home calmer, sharper, more focused, and ready for the real world — while you learn how to easily maintain the training for life."
        image="https://bulletproofk9s.com/wp-content/uploads/2024/08/Board-and-Train-Service-1030x687.jpg"
        ctaText="Reserve Your Spot"
        secondaryCtaText="See What's Included"
        secondaryCtaHref="#included"
      />

      {/* Why B&T */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://bulletproofk9s.com/wp-content/uploads/2024/08/Board-and-Train-Service-1030x687.jpg"
                alt="Board and train"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="label-red">Why Board & Train</div>
            <h2 className="font-heading mt-2 text-4xl md:text-5xl uppercase leading-[0.95]">
              Immersion Beats <span className="text-[var(--red)]">Repetition.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
            <p className="text-gray-300 leading-relaxed">
              Most dogs don't have a training problem — they have a
              consistency problem. Board & Train removes that variable
              entirely. We control the environment, the timing, the rewards,
              and the corrections. Every interaction reinforces the same
              standard.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              The result? A dog that comes home a different animal — calm,
              focused, and reliable. And we hand the playbook to you so it
              sticks.
            </p>
            <a href={PHONE_HREF} className="btn-red mt-8 glow-red">
              Reserve Your Spot
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Levels */}
      <section className="bg-black py-24 md:py-28 border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">Training Levels</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              Three Levels.
              <br />
              One Standard.
            </h2>
            <p className="mt-5 text-gray-400 max-w-xl">
              Where your dog starts depends on intake. Where they finish is up
              to you — we'll progress them as fast as the dog can handle.
            </p>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
            {LEVELS.map((l, i) => (
              <FadeUp key={l.tag} delay={i * 0.08}>
                <div className="bg-black p-8 h-full flex flex-col">
                  <span className="inline-block self-start text-[10px] uppercase tracking-[0.3em] text-[var(--red)] border border-[var(--red)] px-3 py-1">
                    {l.tag}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl uppercase mt-5">
                    {l.title}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {l.body}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2 text-sm text-gray-300">
                    {l.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span className="text-[var(--red)] mt-0.5">▶</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="included" className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <FadeUp>
            <div className="lg:sticky lg:top-32">
              <div className="label-red">What You Get</div>
              <h2 className="font-heading mt-2 text-4xl md:text-5xl uppercase leading-[0.95]">
                Everything Your Dog Needs.
              </h2>
              <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
              <p className="text-gray-400">
                Board & Train isn't just training — it's a full reset. Every
                meal, every interaction, every moment is structured.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border)]">
              {INCLUDED.map((item, i) => (
                <div
                  key={item}
                  className="bg-[var(--surface)] p-5 flex items-center gap-3"
                >
                  <span className="font-heading text-[var(--red)] text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-black py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeUp>
            <div className="border-2 border-[var(--red)] bg-[var(--surface)] p-10 md:p-14 text-center glow-red">
              <div className="label-red">The Investment</div>
              <div className="font-heading text-7xl md:text-8xl text-white mt-4">
                $4,500
              </div>
              <div className="text-sm text-gray-400 mt-2 uppercase tracking-[0.3em]">
                / Month
              </div>
              <div className="w-16 h-[2px] bg-[var(--red)] mx-auto my-8" />
              <p className="text-gray-300 max-w-md mx-auto leading-relaxed">
                Includes intake, training, boarding, exercise, transfer
                lessons, and follow-up support. Spots fill up fast — book your
                free consultation to lock in a date.
              </p>
              <a href={PHONE_HREF} className="btn-red mt-8 glow-red">
                Reserve Your Spot
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Facility */}
      <section className="bg-[var(--surface)] py-24 md:py-28 border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">The Facility</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              Built For Working Dogs.
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {FACILITY.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.06}>
                <div className="bg-[var(--surface)] p-7 h-full">
                  <h3 className="font-heading text-2xl uppercase">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={"Ready For The\nFull Reset?"}
        subtitle="Spots are limited. Book a free consultation to discuss your dog and reserve a Board & Train slot."
      />

      <Footer />
    </main>
  );
}
