import Link from "next/link";
import { Img } from "@/components/ui/Img";
import type { Product } from "@/data/products";
import "./product-card.css";

/**
 * Answers what · how much · what state, at a glance (Atticus lesson), in STRIPED's own words.
 * Pieces with no photograph show an honest "first look soon" stripe card, never a stand-in image.
 */
export function ProductCard({ product: p, sizes, eager }: { product: Product; sizes: string; eager?: boolean }) {
  return (
    <Link href={`/shop/${p.slug}`} className="pcard print-host" data-preview={p.preview || undefined}>
      <span className="pcard__media print">
        {p.card.name ? (
          <Img name={p.card.name} alt={p.card.alt} sizes={sizes} eager={eager} className="pcard__img" />
        ) : (
          <span className="pcard__soon" role="img" aria-label={`${p.name}: first look coming soon`}>
            <span className="pcard__soon-word">first look</span>
            <span className="pcard__soon-sub">coming soon.</span>
          </span>
        )}
        <span className="pcard__status t-label">{p.status}</span>
      </span>
      <span className="pcard__meta">
        <span className="pcard__name">{p.name}</span>
        <span className="pcard__price">{p.price}</span>
      </span>
      {p.priceNote ? <span className="pcard__note">{p.priceNote}</span> : null}
    </Link>
  );
}
