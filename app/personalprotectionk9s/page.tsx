"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { PHONE_HREF } from "@/lib/constants";

const TRAITS = [
  { t: "Confident Under Pressure", b: "Threat. Crowd. Stress. They stay clear-headed." },
  { t: "Socially Stable", b: "Calm in coffee shops. Indifferent to strangers. Friendly when you tell them to be." },
  { t: "Family Safe", b: "Kids, guests, other pets — they live with you, not in a kennel." },
  { t: "Obedient On Demand", b: "Off-leash control isn't optional — it's the foundation." },
  { t: "Protective With Discernment", b: "They activate when you need them, not when they feel like it." },
  { t: "Reliable Under Stress", b: "Tested in real environments — not just on a sleeve." },
];

const PHASES = [
  { n: "01", t: "Foundation & Relationship", b: "Trust, engagement, and the working partnership are built first. Without it, nothing else holds." },
  { n: "02", t: "Obedience & Control", b: "Reliable off-leash obedience under low and rising distractions." },
  { n: "03", t: "Focus & Engagement", b: "Drive channeling — teaching the dog where to put their intensity." },
  { n: "04", t: "Confidence Building", b: "Progressive exposure to environments, surfaces, sounds, and challenges." },
  { n: "05", t: "Environmental Conditioning", b: "Real-world contexts — urban, rural, indoor, crowded, isolated." },
  { n: "06", t: "Controlled Protection", b: "Threat recognition, bite work, and most importantly — the off switch." },
  { n: "07", t: "Family Integration", b: "Handover and lifestyle integration with you, your family, and your routine." },
];

const BREEDS = [
  { name: "German Shepherd", note: "The classic. Versatile, devoted, biddable." },
  { name: "Rottweiler", note: "Steady-headed, family-stable, naturally protective." },
  { name: "Belgian Malinois", note: "Intense drive, athleticism, surgical precision." },
  { name: "Bulletproof Hybrid", note: "Our proprietary line — bred for stability, athleticism, and family living." },
];

export default function ProtectionPage() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />

      <PageHero
        eyebrow="Elite Personal Protection"
        title="Calm. Until It Matters."
        subtitle="Personal protection dogs that are family-stable, socially confident, and uncompromisingly reliable when called upon. Not guard dogs. Working partners."
        image="https://bulletproofk9s.com/wp-content/uploads/2024/08/eba6faf-8fa8-6f7-1124-1a88f257010c_BPTraining_072223_-33_copy-1030x687.jpg"
        ctaText="Inquire Now"
        secondaryCtaText="See The Method"
        secondaryCtaHref="#method"
      />

      {/* What Defines */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">What Defines A Bulletproof PPD</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              Not A Guard Dog.
              <br />
              <span className="text-[var(--red)]">A Working Partner.</span>
            </h2>
            <p className="mt-5 text-gray-400 max-w-2xl">
              Aggressive dogs are a liability. Properly trained protection
              dogs are an asset. The difference is everything.
            </p>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {TRAITS.map((t, i) => (
              <FadeUp key={t.t} delay={i * 0.05}>
                <div className="bg-[var(--surface)] p-7 h-full">
                  <div className="text-[var(--red)]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl uppercase mt-4">
                    {t.t}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {t.b}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="bg-black py-24 md:py-28 border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">The Method</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              The 7-Phase BulletproofK9s Method
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl">
              Every protection dog we deliver moves through these phases — in
              order, never rushed.
            </p>
          </FadeUp>

          <div className="mt-14 flex flex-col">
            {PHASES.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.05}>
                <div
                  className={`grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_3fr] gap-6 py-8 ${
                    i !== 0 ? "border-t border-[var(--border)]" : ""
                  }`}
                >
                  <div className="font-heading text-5xl md:text-7xl text-[var(--red)] leading-none">
                    {p.n}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl uppercase">
                    {p.t}
                  </h3>
                  <p className="text-gray-400 leading-relaxed md:text-lg">
                    {p.b}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Breeds */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">Breed Selection</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              Bred For The Work.
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl">
              We don't take whatever shows up. We hand-select bloodlines
              proven for nerve, drive, and family stability.
            </p>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {BREEDS.map((b, i) => (
              <FadeUp key={b.name} delay={i * 0.06}>
                <div className="bg-black border border-[var(--border)] p-8 h-full hover:border-[var(--red)] transition-colors">
                  <h3 className="font-heading text-3xl uppercase">{b.name}</h3>
                  <div className="w-10 h-[2px] bg-[var(--red)] my-3" />
                  <p className="text-gray-400 leading-relaxed">{b.note}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-black py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <FadeUp>
            <div className="border border-[var(--border)] bg-[var(--surface)] p-10 md:p-14">
              <div className="label-red">Investment & Timeline</div>
              <h2 className="font-heading mt-3 text-4xl md:text-5xl uppercase leading-[0.95]">
                Built To Order. Built To Last.
              </h2>
              <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
              <p className="text-gray-300 leading-relaxed">
                Protection dogs are not off-the-shelf. Training spans several
                months to over two years depending on the level required —
                family deterrent, executive protection, or fully decoy-tested
                operational dogs.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Pricing varies by breed, age at delivery, and the depth of
                protection development. Every project is quoted individually
                after a discovery call.
              </p>
              <a href={PHONE_HREF} className="btn-red mt-8 glow-red">
                Start The Conversation
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <FinalCTA
        title={"Ready For An\nElite Partner?"}
        subtitle="Personal protection dogs are a serious investment — and a serious responsibility. Book a discovery call to discuss your situation."
      />

      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
