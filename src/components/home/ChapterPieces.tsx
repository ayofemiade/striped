import Link from "next/link";
import { Stripe } from "@/components/stripe/Stripe";
import { ProductCard } from "@/components/shop/ProductCard";
import { ONE_OF_ONE_NOTE, bySlug, products } from "@/data/products";
import { home } from "@/data/site";

const FEATURED = ["blue-hat", "butt-buddy-tee", "striped-distressed-hoodie", "striped-tee"];

/** 02 · The rail: the real pieces hang from one blue line; the rest are named, never hidden. */
export function ChapterPieces() {
  const featured = FEATURED.map((s) => bySlug(s)!);
  const rest = products.filter((p) => !FEATURED.includes(p.slug));
  return (
    <Stripe id="pieces" no="02" title={home.ch2.title} aside={home.ch2.aside} tone="cream" bodyClassName="bg-cream">
      <div className="pieces gutter">
        <div className="pieces__rail" aria-hidden />
        <ul className="pieces__row" aria-label="featured pieces">
          {featured.map((p, i) => (
            <li key={p.slug} className="pieces__item" style={{ "--i": i } as React.CSSProperties}>
              <span className="pieces__hook" aria-hidden />
              <ProductCard product={p} sizes="(max-width: 760px) 70vw, 20vw" />
            </li>
          ))}
          <li className="pieces__item pieces__more" style={{ "--i": 4 } as React.CSSProperties}>
            <Link href="/shop" className="pieces__more-card print-host">
              <span className="print pieces__more-inner">
                <span className="t-label">+ {rest.length} more on the rack</span>
                <span className="pieces__more-list">
                  {rest.map((p) => (
                    <span key={p.slug}>{p.name}</span>
                  ))}
                </span>
                <span className="pieces__more-cta">
                  {home.ch2.cta} <span aria-hidden>↗</span>
                </span>
              </span>
            </Link>
          </li>
        </ul>
        <p className="pieces__note">{ONE_OF_ONE_NOTE}</p>
      </div>
    </Stripe>
  );
}
