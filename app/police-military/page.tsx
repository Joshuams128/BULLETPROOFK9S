"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import { PHONE_HREF } from "@/lib/constants";

const CAPABILITIES = [
  { n: "01", t: "Breed Selection", b: "German Shepherds, Belgian Malinois, Dutch Shepherds, and Labradors — chosen for nerve, drive, and operational fit." },
  { n: "02", t: "Foundation Training", b: "Obedience, environmental conditioning, and the building blocks every operational dog needs before specialization." },
  { n: "03", t: "Detection", b: "Narcotics, explosives, firearms, contraband — odor recognition trained to operational standards." },
  { n: "04", t: "Apprehension & Patrol", b: "Bite work, suspect apprehension, and controlled engagement on cue." },
  { n: "05", t: "Search & Rescue", b: "Tracking, area search, and disaster work in challenging terrain." },
  { n: "06", t: "Specialized Ops", b: "SWAT support, crowd control, VIP protection, and tactical deployment." },
  { n: "07", t: "Handler Pairing", b: "K9s paired with handlers and bonded into operational teams that perform under real pressure." },
  { n: "08", t: "Health & Care", b: "Conditioning, nutrition, vet protocols, and recovery — keeping working dogs in working shape." },
  { n: "09", t: "Retirement & Aftercare", b: "Pathways for retired K9s — adoption support and structured aftercare programs." },
];

const BREEDS_TABLE = [
  { name: "German Shepherd", traits: "Versatile · Biddable · All-around" },
  { name: "Belgian Malinois", traits: "High drive · Athletic · Precision" },
  { name: "Dutch Shepherd", traits: "Tuned-in · Hunt drive · Clear-headed" },
  { name: "Labrador Retriever", traits: "Detection · Nose work · Sociable" },
];

export default function PoliceMilitaryPage() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />

      <PageHero
        eyebrow="Law Enforcement & Military"
        title="Operational K9s. Built To Standard."
        subtitle="K9s trained for the work that matters — detection, apprehension, search & rescue, and specialized operations. Built to perform under pressure, every time."
        image="https://bulletproofk9s.com/wp-content/uploads/2024/08/f24a5c-b3fc-4084-cf8-1ee30bbf6cd6_IMG_0910_1_-1030x773.jpg"
        ctaText="Agency Inquiry"
        secondaryCtaText="See Capabilities"
        secondaryCtaHref="#capabilities"
      />

      {/* Intro */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <div className="label-red">For Working Teams</div>
            <h2 className="font-heading mt-2 text-4xl md:text-5xl uppercase leading-[0.95]">
              When The Stakes Are Real,
              <br />
              <span className="text-[var(--red)]">The Dog Has To Be Too.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
            <p className="text-gray-300 leading-relaxed">
              Police and military K9s carry weight that pet dogs never will.
              They locate threats, apprehend suspects, find missing persons,
              and operate in environments most dogs would never function in.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We supply, train, and pair operational dogs with the agencies
              and handlers who depend on them. Every K9 we deliver meets a
              standard that holds up in the field — not just on a training
              yard.
            </p>
            <a href={PHONE_HREF} className="btn-red mt-8 glow-red">
              Talk To Our Team
            </a>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://bulletproofk9s.com/wp-content/uploads/2024/08/f24a5c-b3fc-4084-cf8-1ee30bbf6cd6_IMG_0910_1_-1030x773.jpg"
                alt="Police K9"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="bg-black py-24 md:py-28 border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">Capabilities</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              Nine Pillars
              <br />
              Of Operational Readiness
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {CAPABILITIES.map((c, i) => (
              <FadeUp key={c.n} delay={i * 0.04}>
                <div className="bg-black p-7 h-full hover:bg-[var(--surface)] transition-colors">
                  <div className="font-heading text-5xl text-[var(--red)]/40 leading-none">
                    {c.n}
                  </div>
                  <h3 className="font-heading text-xl uppercase mt-3">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {c.b}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Breeds Table */}
      <section className="bg-[var(--surface)] py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="label-red">Breed Profiles</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              Working Lines Only
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl">
              No backyard breeders. No untested bloodlines. Every operational
              K9 we offer comes from working pedigrees with a track record.
            </p>
          </FadeUp>

          <div className="mt-14 border border-[var(--border)]">
            {BREEDS_TABLE.map((b, i) => (
              <FadeUp key={b.name} delay={i * 0.05}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-8 p-6 md:p-8 items-center bg-[var(--surface)] ${
                    i !== BREEDS_TABLE.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }`}
                >
                  <div className="font-heading text-2xl md:text-3xl uppercase">
                    {b.name}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {b.traits}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Block */}
      <section className="bg-black py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <FadeUp>
            <div className="border-2 border-[var(--red)] bg-[var(--surface)] p-10 md:p-14 text-center glow-red">
              <div className="label-red">Agency Inquiries</div>
              <h2 className="font-heading mt-3 text-4xl md:text-5xl uppercase leading-[0.95]">
                Quote By Mission Profile
              </h2>
              <div className="w-16 h-[2px] bg-[var(--red)] mx-auto my-6" />
              <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
                Every operational deployment is different. Single-purpose
                detection, dual-purpose patrol, full operational K9 — pricing
                and timelines depend on the spec. Talk to our team to discuss
                requirements.
              </p>
              <a href={PHONE_HREF} className="btn-red mt-8 glow-red">
                Submit Inquiry
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <FinalCTA
        title={"Equip Your Team\nWith Working Dogs."}
        subtitle="Confidential consultations available for law enforcement, military, and private security teams."
        primary={{ text: "Submit Inquiry", href: PHONE_HREF }}
      />

      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
