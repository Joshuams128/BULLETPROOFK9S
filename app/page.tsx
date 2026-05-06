"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/* ----------------------------- FadeUp ----------------------------- */

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ Data ------------------------------ */

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

const SERVICE_LINKS = [
  { label: "Private Lessons", href: "/private-dog-training-lessons" },
  { label: "Board & Train", href: "/board-and-train" },
  { label: "Group Training", href: "/group-training" },
  { label: "Personal Protection", href: "/personalprotectionk9s" },
  { label: "Law Enforcement / Military", href: "/police-military" },
  { label: "Boarding", href: "/boarding" },
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

const PHONE = "(437) 555-0182";
const PHONE_HREF = "tel:+14375550182";
const LOGO =
  "https://bulletproofk9s.com/wp-content/uploads/2025/03/logo-300x225.png";

/* ----------------------------- Navbar ----------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="BulletproofK9s" style={{ height: 52 }} />
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-sm">
          <a href="/" className="hover:text-[var(--red)] transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-[var(--red)] transition-colors">
            About
          </a>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-[var(--red)] transition-colors flex items-center gap-1">
              Services
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                >
                  <div className="bg-black/85 backdrop-blur-md border border-[var(--border)] py-2">
                    {SERVICE_LINKS.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-2.5 text-sm text-gray-300 hover:bg-[var(--red)]/10 hover:text-white transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="/contact"
            className="hover:text-[var(--red)] transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={PHONE_HREF}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            {PHONE}
          </a>
          <a
            href={PHONE_HREF}
            className="bg-[var(--red)] hover:bg-[var(--red-dim)] text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all glow-red"
          >
            Book Free Call
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          aria-label="menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
              />
            ) : (
              <>
                <path d="M3 7h18" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
                <path d="M3 17h18" stroke="currentColor" strokeWidth="2" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-black/95 border-t border-[var(--border)]"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              <a href="/" className="py-3 text-sm uppercase tracking-widest">
                Home
              </a>
              <a
                href="/about"
                className="py-3 text-sm uppercase tracking-widest"
              >
                About
              </a>
              <div className="py-2">
                <div className="text-xs text-[var(--red)] uppercase tracking-widest mb-2">
                  Services
                </div>
                <div className="flex flex-col">
                  {SERVICE_LINKS.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="py-2 text-sm text-gray-300"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="/contact"
                className="py-3 text-sm uppercase tracking-widest"
              >
                Contact
              </a>
              <a
                href={PHONE_HREF}
                className="mt-4 btn-red justify-center w-full"
              >
                Book Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------------ Hero ------------------------------ */

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
            style={{ fontSize: "clamp(60px, 11vw, 120px)" }}
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

/* ------------------------- Social Proof Bar ----------------------- */

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

/* ---------------------------- Services ---------------------------- */

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

/* --------------------------- Approach ----------------------------- */

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

/* --------------------------- Blueprint ---------------------------- */

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

/* ------------------------- Testimonials -------------------------- */

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

/* ----------------------------- CTA ------------------------------- */

function CTA() {
  return (
    <section className="bg-[var(--red)] py-20 md:py-28 relative overflow-hidden grain">
      <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8 text-center">
        <FadeUp>
          <h2 className="font-heading text-5xl md:text-7xl uppercase text-white leading-[0.95]">
            Ready To Build A
            <br />
            Bulletproof Dog?
          </h2>
          <p className="mt-5 text-white/85 text-lg max-w-xl mx-auto">
            Book a free 15-minute consultation. We'll talk through your dog,
            your goals, and the right program to get there.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="bg-white text-[var(--red)] font-bold uppercase tracking-widest text-sm px-7 py-3.5 hover:bg-black hover:text-white transition-colors"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border border-white text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 hover:bg-white hover:text-[var(--red)] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------------------- Footer ----------------------------- */

function Footer() {
  return (
    <footer className="bg-black border-t border-[var(--border)] py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-[var(--border)]">
          <a href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="BulletproofK9s" style={{ height: 56 }} />
          </a>
          <div className="flex items-center gap-3">
            {[
              {
                label: "Facebook",
                href: "https://facebook.com/bulletproofk9s",
                d: "M13 22v-8h3l1-4h-4V7c0-1.1.9-2 2-2h2V1h-3a5 5 0 0 0-5 5v4H6v4h3v8h4z",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/bulletproofk9s",
                d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
              },
              {
                label: "YouTube",
                href: "https://youtube.com/bulletproofk9s",
                d: "M22 8.5a3 3 0 0 0-2.1-2.1C18.1 6 12 6 12 6s-6.1 0-7.9.4A3 3 0 0 0 2 8.5C1.6 10.3 1.6 12 1.6 12s0 1.7.4 3.5A3 3 0 0 0 4.1 17.6C5.9 18 12 18 12 18s6.1 0 7.9-.4a3 3 0 0 0 2.1-2.1c.4-1.8.4-3.5.4-3.5s0-1.7-.4-3.5zM10 15V9l5 3-5 3z",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-gray-300 hover:text-white hover:bg-[var(--red)] hover:border-[var(--red)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          <div>
            <h4 className="font-heading text-xl uppercase mb-3">About</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              BulletproofK9s is Toronto &amp; the GTA's premier dog training
              facility — turning out calm, confident, bulletproof dogs since
              day one.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl uppercase mb-3">Pages</h4>
            <ul className="text-sm text-gray-400 flex flex-col gap-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/board-and-train" className="hover:text-white">Board &amp; Train</a></li>
              <li><a href="/personalprotectionk9s" className="hover:text-white">Personal Protection</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl uppercase mb-3">Contact</h4>
            <ul className="text-sm text-gray-400 flex flex-col gap-2">
              <li>
                <a href={PHONE_HREF} className="hover:text-white">
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bulletproofk9s.com"
                  className="hover:text-white"
                >
                  info@bulletproofk9s.com
                </a>
              </li>
              <li>Toronto &amp; GTA, Ontario</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} BulletproofK9s. All rights reserved.
          </div>
          <div>
            Site by{" "}
            <a
              href="https://acersites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[var(--red)]"
            >
              AcerSites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------- Sticky Mobile CTA ----------------------- */

function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-[var(--border)] px-4 py-3">
      <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest mb-2">
        Free Consultation · {PHONE}
      </div>
      <a
        href={PHONE_HREF}
        className="block w-full bg-[var(--red)] text-white text-center font-bold uppercase tracking-widest text-sm py-3"
      >
        Call Now
      </a>
    </div>
  );
}

/* ------------------------------ Page ----------------------------- */

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
      <CTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
