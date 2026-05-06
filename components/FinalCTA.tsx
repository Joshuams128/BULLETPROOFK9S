import FadeUp from "@/components/FadeUp";
import { PHONE_HREF } from "@/lib/constants";

export default function FinalCTA({
  title = "Ready To Build A\nBulletproof Dog?",
  subtitle = "Book a free 15-minute consultation. We'll talk through your dog, your goals, and the right program to get there.",
  primary = { text: "Call Now", href: PHONE_HREF },
  secondary = { text: "Contact Us", href: "/contact" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { text: string; href: string };
  secondary?: { text: string; href: string };
}) {
  return (
    <section className="bg-[var(--red)] py-20 md:py-28 relative overflow-hidden grain">
      <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8 text-center">
        <FadeUp>
          <h2 className="font-heading text-5xl md:text-7xl uppercase text-white leading-[0.95] whitespace-pre-line">
            {title}
          </h2>
          <p className="mt-5 text-white/85 text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={primary.href}
              className="bg-white text-[var(--red)] font-bold uppercase tracking-widest text-sm px-7 py-3.5 hover:bg-black hover:text-white transition-colors"
            >
              {primary.text}
            </a>
            <a
              href={secondary.href}
              className="border border-white text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 hover:bg-white hover:text-[var(--red)] transition-colors"
            >
              {secondary.text}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
