"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import GoogleReviews from "@/components/GoogleReviews";
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
    title: "Reward + Structure",
    body: "Positive reinforcement training that respects your dog while giving them the structure they need to thrive. Trust comes from clarity, not bribery.",
  },
];

const BLUEPRINT_FEATURES = [
  "Step-by-step video lessons from puppy to advanced",
  "Real cases — reactivity, recall, leash work, manners",
  "Private community + direct coaching from our trainer",
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

function Hero() {
  const heroVideo = "/imgs/bgvideo.mp4";

  return (
    <>
      {/* Desktop Hero — mirrors mobile layout, scaled up */}
      <section className="hidden md:block bg-black pt-28">
        <div className="relative aspect-video bg-black overflow-hidden mx-auto w-10/12 max-w-5xl rounded-2xl">
          <video
            src="https://pub-79639a2784374f67b9c9d3482ee26dc9.r2.dev/Sequence-01.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="px-8 text-center mt-10 mb-2 flex justify-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-white leading-tight max-w-4xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: "900", textTransform: "uppercase" }}>
            "Your Last <span style={{ color: "var(--red)" }}>Stop</span> for Your Dog Training Needs"
          </h2>
        </div>

        <div className="relative z-10 px-8 pt-12 pb-20 border-b border-[var(--border)]">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl lg:text-3xl mb-10 text-center" style={{ color: "#CEF50C", fontFamily: "'Inter', sans-serif", fontWeight: "900", letterSpacing: "0.02em", textTransform: "none" }}>
              From Toy Breeds to Working Dogs — We Fix What Others Can't.
            </p>

            <p className="text-lg lg:text-xl text-gray-300 mb-4 leading-relaxed">
              Whether it's a tiny terrier or a powerful working dog, we deliver real-world training that works. From puppy problems to behavior issues, protection, or sport dog precision—we train dogs you can trust anywhere, anytime.
            </p>

            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              No gimmicks. No wasted time. Just proven methods that build calm, Confident, Bulletproof dogs.
            </p>

            <div className="space-y-3 mb-12">
              {[
                "Puppy Training",
                "Behavior Issues (aggression, reactivity, anxiety)",
                "Personal Protection",
                "Dog Sport Problem Solving",
                "Toy Breeds to High-Drive Working Dogs",
                "Professional Dog Training That Won't Break the Bank",
              ].map((service) => (
                <div key={service} className="flex items-start gap-4 text-lg lg:text-xl text-gray-300">
                  <span style={{ color: "#CEF50C" }}>✅</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 mb-8 max-w-2xl mx-auto">
              <p className="text-xl lg:text-2xl font-bold uppercase text-center" style={{ color: "#CEF50C" }}>
                📞 Book your FREE 15-minute phone consultation
              </p>
              <p className="text-xl lg:text-2xl font-bold uppercase text-center" style={{ color: "#CEF50C" }}>
                🔥 30% OFF all training packages — limited time only!
              </p>
              <a href={PHONE_HREF} className="block px-8 py-5 text-xl font-bold uppercase text-center transition-all rounded-lg" style={{ backgroundColor: "#E8BE1B", color: "#000000" }}>
                📞 Call now
              </a>
            </div>

            <p className="text-lg lg:text-xl text-white font-bold text-center">
              Let's build the dog you've always wanted—starting today.
            </p>

            <div className="mt-14 grid grid-cols-3 gap-8">
              {[
                { num: "25M+", label: "YouTube Views" },
                { num: "1,000+", label: "Dogs Trained" },
                { num: "15+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-5xl lg:text-6xl text-[var(--red)] leading-none">
                    {s.num}
                  </div>
                  <div className="mt-3 text-sm lg:text-base text-gray-400 uppercase tracking-[0.2em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 relative aspect-video bg-black overflow-hidden rounded-2xl w-full">
              <video
                src="https://pub-79639a2784374f67b9c9d3482ee26dc9.r2.dev/20240820-111322-1puppy-kids.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero with video on top */}
      <section className="md:hidden bg-black pt-20">
        <div className="px-5 text-center mb-6 flex justify-center pt-4">
          <h2 className="text-xl text-white leading-tight max-w-xs" style={{ fontFamily: "'Inter', sans-serif", fontWeight: "900", textTransform: "uppercase" }}>
            "Your Last <span style={{ color: "var(--red)" }}>Stop</span> for Your Dog Training Needs"
          </h2>
        </div>
        <div className="relative aspect-video bg-black overflow-hidden mx-auto w-11/12 rounded-lg">
          <video
            src="https://pub-79639a2784374f67b9c9d3482ee26dc9.r2.dev/Sequence-01.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-5 pt-6 pb-12 border-b border-[var(--border)]">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-6" style={{ color: "#CEF50C", fontFamily: "'Inter', sans-serif", fontWeight: "900", letterSpacing: "0.02em", textTransform: "none" }}>
              From Toy Breeds to Working Dogs — We Fix What Others Can't.
            </p>

            <p className="text-sm md:text-base text-gray-300 mb-2 leading-relaxed">
              Whether it's a tiny terrier or a powerful working dog, we deliver real-world training that works. From puppy problems to behavior issues, protection, or sport dog precision—we train dogs you can trust anywhere, anytime.
            </p>

            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
              No gimmicks. No wasted time. Just proven methods that build calm, Confident, Bulletproof dogs.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Puppy Training",
                "Behavior Issues (aggression, reactivity, anxiety)",
                "Personal Protection",
                "Dog Sport Problem Solving",
                "Toy Breeds to High-Drive Working Dogs",
                "Professional Dog Training That Won't Break the Bank",
              ].map((service) => (
                <div key={service} className="flex items-start gap-3 text-sm text-gray-300">
                  <span style={{ color: "#CEF50C" }}>✅</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <p className="text-sm font-bold uppercase text-center" style={{ color: "#CEF50C" }}>
                📞 Book your FREE 15-minute phone consultation
              </p>
              <p className="text-sm font-bold uppercase text-center" style={{ color: "#CEF50C" }}>
                🔥 30% OFF all training packages — limited time only!
              </p>
              <a href={PHONE_HREF} className="block px-6 py-3 text-sm font-bold uppercase text-center transition-all rounded-lg" style={{ backgroundColor: "#E8BE1B", color: "#000000" }}>
                📞 Call now
              </a>
            </div>

            <p className="text-sm text-white font-bold text-center">
              Let's build the dog you've always wanted—starting today.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { num: "25M+", label: "YouTube Views" },
                { num: "1,000+", label: "Dogs Trained" },
                { num: "15+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-3xl text-[var(--red)] leading-none">
                    {s.num}
                  </div>
                  <div className="mt-2 text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 relative aspect-video bg-black overflow-hidden rounded-lg w-full">
              <video
                src="https://pub-79639a2784374f67b9c9d3482ee26dc9.r2.dev/20240820-111322-1puppy-kids.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ConsultationStrip() {
  const services = [
    "Puppy Training",
    "Behaviour Issues",
    "Personal Protection",
    "Board & Train",
    "Law Enforcement",
  ];

  return (
    <section className="bg-black border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 text-center flex flex-col gap-8">
        <div>
          <p className="font-heading text-3xl md:text-4xl max-w-2xl mx-auto" style={{ color: "#CCFF00" }}>
            From toy breeds to working dogs — we fix what others can't.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {services.map((service) => (
            <span
              key={service}
              className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-gray-300"
            >
              <span style={{ color: "#CEF50C" }}>✓</span> {service}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={PHONE_HREF} className="px-6 py-3 text-sm font-semibold uppercase transition-all border border-white" style={{ color: "#CEF50C" }}>
            📞 Free 15-min Consultation
          </a>
          <a href={PHONE_HREF} className="px-6 py-3 text-sm font-semibold uppercase transition-all border border-white" style={{ color: "#CEF50C" }}>
            🔥 Get 30% OFF All Packages
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [expanded, setExpanded] = useState<string | null>(null);

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

        <div className="mt-14 space-y-4">
          {SERVICES.map((s) => (
            <FadeUp key={s.title}>
              <div className="border border-[var(--border)] bg-[var(--surface)]">
                <button
                  onClick={() => setExpanded(expanded === s.title ? null : s.title)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="font-heading text-lg md:text-2xl uppercase text-left">
                    {s.title}
                  </h3>
                  <span className="text-[var(--red)] text-2xl ml-4">
                    {expanded === s.title ? "−" : "+"}
                  </span>
                </button>
                {expanded === s.title && (
                  <div className="border-t border-[var(--border)] px-6 py-6">
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-4 w-full md:w-3/4 lg:w-2/3 md:mx-auto">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.img}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-300 mb-4">
                      {s.desc}
                    </p>
                    <a
                      href={s.href}
                      className="inline-flex items-center text-sm font-semibold text-[var(--red)] gap-2 hover:gap-3 transition-all"
                    >
                      Learn More <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-black pt-12 md:pt-16 pb-24 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Image + heading side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <FadeUp>
            <img
              src="/imgs/laurapic.jpeg"
              alt="Laura"
              className="w-1/2 mx-auto lg:mx-0 lg:w-3/4 rounded-xl shadow-lg block"
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="label-red">Why Choose Us</div>
            <h2 className="font-heading mt-2 text-5xl md:text-6xl uppercase leading-[0.95]">
              Why
              <br />
              BulletproofK9s
            </h2>
            <div className="w-16 h-[2px] bg-[var(--red)] my-6" />
            <p className="text-gray-400 max-w-md">
              We've trained over a thousand dogs and earned millions of views
              showing our work. No theatrics. No gimmicks. Just calm,
              Confident, Bulletproof dogs — and the owners who finally feel in
              control.
            </p>
            <a href="/contact" className="btn-red mt-8 glow-red">
              Book Free Consultation
            </a>
          </FadeUp>
        </div>

        {/* Numbered items below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[var(--border)]">
          {APPROACH.map((a, i) => (
            <FadeUp key={a.n} delay={i * 0.06}>
              <div className="py-8 px-6 border-b md:border-b-0 md:border-r border-[var(--border)] last:border-0">
                <div className="font-heading text-5xl text-white/10 leading-none mb-4">
                  {a.n}
                </div>
                <h3 className="font-heading text-xl md:text-2xl uppercase">
                  {a.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm">{a.body}</p>
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
        <div className="relative bg-black flex flex-col items-center justify-start pt-8 md:pt-12 pb-8 px-5 md:px-8">
          <FadeUp>
            <div className="label-red mb-8">Can't Make It In Person?</div>
          </FadeUp>
          <div className="w-5/6 md:w-4/5 rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imgs/online2.jpeg"
              alt="Train Online With The Blueprint"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="bg-black px-7 md:px-12 py-16 md:py-20 flex flex-col justify-center">
          <FadeUp>
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

export default function Page() {
  return (
    <main className="bg-black overflow-hidden pb-[88px] md:pb-0">
      <Navbar />
      <Hero />
      <GoogleReviews />
      <Approach />
      <Services />
      <Blueprint />
      <FinalCTA />
      <Footer />
    </main>
  );
}
