import Link from "next/link";
import { Stripe } from "@/components/stripe/Stripe";
import { Img } from "@/components/ui/Img";
import { patchCopy as c } from "@/data/patches";
import { home } from "@/data/site";
import { PatchDraw } from "./PatchDraw";

/** 04 · A product truth you can touch: you really don't get to pick. All copy is STRIPED's poster. */
export function ChapterPatch() {
  return (
    <Stripe
      id="patches"
      no="04"
      title={home.ch4.title}
      aside={home.ch4.aside}
      tone="cream"
      bodyChrome="blue"
      bodyClassName="bg-blue text-paper"
    >
      <div className="patches gutter">
        <div className="patches__what">
          <p className="patches__what-line">
            <span className="t-label">what’s a mystery patch?</span>
            {home.ch4.what}
          </p>
          <ul className="patches__strip" aria-label="five of the real patches">
            {["royal-blue-denim", "forest-green-khaki", "magenta-denim", "teal-khaki", "white-denim"].map((id) => (
              <li key={id}>
                <Img name={`patch-${id}`} alt={`${id.replace(/-/g, " ").replace(/ (denim|khaki)$/, " · $1")} patch`} sizes="96px" />
              </li>
            ))}
          </ul>
        </div>
        <div className="patches__poster">
          <dl className="patches__facts">
            {c.facts.map(([k, v]) => (
              <div key={k}>
                <dt className="t-label">{k}:</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="patches__sub">{c.sub}</p>
        </div>

        <PatchDraw />

        <div className="patches__info">
          <p className="patches__intro">{c.intro}</p>
          <p className="patches__made">{c.made}</p>
          <p className="patches__price">{c.prices}</p>
          <p className="t-line patches__sign">{c.sign}</p>
          <p className="patches__fine">this draw is just for fun. the real one is decided before you are.</p>
          {/* pending: our line, explains the demo draw honestly */}
          <Link href="/#join" className="btn btn-on-blue">
            register interest <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </Stripe>
  );
}
