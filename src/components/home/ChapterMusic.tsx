import Link from "next/link";
import { Player } from "@/components/music/Player";
import { Stripe } from "@/components/stripe/Stripe";
import { Img } from "@/components/ui/Img";
import { performances, unreleased, year } from "@/data/music";
import { home } from "@/data/site";

/** 05 · The music happens where the clothes live. Live sets filmed in clothing shops; unreleased titles stay locked (D4). */
export function ChapterMusic() {
  const c = home.ch5;
  const tracks = performances.map((p) => ({ id: p.id, title: p.title, meta: `${p.type} · ${year(p.date)}` }));
  return (
    <Stripe id="music" no="05" title={c.title} aside={c.aside} tone="blue" bodyChrome="blue" bodyClassName="bg-blue text-paper">
      <figure className="music__photo" data-chrome="blue">
        <Img
          name="polaroid-17"
          alt="A room full of people in striped shirts gathered around someone playing an electric guitar."
          sizes="100vw"
          className="music__img"
        />
        <figcaption className="music__over gutter">
          <span className="music__cap">{c.photoCaption}</span>
        </figcaption>
      </figure>

      <div className="music__body gutter">
        {/* the line lives on the blue, never across people's faces */}
        <p className="t-display music__line">{c.line}</p>
        <div className="music__live">
          <p className="music__sub">{c.sub}</p>
          <Player tracks={tracks} label="live in the shops" />
        </div>
        <aside className="music__locked" aria-labelledby="locked-title">
          <p className="t-label" id="locked-title">
            members only · unreleased
          </p>
          <ul>
            {unreleased.map((s) => (
              <li key={s.title}>
                <span className="music__lock" aria-hidden>
                  ◼
                </span>
                <span className="music__song">{s.title}</span>
                {s.note ? <span className="music__note">{s.note}</span> : null}
                <span className="sr-only">(locked)</span>
              </li>
            ))}
          </ul>
          <p className="music__join-line">{home.ch7.music}</p>
          <Link href="/#join" className="btn btn-on-blue">
            join to listen <span aria-hidden>↗</span>
          </Link>
        </aside>
      </div>
    </Stripe>
  );
}
