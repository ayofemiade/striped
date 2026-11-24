"use client";

import { useState } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import { KINDS, products, type Kind } from "@/data/products";

/** Each row ends with how that category is made, from STRIPED's own words. */
const ROWS: { kind: Kind; title: string; made: string }[] = [
  { kind: "hats", title: "hats.", made: "embroidered by Nela Prints in Highland Park." }, // src: @stripedattire, 21 Nov 2026
  { kind: "tees", title: "tees.", made: "every pocket cut from real jeans. 1 of 1, no two alike." }, // src: the Butt Buddy tee
  { kind: "hoodies", title: "hoodies.", made: "hand-distressed. hand-finished. heavyweight Grounded blanks." }, // src: the striped distressed hoodie
];

/**
 * The filter is the stripes themselves: choosing "hats" leaves the hats stripe open and folds the rest.
 * All rows are server-rendered, so with no JS every piece is listed.
 */
export function Rack() {
  const [kind, setKind] = useState<"all" | Kind>("all");
  const count = (k: "all" | Kind) => (k === "all" ? products.length : products.filter((p) => p.kind === k).length);
  return (
    <>
      <div className="rack__filter gutter" role="group" aria-label="filter the pieces">
        {KINDS.map((k) => (
          <button key={k.id} type="button" aria-pressed={kind === k.id} onClick={() => setKind(k.id)} className="rack__chip">
            {k.label}
            <sup>{count(k.id)}</sup>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        showing {count(kind)} pieces{kind === "all" ? "" : `: ${kind}`}
      </p>
      {ROWS.map((row, i) => {
        const items = products.filter((p) => p.kind === row.kind);
        const shown = kind === "all" || kind === row.kind;
        return (
          <section key={row.kind} className="rack__row" data-shown={shown} aria-labelledby={`row-${row.kind}`} hidden={!shown}>
            <div className="stripe-band" data-tone={i % 2 ? "cream" : "blue"}>
              <span className="no">{String(i + 1).padStart(2, "0")}</span>
              <h2 id={`row-${row.kind}`} className="t-band">
                {row.title}
              </h2>
              <p className="aside">{items.length} pieces</p>
            </div>
            <ul className="rack__grid gutter">
              {items.map((p) => (
                <li key={p.slug}>
                  <ProductCard product={p} sizes="(max-width: 760px) 46vw, (max-width: 1100px) 31vw, 24vw" />
                </li>
              ))}
              <li className="rack__made">
                <span className="t-label">how they’re made</span>
                <p className="t-line">{row.made}</p>
              </li>
            </ul>
          </section>
        );
      })}
    </>
  );
}
