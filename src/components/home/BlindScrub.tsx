"use client";

import { useEffect } from "react";
import { makePut, pageTop, watchGeometry } from "@/lib/scroll-geometry";

/**
 * Writes the blind's progress --p (0 closed → 1 open) from cached geometry.
 * Never reads layout on scroll. Quantised to 0.005 so idle or tiny moves cost nothing.
 * Reduced motion: the blind rests half-open (CSS) and this does nothing.
 * `?p=0.42` freezes the frame for review screenshots.
 */
export function BlindScrub() {
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const frozen = new URLSearchParams(location.search).get("p");
    const put = makePut();
    const write = (p: number) => put("p", p.toFixed(3), (v) => hero.style.setProperty("--p", v));
    if (frozen !== null) {
      write(Math.min(1, Math.max(0, parseFloat(frozen) || 0)));
      return;
    }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let top = 0;
    let span = 1;
    const stop = watchGeometry(() => {
      top = pageTop(hero);
      span = Math.max(1, hero.offsetHeight - (hero.firstElementChild as HTMLElement).offsetHeight);
    });
    let raf = 0;
    const tick = () => {
      raf = 0;
      const p = Math.min(1, Math.max(0, (window.scrollY - top) / span));
      write(Math.round(p * 200) / 200);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      stop();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}
