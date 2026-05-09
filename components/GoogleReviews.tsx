"use client";

import { useEffect, useRef, useState } from "react";
import { PHONE_HREF } from "@/lib/constants";

type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

type ReviewsData = {
  reviews: Review[];
  rating: number;
  total: number;
};

function Stars({ rating, size = "text-sm" }: { rating: number; size?: string }) {
  return (
    <div className={`${size} tracking-wide`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={n <= Math.round(rating) ? "text-yellow-400" : "text-gray-600"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const reviews = data?.reviews ?? [];

  function scrollBy(direction: "left" | "right") {
    if (isScrollingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;

    const next = direction === "right"
      ? Math.min(index + 1, reviews.length - 1)
      : Math.max(index - 1, 0);

    if (next === index) return;

    const card = el.children[next] as HTMLElement;
    if (!card) return;

    isScrollingRef.current = true;
    setIndex(next);
    el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 450);
  }

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-[#c0000a] text-sm uppercase tracking-widest">
            TESTIMONIALS
          </div>
          <h2 className="font-['Bebas_Neue'] text-6xl text-white uppercase mt-2">
            What Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-[#c0000a] mx-auto mt-3 mb-6" />

          {data && data.rating > 0 && (
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Stars rating={data.rating} />
              <span className="text-white font-bold text-sm">
                {data.rating.toFixed(1)}
              </span>
              <a
                href="https://www.google.com/search?sca_esv=d7ecfc8aae73f1fb&rlz=1C5CHFA_enCA1092CA1093&sxsrf=ANbL-n6RphU_jpVsxer4sNUO-rPYxG0LIg:1778213115519&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVd4wOrTpqYRzdqE-0rzSlxggbiOhT54mG7SZilbe2aGOi0W9A-uQFjRGMuEZIwvPQvldk2lY6KTM0L0AxqunBL4kRfI&q=BulletproofK9s+Reviews&sa=X&ved=2ahUKEwiWpteI6KiUAxUJtokEHdglOyYQ0bkNegQIQBAH&biw=1280&bih=678&dpr=2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-xs underline hover:text-white transition-colors"
              >
                ({data.total} Google reviews)
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-4 object-contain"
              />
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="bg-[#0c0c0c] border border-white/5 h-52 animate-pulse"
              />
            ))}
          </div>
        ) : reviews.length > 0 ? (
          <div className="relative mt-10">
            <button
              onClick={() => scrollBy("left")}
              aria-label="Previous reviews"
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 items-center justify-center bg-[#0c0c0c] border border-[#c0000a]/40 text-white hover:border-[#c0000a] hover:bg-[#c0000a] transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy("right")}
              aria-label="Next reviews"
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 items-center justify-center bg-[#0c0c0c] border border-[#c0000a]/40 text-white hover:border-[#c0000a] hover:bg-[#c0000a] transition-colors"
            >
              ›
            </button>

            <div
              ref={scrollerRef}
              className="flex overflow-x-auto gap-6 pb-2 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            >
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[calc((100%-3rem)/3)] bg-[#0c0c0c] border border-[#c0000a]/20 p-6 flex flex-col gap-4 hover:border-[#c0000a]/50 transition-colors duration-300"
                >
                  <Stars rating={r.rating} />

                  <p className="font-['DM_Sans'] text-gray-300 text-sm italic leading-relaxed flex-1 line-clamp-6">
                    {r.text}
                  </p>

                  <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.profile_photo_url}
                      alt={r.author_name}
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-['Bebas_Neue'] text-base text-white uppercase tracking-wide truncate">
                        {r.author_name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {r.relative_time_description}
                      </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden flex justify-center gap-3 mt-4">
              <button
                onClick={() => scrollBy("left")}
                disabled={index === 0}
                aria-label="Previous reviews"
                className="w-10 h-10 flex items-center justify-center bg-[#0c0c0c] border border-[#c0000a]/40 text-white hover:border-[#c0000a] transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                ‹
              </button>
              <button
                onClick={() => scrollBy("right")}
                disabled={index >= reviews.length - 1}
                aria-label="Next reviews"
                className="w-10 h-10 flex items-center justify-center bg-[#0c0c0c] border border-[#c0000a]/40 text-white hover:border-[#c0000a] transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                ›
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            Reviews unavailable.
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-[#c0000a] hover:bg-red-700 text-white font-black uppercase px-10 py-4 tracking-widest transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
