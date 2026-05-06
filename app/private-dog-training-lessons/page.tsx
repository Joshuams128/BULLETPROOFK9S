"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { PHONE_HREF } from "@/lib/constants";

const PROCESS = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "We meet you and your dog. Walk through your goals, current behaviour, and the gaps. No fluff — we build the plan around what your dog actually needs.",
  },
  {
    n: "02",
    title: "Customized Plan",
    body: "Whether it's house manners, leash work, recall, reactivity, or full obedience — your program is engineered for your specific situation.",
  },
  {
    n: "03",
    title: "1-on-1 Sessions",
    body: "Hands-on, distraction-managed, and focused. You'll see real movement in the first session — not weeks down the road.",
  },
  {
    n: "04",
    title: "Reward + Structure",
    body: "Balanced training that respects your dog while giving them the structure they need to thrive. Trust comes from clarity, not bribery.",
  },
  {
    n: "05",
    title: "Ongoing Support",
    body: "Take-home drills, video resources, and progress tracking. We adjust the plan in real time as your dog levels up.",
  },
  {
    n: "06",
    title: "Flexible Scheduling",
    body: "Evenings and weekends available. We work around your schedule — dog training shouldn't be another life obstacle.",
  },
];

const FOR_YOU = [
  "You've tried YouTube videos, treats, and three other trainers — nothing has stuck.",
  "Your dog is good at home but falls apart on walks or with visitors.",
  "You want a program built for *your* dog, not a one-size-fits-all class.",
  "You're a new puppy parent who wants to do it right from day one.",
  "Reactivity, leash pulling, jumping, recall — you need it solved properly.",
];

export default function PrivateLessonsPage() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />

      <PageHero
        eyebrow="Private 1:1 Training"
        title="Built For Your Dog. Only Your Dog."
        subtitle="One-on-one instruction with full attention on your goals. No group distractions, no copy-paste curriculum — just real, lasting change."
        image="https://bulletproofk9s.com/wp-content/uploads/2024/08/Private-Dog-Training-Lesson-1.jpg"
        ctaText="Book Free Consultation"
        secondaryCtaText="See Pricing"
        secondaryCtaHref="#pricing"
      />

      {/* Why Private */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <div className="label-red">Why Private Lessons</div>
            <h2 className="font-heading mt-2 text-4xl md:text-5xl uppercase leading-[0.95]">
              Most Dogs Don't Need
              <br />
              <span className="text-[var(--red)]">A Generic Class.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
            <p className="text-gray-300 leading-relaxed">
              Group classes are great for socialization. But when you're
              dealing with reactivity, real obedience, or a behaviour that
              keeps showing up — you need eyes on you. Not a roomful of
              distracted owners.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Private lessons mean we go at your pace, in your environment,
              with the breeds and behaviours your dog actually faces. Faster
              wins. Real results. No backsliding.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="border-l-2 border-[var(--red)] pl-6 flex flex-col gap-5">
              {FOR_YOU.map((line, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-200">
                  <span className="text-[var(--red)] font-heading text-xl leading-none mt-1">
                    ✓
                  </span>
                  <p>{line}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-24 md:py-28 border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">How It Works</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              The 6-Step Process
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl">
              Every program follows this framework — but the details are built
              around you.
            </p>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {PROCESS.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.05}>
                <div className="bg-black p-8 h-full hover:bg-[var(--surface)] transition-colors">
                  <div className="font-heading text-6xl text-[var(--red)]/30 leading-none">
                    {p.n}
                  </div>
                  <h3 className="font-heading text-2xl uppercase mt-4">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="text-center">
              <div className="label-red">Investment</div>
              <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
                Simple, Honest Pricing
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                No hidden fees. No upsells. No fluff.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeUp>
              <div className="border border-[var(--border)] bg-black p-8 h-full flex flex-col">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Single Session
                </div>
                <div className="font-heading text-7xl text-white mt-3">
                  $250
                </div>
                <div className="text-sm text-gray-500 mt-1">per session</div>
                <ul className="mt-6 flex flex-col gap-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--red)]">▶</span> Full
                    consultation included
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--red)]">▶</span> Session at our
                    facility
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--red)]">▶</span> Take-home
                    homework
                  </li>
                </ul>
                <a href={PHONE_HREF} className="btn-ghost mt-auto pt-8">
                  Book Single Session →
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative border-2 border-[var(--red)] bg-black p-8 h-full flex flex-col glow-red">
                <span className="absolute -top-3 left-6 bg-[var(--red)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Best Value
                </span>
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--red)]">
                  5-Session Package
                </div>
                <div className="font-heading text-7xl text-white mt-3">
                  $1,000
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  $200/session — save $250
                </div>
                <ul className="mt-6 flex flex-col gap-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--red)]">▶</span> 5 full
                    sessions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--red)]">▶</span> Custom plan
                    + progress tracking
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--red)]">▶</span> Direct text
                    support between sessions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--red)]">▶</span> Real,
                    measurable transformation
                  </li>
                </ul>
                <a href={PHONE_HREF} className="btn-red mt-auto pt-8">
                  Book 5-Pack →
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <p className="mt-10 text-center text-sm text-gray-500">
              💡 In-home consultations available — <span className="text-gray-300">$1/km</span> travel
            </p>
          </FadeUp>
        </div>
      </section>

      <FinalCTA
        title={"Ready For 1:1\nTraining?"}
        subtitle="Book your free 15-minute call. We'll learn about your dog and recommend the right starting point — single session or full package."
      />

      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
