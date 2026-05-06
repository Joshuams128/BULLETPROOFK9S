"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { PHONE_HREF } from "@/lib/constants";

const SERVICES = [
  {
    title: "Private Lessons",
    desc: "One-on-one instruction tailored to your dog's unique needs and behaviour goals.",
    href: "/private-dog-training-lessons",
    img: "https://bulletproofk9s.com/wp-content/uploads/2024/08/Private-Dog-Training-Lesson-1.jpg",
    tag: "1:1",
  },
  {
    title: "Board & Train",
    desc: "Your dog stays with us for intensive, immersive training — comes back transformed.",
    href: "/board-and-train",
    img: "https://bulletproofk9s.com/wp-content/uploads/2024/08/Board-and-Train-Service-1030x687.jpg",
    tag: "Most Popular",
  },
  {
    title: "Group Sessions",
    desc: "Structured group classes for advanced skills and real-world socialization.",
    href: "/group-training",
    img: "https://bulletproofk9s.com/wp-content/uploads/2024/08/6ee4784-4ed7-c7bf-af14-f85a10f7c23_BPK9_Training_2023_-_Aug_26th_and_31st_-12_copy-1030x687.jpg",
    tag: "Group",
  },
  {
    title: "Law Enforcement & Military",
    desc: "Specialized K9 training for working dogs in demanding operational environments.",
    href: "/police-military",
    img: "https://bulletproofk9s.com/wp-content/uploads/2024/08/f24a5c-b3fc-4084-cf8-1ee30bbf6cd6_IMG_0910_1_-1030x773.jpg",
    tag: "K9",
  },
  {
    title: "Personal Protection",
    desc: "Trained to recognize threats and protect your family — calm until it matters.",
    href: "/personalprotectionk9s",
    img: "https://bulletproofk9s.com/wp-content/uploads/2024/08/eba6faf-8fa8-6f7-1124-1a88f257010c_BPTraining_072223_-33_copy-1030x687.jpg",
    tag: "Elite",
  },
  {
    title: "Boarding",
    desc: "Going away? Your dog is in expert hands — safe, social, and well cared for.",
    href: "/boarding",
    img: "https://bulletproofk9s.com/wp-content/uploads/2024/10/iStock-1306167086-2000x1333-1-1030x686.jpg",
    tag: "Care",
  },
];

const APPROACH = [
  {
    n: "01",
    title: "Real-World Results",
    body: "We don't train for demos. We train for life.",
  },
  {
    n: "02",
    title: "Every Breed. Every Problem.",
    body: "Toy breeds to high-drive working dogs.",
  },
  {
    n: "03",
    title: "25M+ YouTube Views",
    body: "Trusted by thousands of dog owners worldwide.",
  },
  {
    n: "04",
    title: "No Gimmicks, Ever.",
    body: "Proven methods. Calm, confident, bulletproof dogs.",
  },
];

const BLUEPRINT_FEATURES = [
  "Step-by-step video lessons from puppy to advanced",
  "Real cases — reactivity, recall, leash work, manners",
  "Private community + direct coaching from the team",
  "Train at your pace, on any device, anywhere",
];

const BLUEPRINT_IMAGES = [
  "https://bulletproofk9s.com/wp-content/uploads/2024/10/Screenshot-2024-05-24-at-12.11.19 PM.png",
  "https://bulletproofk9s.com/wp-content/uploads/2024/10/Screenshot-2024-05-24-at-1.10.42 PM-3.png",
  "https://bulletproofk9s.com/wp-content/uploads/2024/10/Screenshot-2024-05-24-at-12.10.21 PM.png",
  "https://bulletproofk9s.com/wp-content/uploads/2024/10/Screenshot-2024-05-24-at-12.56.33 PM.png",
  "https://bulletproofk9s.com/wp-content/uploads/2024/10/Screenshot-2024-05-24-at-12.54.46 PM.png",
  "https://bulletproofk9s.com/wp-content/uploads/2024/10/Screenshot-2024-05-24-at-12.41.31 PM.png",
];

const TESTIMONIALS = [
  {
    quote:
      "BulletproofK9s completely changed my reactive German Shepherd. Jeremy knows exactly what he's doing.",
    name: "Sarah M.",
  },
  {
    quote:
      "We tried multiple trainers. After just a few sessions our dog is calm, focused, and obedient.",
    name: "Mike T.",
  },
  {
    quote:
      "The Board & Train was worth every penny. Got our dog back happier and completely transformed.",
    name: "Amanda L.",
  },
];

function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden grain bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source
          src="https://bulletproofk9s.com/wp-content/uploads/2025/06/Sequence-0130mb.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 0% 100%, rgba(192,0,10,0.25), transparent)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block border border-[var(--red)] text-white uppercase text-[10px] tracking-[0.3em] px-3 py-1.5 rounded-full mb-6">
            Toronto &amp; GTA's #1 Dog Trainers
          </span>

          <h1
            className="font-heading uppercase text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(36px, 6.5vw, 72px)" }}
          >
            Your Last Stop
            <br />
            For Dog Training
          </h1>

          <div className="w-16 h-[2px] bg-white/20 mx-auto my-10" />

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From toy breeds to working dogs — we fix what others can't.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {[
              "Puppy Training",
              "Behaviour Issues",
              "Personal Protection",
              "Board & Train",
              "Law Enforcement",
            ].map((p) => (
              <span
                key={p}
                className="bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300"
              >
                ✓ {p}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a href={PHONE_HREF} className="btn-red glow-red">
              Call Now
            </a>
            <a href="#work" className="btn-ghost">
              ▶ Watch Our Work
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-400 tracking-wide">
            📞 Free 15-min consultation &nbsp;·&nbsp; 🔥 30% OFF all packages
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-bounce text-white/60">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { num: "25M+", label: "YouTube Views" },
    { num: "1,000+", label: "Dogs Trained" },
    { num: "15+", label: "Years Experience" },
  ];
  return (
    <section className="bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="grid grid-cols-3 flex-1 w-full">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-4 ${
                i < stats.length - 1 ? "border-r border-[var(--border)]" : ""
              }`}
            >
              <div className="font-heading text-5xl md:text-6xl text-[var(--red)] leading-none">
                {s.num}
              </div>
              <div className="mt-2 text-[11px] md:text-xs text-gray-400 uppercase tracking-[0.2em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center pl-8 border-l border-[var(--border)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://bulletproofk9s.com/wp-content/uploads/2024/08/a3d6d7-a64-f3af-8ce3-43baae87caa0_YouTube-logo-1-300x169.webp"
            alt="YouTube"
            className="h-12 w-auto opacity-80"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[var(--surface)] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeUp>
          <div className="label-red">What We Offer</div>
          <h2 className="font-heading mt-2 text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95]">
            Training Programs
          </h2>
          <p className="mt-5 max-w-xl text-gray-400">
            Choose your path. Every program is built around proven methods and
            tailored to your dog — no copy-paste solutions.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.05}>
              <a
                href={s.href}
                className="group bg-[var(--surface)] block overflow-hidden h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--red)] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 font-heading uppercase text-xs px-3 py-1 bg-black/70 text-white tracking-widest">
                    {s.tag}
                  </span>
                </div>
                <div className="px-6 py-7">
                  <h3 className="font-heading text-2xl uppercase">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                    {s.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--red)] group-hover:gap-3 gap-2 transition-all">
                    Learn More <span>→</span>
                  </span>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-black py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <FadeUp>
            <div className="label-red">Why Choose Us</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              Why
              <br />
              BulletproofK9s
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
            <p className="text-gray-400 max-w-md">
              We've trained over a thousand dogs and earned millions of views
              showing our work. No theatrics. No quick fixes. Just calm,
              confident, bulletproof dogs — and the owners who finally feel in
              control.
            </p>
            <a href={PHONE_HREF} className="btn-red mt-8 glow-red">
              Book Free Consultation
            </a>
          </FadeUp>
        </div>

        <div className="flex flex-col">
          {APPROACH.map((a, i) => (
            <FadeUp key={a.n} delay={i * 0.06}>
              <div
                className={`grid grid-cols-[80px_1fr] gap-6 py-8 ${
                  i !== 0 ? "border-t border-[var(--border)]" : ""
                }`}
              >
                <div className="font-heading text-6xl text-white/10 leading-none">
                  {a.n}
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl uppercase">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{a.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blueprint() {
  const positions = [
    "top-0 left-0 w-[62%] z-30",
    "top-[8%] right-0 w-[55%] z-20",
    "top-[34%] left-[8%] w-[58%] z-40",
    "top-[44%] right-[4%] w-[50%] z-30",
    "bottom-[4%] left-0 w-[55%] z-20",
    "bottom-0 right-[2%] w-[60%] z-10",
  ];
  return (
    <section className="bg-[var(--surface)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[600px] overflow-hidden bg-black">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgba(192,0,10,0.18), transparent 60%)",
            }}
          />
          <div className="relative h-full w-full px-6 py-6">
            {BLUEPRINT_IMAGES.map((src, i) => (
              <FadeUp
                key={src}
                delay={i * 0.07}
                className={`absolute ${positions[i]}`}
              >
                <div className="border border-[var(--border)] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto block"
                    style={{ display: "block" }}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="bg-black px-7 md:px-12 py-16 md:py-20 flex flex-col justify-center">
          <FadeUp>
            <div className="label-red">Can't Make It In Person?</div>
            <h2 className="font-heading mt-2 text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
              Train Online
              <br />
              With The Blueprint
            </h2>
            <p className="mt-5 text-gray-400 max-w-md">
              The exact methods we use in-house — packaged into a complete
              online program. Train your dog from anywhere in the world.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {BLUEPRINT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-200">
                  <span className="text-[var(--red)] mt-1">▶</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.bulletproofk9sonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red mt-10 glow-red w-fit"
            >
              Start Training Now →
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-black py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeUp>
          <div className="text-center">
            <div className="label-red">Testimonials</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              What Clients Say
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] mx-auto mt-6" />
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <div className="bg-[var(--surface)] p-8 flex flex-col gap-4 h-full border border-[var(--border)]">
                <div className="text-yellow-400 text-lg tracking-widest">
                  ★★★★★
                </div>
                <p className="italic text-gray-300 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-auto pt-4">
                  <div className="font-heading text-xl uppercase">
                    {t.name}
                  </div>
                  <div className="w-10 h-[2px] bg-[var(--red)] mt-2" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Approach />
      <Blueprint />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
