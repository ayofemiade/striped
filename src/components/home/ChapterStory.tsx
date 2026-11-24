import { Stripe } from "@/components/stripe/Stripe";
import { Img } from "@/components/ui/Img";
import { home, site } from "@/data/site";

/** 01 · The brand in its own words, beside the launch collage (credited). */
export function ChapterStory() {
  const c = home.ch1;
  return (
    <Stripe id="story" no="01" title={c.title} aside={c.aside} tone="blue">
      <div className="story gutter">
        <div className="story__words">
          <p className="t-statement">
            {c.statement[0]}
            <em>{c.statement[1]}</em>
            {c.statement[2]}
          </p>
          <p className="t-line story__sub">{c.sub}</p>
          <ul className="story__facts t-label">
            {c.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <blockquote className="story__bio">
            <p>“{site.bio}”</p>
            <footer className="t-label">@stripedattire</footer>
          </blockquote>
        </div>
        <figure className="story__collage">
          <Img
            name="collage-05-01"
            alt="A torn-paper collage: friends in striped tees standing on a lawn, and a large group photo of everyone in stripes."
            sizes="(max-width: 760px) 92vw, 40vw"
          />
          <figcaption className="t-label">{c.collageCredit}</figcaption>
        </figure>
      </div>
    </Stripe>
  );
}
