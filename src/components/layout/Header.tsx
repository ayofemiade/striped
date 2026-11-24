"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { JOIN_HREF, nav } from "@/data/site";
import { Logo } from "./Logo";
import "./header.css";

/**
 * Tone follows whatever sits under the header: sections marked data-chrome="blue" (the blind,
 * blue bands, full-bleed photos) turn it paper-on-blue; everything else is blue-on-paper.
 * An IntersectionObserver watches a 1px line at the header's foot, so scroll never reads layout.
 */
export function Header() {
  const pathname = usePathname();
  // The homepage opens on the blue blind: start blue on the server too, so there is no flash.
  const [tone, setTone] = useState<"blue" | "paper">(pathname === "/" ? "blue" : "paper");
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const menuBtn = useRef<HTMLButtonElement>(null);

  // New route: close the menu and reset the tone during render (no effect, no cascade).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setTone(pathname === "/" ? "blue" : "paper");
  }

  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>("[data-chrome]")];
    if (!els.length) return;
    const under = new Set<Element>();
    const h = 72;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) under.add(e.target);
          else under.delete(e.target);
        }
        const blue = [...under].some((el) => (el as HTMLElement).dataset.chrome === "blue");
        setTone(blue ? "blue" : "paper");
      },
      { rootMargin: `-${h - 1}px 0px -${Math.max(0, window.innerHeight - h)}px 0px` },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <HeaderView tone={tone} open={open} pathname={pathname} menuRef={menuBtn} onToggle={() => setOpen((o) => !o)} />
  );
}

/**
 * Presentational header, no hooks. The layout also renders it as the Suspense fallback
 * (static, paper tone), so the first frame always has a complete header.
 */
export function HeaderView({
  tone,
  open = false,
  pathname = "",
  menuRef,
  onToggle,
}: {
  tone: "blue" | "paper";
  open?: boolean;
  pathname?: string;
  menuRef?: React.Ref<HTMLButtonElement>;
  onToggle?: () => void;
}) {
  const t = open ? "blue" : tone;
  return (
    <header className="site-header" data-tone={t} data-open={open}>
      <div className="site-header__bar gutter">
        <Link href="/" className="site-header__logo" aria-label="STRIPED, home">
          <Logo className="h-[46px] md:h-[50px]" />
        </Link>
        <nav aria-label="main" className="site-header__nav">
          {nav.map((n) =>
            n.soon ? (
              <span key={n.href} className="is-soon" aria-disabled="true" title="coming soon">
                {n.label}
                <sup>soon</sup>
              </span>
            ) : (
              <Link key={n.href} href={n.href} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <div className="site-header__actions">
          <Link href={JOIN_HREF} className={`btn ${t === "blue" ? "btn-on-blue" : "btn-join"} site-header__join`}>
            join <span aria-hidden>↗</span>
          </Link>
          <button
            ref={menuRef}
            type="button"
            className="site-header__menu"
            aria-expanded={open}
            aria-controls="menu-panel"
            onClick={onToggle}
          >
            <span className="sr-only">{open ? "close menu" : "open menu"}</span>
            <span aria-hidden className="site-header__burger" />
          </button>
        </div>
      </div>
      <div id="menu-panel" className="site-header__panel" hidden={!open}>
        <nav aria-label="menu" className="gutter">
          {[{ href: "/", label: "home" }, ...nav, { href: JOIN_HREF, label: "join the world" }].map((n, i) =>
            "soon" in n && n.soon ? (
              <span
                key={n.href}
                className="site-header__panel-link is-soon"
                aria-disabled="true"
                style={{ "--i": i } as React.CSSProperties}
              >
                <span className="no">{String(i).padStart(2, "0")}</span>
                {n.label}
                <sup>soon</sup>
              </span>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                onClick={onToggle}
                className="site-header__panel-link"
                style={{ "--i": i } as React.CSSProperties}
              >
                <span className="no">{String(i).padStart(2, "0")}</span>
                {n.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
