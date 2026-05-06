"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { PHONE_HREF } from "@/lib/constants";

const COMPONENTS = [
  { n: "01", t: "Introduction", b: "Meet the trainer, set goals, calibrate expectations." },
  { n: "02", t: "Basic Commands", b: "Sit, stay, come, heel — sharpened around real distractions." },
  { n: "03", t: "Socialization", b: "Controlled exposure to other dogs and handlers." },
  { n: "04", t: "Leash Work", b: "Loose-leash walking with environmental noise." },
  { n: "05", t: "Problem-Solving", b: "Targeted fixes for jumping, barking, and pulling." },
  { n: "06", t: "Distraction Training", b: "Building reliability with real-world stimulus." },
  { n: "07", t: "Reward Marker Work", b: "Treats, praise, and play timed for maximum learning." },
  { n: "08", t: "Q&A", b: "Open coaching for your specific dog and your specific situation." },
  { n: "09", t: "Homework", b: "Take-home drills to reinforce between sessions." },
  { n: "10", t: "Cool Down", b: "Supervised settle to lock in calmness as the new default." },
];

const PREREQ = [
  "Basic obedience already established (sit, stay, name recognition)",
  "Comfortable around other dogs (non-aggressive)",
  "Up to date on vaccines",
  "At least 4 months old",
];

export default function GroupTrainingPage() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />

      <PageHero
        eyebrow="Group Lessons"
        title="Train Around Real Distractions."
        subtitle="Group sessions are where good dogs become bulletproof. Other dogs, other handlers, real environments — the only way to build reliability that holds in the real world."
        image="https://bulletproofk9s.com/wp-content/uploads/2024/08/6ee4784-4ed7-c7bf-af14-f85a10f7c23_BPK9_Training_2023_-_Aug_26th_and_31st_-12_copy-1030x687.jpg"
        ctaText="Book Free Call"
        secondaryCtaText="See Pricing"
        secondaryCtaHref="#pricing"
      />

      {/* Why Group */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <div className="label-red">Why Group Sessions</div>
            <h2 className="font-heading mt-2 text-4xl md:text-5xl uppercase leading-[0.95]">
              The Final Step
              <br />
              Before <span className="text-[var(--red)]">Real-World Reliability.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
            <p className="text-gray-300 leading-relaxed">
              Your dog might be perfect at home. Solid in the backyard. Even
              decent in the driveway. But the real test is the dog park, the
              patio, the busy sidewalk — and that's where group sessions do
              their work.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We use other handlers and dogs as deliberate distractions to
              forge dogs that listen no matter what's happening around them.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-black border border-[var(--border)] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--red)] mb-4">
                Prerequisites
              </div>
              <h3 className="font-heading text-2xl uppercase">
                Before You Join
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Group sessions assume a working foundation. If your dog isn't
                there yet, start with private lessons or Board & Train.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {PREREQ.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-200">
                    <span className="text-[var(--red)] mt-0.5">▶</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/private-dog-training-lessons"
                className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--red)] gap-2 hover:gap-3 transition-all"
              >
                Not ready? Start with Private Lessons →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 10 Components */}
      <section className="bg-black py-24 md:py-28 border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">What's In A Session</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              10 Components.
              <br />
              Every Session.
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--border)]">
            {COMPONENTS.map((c, i) => (
              <FadeUp key={c.n} delay={i * 0.04}>
                <div className="bg-black p-6 h-full hover:bg-[var(--surface)] transition-colors">
                  <div className="font-heading text-4xl text-[var(--red)]/40 leading-none">
                    {c.n}
                  </div>
                  <h3 className="font-heading text-lg uppercase mt-3">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                    {c.b}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <FadeUp>
            <div className="text-center">
              <div className="label-red">Investment</div>
              <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
                Group Pricing
              </h2>
            </div>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp>
              <div className="border border-[var(--border)] bg-black p-8 h-full flex flex-col">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Drop-In
                </div>
                <div className="font-heading text-7xl text-white mt-3">
                  $90
                </div>
                <div className="text-sm text-gray-500 mt-1">per session</div>
                <p className="mt-6 text-gray-400 text-sm">
                  Try before you commit. One session, no obligation, full value.
                </p>
                <a href={PHONE_HREF} className="btn-ghost mt-auto pt-8">
                  Book A Drop-In →
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative border-2 border-[var(--red)] bg-black p-8 h-full flex flex-col glow-red">
                <span className="absolute -top-3 left-6 bg-[var(--red)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Best Value
                </span>
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--red)]">
                  4-Session Pack
                </div>
                <div className="font-heading text-7xl text-white mt-3">
                  $280
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  $70/session — save $80
                </div>
                <p className="mt-6 text-gray-400 text-sm">
                  Real reliability comes from repetition. The 4-pack gives your
                  dog the reps to stick.
                </p>
                <a href={PHONE_HREF} className="btn-red mt-auto pt-8">
                  Lock In 4-Pack →
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FinalCTA
        title={"Train Around\nReal Distractions."}
        subtitle="Book a free consultation to confirm your dog is ready for group sessions and find your start date."
      />

      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
