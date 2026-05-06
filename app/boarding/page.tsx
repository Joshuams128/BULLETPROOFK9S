"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { PHONE_HREF } from "@/lib/constants";

const INCLUDED = [
  { t: "Multiple Daily Walks", b: "4–5 outdoor breaks every day. Movement, fresh air, and structure." },
  { t: "Structured Play", b: "Solo or supervised group play depending on temperament." },
  { t: "Two Square Meals", b: "Fed on your schedule, with your food, the way they're used to." },
  { t: "Quiet Rest Time", b: "Calm kennel environment so your dog actually decompresses." },
  { t: "Daily Updates Available", b: "Photos and check-ins on request — no anxious silence." },
  { t: "Always Supervised", b: "Trained eyes on every dog, every interaction." },
];

const REQUIREMENTS = [
  "Dog must be housetrained",
  "Comfortable with crating or confinement",
  "Up-to-date on vaccinations",
  "Non-aggressive (no group play for aggressive dogs — solo only)",
  "Spayed/neutered preferred",
];

const FAQ = [
  {
    q: "Do you board aggressive dogs?",
    a: "Yes — but only as solo boarders. They won't be placed in group play, and they'll have their own structured routine.",
  },
  {
    q: "Can I bring my dog's own food?",
    a: "Absolutely. We strongly recommend it to keep their digestion stable while you're away.",
  },
  {
    q: "Is there an extra charge for puppies?",
    a: "Yes — puppies require more attention, more potty breaks, and more supervision, so there's a small additional fee.",
  },
  {
    q: "What if my dog is on medication?",
    a: "We administer medications at no extra cost. Just provide clear instructions on intake.",
  },
  {
    q: "Do you offer training during boarding?",
    a: "Yes — that's our Board & Train program. If you want training while they're with us, ask about pricing.",
  },
];

export default function BoardingPage() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />

      <PageHero
        eyebrow="Boarding"
        title="Going Away? They're In Good Hands."
        subtitle="A safe, structured place to leave your dog when life gets in the way. Multiple walks, supervised play, and the kind of care most kennels don't offer."
        image="https://bulletproofk9s.com/wp-content/uploads/2024/10/iStock-1306167086-2000x1333-1-1030x686.jpg"
        ctaText="Reserve Boarding"
        secondaryCtaText="See What's Included"
        secondaryCtaHref="#included"
      />

      {/* Pricing Highlight */}
      <section className="bg-[var(--surface)] py-20 md:py-24 border-b border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-center">
              <div>
                <div className="label-red">Boarding Rate</div>
                <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
                  Always A Safe
                  <br />
                  <span className="text-[var(--red)]">Environment.</span>
                </h2>
                <p className="mt-5 text-gray-400 max-w-md">
                  Schomberg, Ontario facility. Walks, play, feeding, and
                  supervision included. Puppies and special-needs dogs welcome
                  for a small additional fee.
                </p>
              </div>
              <div className="border border-[var(--border)] bg-black p-8 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Per Night
                </div>
                <div className="font-heading text-7xl md:text-8xl text-white mt-2">
                  $59
                </div>
                <a href={PHONE_HREF} className="btn-red mt-6 w-full justify-center glow-red">
                  Book Now
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What's Included */}
      <section id="included" className="bg-black py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">What's Included</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              More Than A Kennel.
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {INCLUDED.map((item, i) => (
              <FadeUp key={item.t} delay={i * 0.05}>
                <div className="bg-black p-7 h-full">
                  <div className="text-[var(--red)] font-heading text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-heading text-xl uppercase mt-3">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {item.b}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-[var(--surface)] py-24 md:py-28 border-y border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <div className="label-red">Before You Book</div>
            <h2 className="font-heading mt-2 text-4xl md:text-5xl uppercase leading-[0.95]">
              A Few Requirements
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
            <p className="text-gray-300">
              We keep our facility safe by being selective. If your dog
              doesn't meet these, give us a call — we can often make it work
              with a phone consultation first.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ul className="flex flex-col gap-4">
              {REQUIREMENTS.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-4 bg-black border border-[var(--border)] p-5"
                >
                  <span className="text-[var(--red)] font-heading text-2xl leading-none">
                    ✓
                  </span>
                  <span className="text-gray-200">{r}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <FadeUp>
            <div className="text-center">
              <div className="label-red">FAQ</div>
              <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
                Common Questions
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 flex flex-col gap-px bg-[var(--border)]">
            {FAQ.map((f, i) => (
              <FadeUp key={f.q} delay={i * 0.04}>
                <details className="bg-black group">
                  <summary className="cursor-pointer p-6 flex items-center justify-between font-heading text-lg md:text-xl uppercase">
                    <span>{f.q}</span>
                    <span className="text-[var(--red)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={"Ready To Book\nA Boarding Stay?"}
        subtitle="Spots fill up fast around holidays — call ahead to lock in your dates."
      />

      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
