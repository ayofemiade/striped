import { Stripe } from "@/components/stripe/Stripe";
import { Img } from "@/components/ui/Img";
import { photo } from "@/data/archive";
import { home } from "@/data/site";

/** 06 · The people: seven photos from the striped.world album. One big print, four small, two wide. */
const PICKS = [20, 7, 12, 24, 29, 16, 3];

export function ChapterPeople() {
  return (
    <Stripe id="people" no="06" title={home.ch6.title} aside={home.ch6.aside} tone="cream">
      <div className="people gutter">
        <ul className="people__grid">
          {PICKS.map((n, i) => {
            const p = photo(n);
            return (
              <li key={p.name} className={`people__cell people__cell--${i + 1}`}>
                <Img name={p.name} alt={p.alt} sizes="(max-width: 760px) 46vw, 24vw" />
              </li>
            );
          })}
        </ul>
      </div>
    </Stripe>
  );
}
