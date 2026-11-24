import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import { Img, imageSize } from "@/components/ui/Img";
import { JoinForm } from "@/components/ui/JoinForm";
import { HOW_IT_WORKS, INTEREST_NOTE, bySlug, products } from "@/data/products";
import "./product.css";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = bySlug((await params).slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.description,
    alternates: { canonical: `/shop/${p.slug}` },
    openGraph: p.card.name ? { images: [`/images/site/${p.card.name}-1200.webp`] } : undefined,
  };
}

/**
 * Instant navigation (Next 16): the shell renders before params resolve. The placeholder is a
 * stripe block where the photos will be, so even the loading state is STRIPED.
 */
export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<ProductShell />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

function ProductShell() {
  return (
    <div className="product" data-chrome="paper" aria-busy="true">
      <div className="product__main gutter" style={{ paddingTop: 70 }}>
        <div className="product__gallery">
          <div className="product__soon product__loading" aria-label="loading the piece" role="img" />
        </div>
      </div>
    </div>
  );
}

/** One of one: the piece first, every honest condition beside it, nothing invented. */
async function ProductContent({ params }: { params: Promise<{ slug: string }> }) {
  const p = bySlug((await params).slug);
  if (!p) notFound();
  const related = products.filter((x) => x.slug !== p.slug && x.card.name).slice(0, 4);

  return (
    <div className="product" data-chrome="paper">
      <nav className="product__crumbs gutter t-ui" aria-label="breadcrumb">
        <Link href="/shop">← all pieces</Link>
        <span aria-hidden>·</span>
        <span>{p.kind}</span>
      </nav>

      <div className="product__main gutter">
        <div className="product__gallery">
          {p.shots.length ? (
            p.shots.map((s, i) => {
              const small = imageSize(s.name).w < 800; // the 360px "-nov26" set: never stretched
              return (
                <figure key={s.name} className="product__shot" data-small={small || undefined} data-first={i === 0 || undefined}>
                  <Img
                    name={s.name}
                    alt={s.alt}
                    sizes={small ? "360px" : i === 0 ? "(max-width: 900px) 100vw, 56vw" : "(max-width: 900px) 100vw, 28vw"}
                    high={i === 0}
                  />
                  {p.preview && p.card.name ? <figcaption className="t-label">design mockup</figcaption> : null}
                </figure>
              );
            })
          ) : (
            <div className="product__soon" role="img" aria-label={`${p.name}: first look coming soon`}>
              <span className="product__soon-word">first look</span>
              <span className="product__soon-sub">coming soon.</span>
            </div>
          )}
        </div>

        <aside className="product__info" aria-labelledby="piece-name">
          <p className="t-label product__edition">{p.edition}</p>
          <h1 id="piece-name" className="product__name">
            {p.name}
          </h1>
          <p className="product__price">
            {p.price} USD{p.priceNote ? <span> · {p.priceNote}</span> : null}
          </p>
          <p className="product__desc">{p.description}</p>
          {p.note ? <p className="product__note">{p.note}</p> : null}

          <div className="product__form">
            <p className="product__interest">{INTEREST_NOTE}</p>
            <JoinForm piece={p.name} submitLabel="keep me posted">
              {p.colours ? (
                <fieldset className="product__prefs">
                  <legend className="t-label">colour preference</legend>
                  {p.colours.map((c, i) => (
                    <label key={c.label} className="chip">
                      <input type="radio" name="colour" value={c.label} defaultChecked={i === 0} />
                      <span>
                        {c.label}
                        {c.preview ? <em> · design preview</em> : null}
                      </span>
                    </label>
                  ))}
                </fieldset>
              ) : null}
              {p.styles ? (
                <fieldset className="product__prefs">
                  <legend className="t-label">style preference</legend>
                  {p.styles.map((c, i) => (
                    <label key={c.label} className="chip">
                      <input type="radio" name="style" value={c.label} defaultChecked={i === 0} />
                      <span>
                        {c.label}
                        {c.preview ? <em> · design preview</em> : null}
                      </span>
                    </label>
                  ))}
                </fieldset>
              ) : null}
              {p.sizes ? (
                <label className="product__size">
                  <span className="t-label">size preference (optional)</span>
                  <input name="size" placeholder="your usual size" maxLength={20} />
                </label>
              ) : null}
            </JoinForm>
          </div>

          <details className="product__more">
            <summary>the details</summary>
            <p>{p.details}</p>
          </details>
          <details className="product__more">
            <summary>how it works</summary>
            <p>{HOW_IT_WORKS}</p>
          </details>
        </aside>
      </div>

      <section className="product__related" aria-labelledby="more-title">
        <div className="stripe-band" data-tone="cream">
          <span className="no">↗</span>
          <h2 id="more-title" className="t-band">
            more from this world.
          </h2>
        </div>
        <ul className="product__related-grid gutter">
          {related.map((r) => (
            <li key={r.slug}>
              <ProductCard product={r} sizes="(max-width: 760px) 46vw, 22vw" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
