import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function StickyMobileCTA() {
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
