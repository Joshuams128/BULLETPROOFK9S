import Image from "next/image";
import { LOGO, PHONE, PHONE_HREF } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[var(--border)] py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-[var(--border)]">
          <a href="/" className="flex items-center">
            <Image
              src={LOGO}
              alt="BulletproofK9s"
              width={75}
              height={56}
              loading="lazy"
              className="h-[56px] w-auto"
            />
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
                href: "https://www.youtube.com/@BulletproofPitbulls",
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
              facility — turning out calm, Confident, Bulletproof dogs since
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
            © 2026 BulletproofK9s. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
