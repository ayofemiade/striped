"use client";

import { useState } from "react";
import { Img } from "@/components/ui/Img";
import { draw, patches, type Patch } from "@/data/patches";

/** Ink colours read by eye from the real patch photos; only used for the little odds chart. */
const INK: Record<string, string> = {
  "forest green": "#2f6b3c",
  "cactus green": "#3e9a52",
  magenta: "#d4609e",
  pink: "#efa9c4",
  white: "#f4f0e6",
  purple: "#9d7ed6",
  "royal blue": "#2a63c7",
  teal: "#5ec2ae",
  "secret chase": "#151515",
};
const BASE = { denim: "#55729a", khaki: "#b9a179", "???": "#151515" } as const;

/** The 38 patches in the box, one square each, in poster order. */
const BOX = patches.flatMap((p) => Array.from({ length: p.count }, (_, i) => ({ p, key: `${p.id}-${i}` })));

/**
 * Motion 4: a card flips to reveal a patch drawn fairly from STRIPED's real box of 38.
 * A 1-of-38 patch comes up as rarely here as it does in the box.
 */
export function PatchDraw() {
  const [got, setGot] = useState<Patch | null>(null);
  const [n, setN] = useState(0);

  const pull = () => {
    setGot(draw());
    setN((x) => x + 1);
  };

  return (
    <div className="patch">
      <div className="patch__card-wrap">
        <div className="patch__card" data-flipped={got ? "true" : "false"} key={n}>
          <div className="patch__face patch__front" aria-hidden={!!got}>
            <span className="patch__q">???</span>
            <span className="t-label">one STRIPED™ mystery patch</span>
          </div>
          <div className="patch__face patch__back" aria-hidden={!got}>
            {got ? (
              <>
                <Img
                  name={`patch-${got.id}`}
                  alt={got.id === "secret-chase" ? "the secret chase card: ???" : `a ${got.colour} STRIPED tee patch on ${got.base}`}
                  sizes="240px"
                  className="patch__photo"
                />
                <span className="patch__name">
                  {got.colour}
                  {got.base !== "???" ? ` · ${got.base}` : ""}
                </span>
                <span className="patch__odds">{got.line}</span>
              </>
            ) : null}
          </div>
        </div>
        <button type="button" className="btn btn-on-blue patch__btn" onClick={pull}>
          {got ? "draw again" : "draw a patch"} <span aria-hidden>↺</span>
        </button>
        <p className="patch__live" aria-live="polite">
          {got ? `you got ${got.colour}${got.base !== "???" ? `, ${got.base}` : ""}. ${got.line}` : ""}
        </p>
      </div>

      <figure className="patch__box">
        <div className="patch__grid" role="img" aria-label="the box: 38 patches in 13 kinds. Royal blue denim is the most common, at 6 of 38; four kinds are 1 of 38.">
          {BOX.map(({ p, key }) => (
            <span
              key={key}
              className="patch__sq"
              data-hit={got?.id === p.id || undefined}
              style={{ "--base": BASE[p.base], "--ink": INK[p.colour] } as React.CSSProperties}
            />
          ))}
        </div>
        <figcaption className="t-label">38 in the box · 13 kinds · 7 secret chase</figcaption>
      </figure>
    </div>
  );
}
