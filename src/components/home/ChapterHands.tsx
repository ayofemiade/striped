import { Stripe } from "@/components/stripe/Stripe";
import { Img } from "@/components/ui/Img";
import { home } from "@/data/site";

/** 03 · Before → after: the process, only from STRIPED's own posts, and the LA makers credited. */
export function ChapterHands() {
  const c = home.ch3;
  return (
    <Stripe id="hands" no="03" title={c.title} aside={c.aside} tone="blue">
      <div className="hands gutter">
        <figure className="hands__before">
          <span className="hands__word t-display" aria-hidden>
            before
          </span>
          <Img
            name="before-after-sweaters-01"
            alt="An instant photo of striped sweaters hanging on a rack in a thrift shop, an orange one at the front."
            sizes="(max-width: 760px) 80vw, 34vw"
          />
          <figcaption>{c.before}</figcaption>
        </figure>
        <figure className="hands__after">
          <span className="hands__word t-display" aria-hidden>
            after
          </span>
          <Img
            name="before-after-sweaters-02"
            alt="An instant photo of the finished orange sweater with white stripes, laid flat on concrete."
            sizes="(max-width: 760px) 92vw, 44vw"
          />
          <figcaption>
            {c.after} <span className="t-label">· {c.afterBy}</span>
          </figcaption>
        </figure>
      </div>

      <div className="suit" data-chrome="paper">
        <div className="suit__copy gutter">
          <p className="t-label">1 of 1 · front &amp; back</p>
          <p className="suit__title">{c.suit}</p>
          <p className="t-line suit__quote">{c.suitAside}</p>
          {/* t-ui, not t-label: uppercase would break "dylAn" */}
          <p className="t-ui suit__by">@stripedattire · for “mr. boss man” dylAn</p>
        </div>
        <div className="suit__pair">
          <Img
            name="grey-sweatsuit-01"
            alt="A distressed heather grey hoodie and sweatpants laid flat on concrete, front, with a small patch on the chest."
            sizes="(max-width: 760px) 50vw, 30vw"
          />
          <Img
            name="grey-sweatsuit-02"
            alt="The same sweatsuit from the back, with a patch on the hoodie."
            sizes="(max-width: 760px) 50vw, 30vw"
          />
        </div>
      </div>

      <div className="makers gutter">
        <p className="t-label makers__head">made with</p>
        <ul className="makers__list">
          {c.makers.map((m) => (
            <li key={m.who}>
              <span className="t-label">{m.role}</span>
              <span className="makers__who">{m.who}</span>
              <span className="makers__where">{m.where}</span>
            </li>
          ))}
        </ul>
      </div>
    </Stripe>
  );
}
