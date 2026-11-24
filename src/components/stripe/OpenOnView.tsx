"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Motion 2: every `.stripe-open` opens once, when its top clears 15% of the viewport.
 * One observer for the whole page; nothing reads layout on scroll.
 * Keyboard focus inside a closed stripe opens it at once.
 */
export function OpenOnView() {
  const pathname = usePathname();
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>(".stripe-open:not([data-open='true'])")];
    const open = (el: Element) => el.setAttribute("data-open", "true");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            open(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onFocus = (e: FocusEvent) => {
      const host = (e.target as Element | null)?.closest?.(".stripe-open");
      if (host) open(host);
    };
    document.addEventListener("focusin", onFocus);

    // Anchor jumps (/#join, /#music): chapters above the target use content-visibility, so the
    // first jump is computed from estimated heights. Re-aim as they render, until it settles.
    const timers: number[] = [];
    const settle = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      for (const t of [80, 350, 800, 1400]) {
        timers.push(
          window.setTimeout(() => {
            const top = target.getBoundingClientRect().top;
            const want = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
            if (Math.abs(top - want) > 4) target.scrollIntoView({ block: "start" });
          }, t),
        );
      }
    };
    settle();
    window.addEventListener("hashchange", settle);
    return () => {
      io.disconnect();
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("hashchange", settle);
      timers.forEach(clearTimeout);
    };
  }, [pathname]);
  return null;
}
