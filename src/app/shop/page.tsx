import type { Metadata } from "next";
import Link from "next/link";
import { Rack } from "@/components/shop/Rack";
import { ONE_OF_ONE_NOTE, products } from "@/data/products";
import "./shop.css";

export const metadata: Metadata = {
  title: "the shop",
  description: "striped attire by dylAn. discover the pieces and register unpaid preorder interest.", // src: /shop meta
  alternates: { canonical: "/shop" },
};

/** The rack: every category is its own stripe; the filter opens only the stripe you ask for. */
export default function ShopPage() {
  return (
    <div className="shop" data-chrome="paper">
      <header className="shop__head gutter">
        <p className="t-label">striped attire · the collection {String(products.length).padStart(2, "0")}</p>
        <h1 className="t-display shop__title">
          a little piece
          <br />
          of this world.
        </h1>
        <div className="shop__intro">
          <p className="t-line">made to be your own.</p>
          <p>browse the pieces. leave your name. no payment today.</p>
        </div>
      </header>

      <Rack />

      <section className="shop__foot gutter" aria-label="about these pieces">
        <p className="shop__note">{ONE_OF_ONE_NOTE}</p>
        <Link href="/#music" className="shop__beyond">
          <span className="t-label">beyond the clothes</span>
          <span className="shop__beyond-title">just between us.</span>
          <span>unreleased music by dylAn. just for the fans. ↗</span>
        </Link>
      </section>
    </div>
  );
}
