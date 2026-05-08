"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { PHONE_HREF } from "@/lib/constants";

const PILLARS = [
  {
    title: "Balanced & Fair. Always.",
    body: "We don't believe in extremes. Instead of choosing sides, we focus on clear communication, fair guidance, and proven training methods tailored to your dog — creating reliable results without unnecessary corrections.",
  },
  {
    title: "Real Cases. Real Results.",
    body: "Aggression. Reactivity. Severe anxiety. We've worked through it all and post the proof publicly — millions of views deep.",
  },
  {
    title: "Owner-Focused.",
    body: "Your dog isn't the only one we train. The owner gets the playbook so the results stick long after we're done.",
  },
  {
    title: "No Pre-Trained Sales Pitches.",
    body: "Every personal dog we own was trained from the ground up by us. We don't outsource our reputation.",
  },
];

const TIMELINE = [
  {
    year: "1992",
    title: "Hurricane Andrew",
    body: "A young kid in South Florida rescues two pit bull puppies in the aftermath of the storm. One stays. The obsession begins.",
  },
  {
    year: "Early Years",
    title: "Self-Taught Foundation",
    body: "Combining positive and negative reinforcement long before 'balanced training' had a name — building real-world working dogs from the start.",
  },
  {
    year: "Modern Era",
    title: "Industry Evolution",
    body: "At BulletproofK9s, training methods continue to evolve — and so do we. We stay focused on what matters most: creating calm, confident, well-behaved dogs that thrive in the real world.",
  },
  {
    year: "Today",
    title: "BulletproofK9s",
    body: "1,000+ dogs trained. 25M+ video views. Trusted by families, working professionals, and law enforcement worldwide.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />

      <PageHero
        eyebrow="Our Story"
        title="The Proof Is In The Pudding."
        subtitle="We don't just train dogs — we build unshakable partnerships between dog and owner. Three decades of obsession, channeled into the most reliable training program in the GTA."
        image="/imgs/img1.jpeg"
        ctaText="Book Free Call"
        secondaryCtaText="See Our Programs"
        secondaryCtaHref="/#services"
      />

      {/* Founder Story */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeUp>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imgs/img2.jpeg"
                alt="Founder with dogs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="label-red">Founder</div>
                <div className="font-heading text-3xl md:text-4xl uppercase mt-1">
                  Built In The Real World
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="label-red">From The Beginning</div>
            <h2 className="font-heading mt-2 text-4xl md:text-5xl uppercase leading-[0.95]">
              Three Decades Of <span className="text-[var(--red)]">Obsession</span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
            <p className="text-gray-300 leading-relaxed">
              The story starts in South Florida — a kid who couldn't get enough
              of dogs, then Hurricane Andrew rolled through in '92 and
              everything changed. Two pit bull puppies were rescued from the
              wreckage. One stayed. That's where the obsession was born.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Long before "balanced training" was a buzzword, we were building
              dogs the hard way — combining positive reinforcement and
              corrections to develop genuinely reliable companions. As the
              industry has evolved, so have our methods. What hasn't changed is
              the standard: every dog we train comes back calmer, more
              confident, and bulletproof in the real world.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              The dog training industry has no central governing body. That
              means anyone with a treat pouch can call themselves a "trainer."
              We let our results — not our certificates — speak for themselves.
            </p>
            <a href={PHONE_HREF} className="btn-red mt-8 glow-red">
              Talk To The Trainer
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-black py-24 md:py-28 border-y border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="text-center">
              <div className="label-red">The Journey</div>
              <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
                From One Dog To Thousands
              </h2>
            </div>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {TIMELINE.map((t, i) => (
              <FadeUp key={t.year} delay={i * 0.08}>
                <div className="bg-black p-7 h-full flex flex-col">
                  <div className="font-heading text-5xl text-[var(--red)] leading-none">
                    {t.year}
                  </div>
                  <h3 className="font-heading text-2xl uppercase mt-4">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">Our Approach</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              What We Stand For
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.06}>
                <div className="bg-black border border-[var(--border)] p-8 h-full hover:border-[var(--red)] transition-colors">
                  <h3 className="font-heading text-2xl md:text-3xl uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-black py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <FadeUp>
            <div className="text-[var(--red)] font-heading text-7xl leading-none">
              ❝
            </div>
            <p className="font-heading text-3xl md:text-5xl uppercase leading-[1.1] mt-6">
              The Proof Is In The Pudding —
              <br />
              <span className="text-[var(--red)]">And All We Serve Is Pudding.</span>
            </p>
            <div className="w-16 h-[2px] bg-[var(--red)] mx-auto mt-8" />
            <p className="mt-6 text-sm text-gray-400 uppercase tracking-[0.3em]">
              — BulletproofK9s
            </p>
          </FadeUp>
        </div>
      </section>

      <FinalCTA
        title={"Want To Schedule A Consultation?"}
        subtitle="Free 15-minute consultation. We'll talk about your dog, your goals, and the best path forward — no pressure."
      />

      <Footer />
    </main>
  );
}
