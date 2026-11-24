import { Img } from "@/components/ui/Img";
import { home, site } from "@/data/site";
import { BlindScrub } from "./BlindScrub";
import "./hero.css";

const BANDS = 14;

/**
 * Motion 1, the blind. A blue blind of stripes covers a lawn full of people in stripes; scrolling
 * opens the slats. The STRIPED wordmark is woven into the blind: it exists only inside the blue
 * bands (a CSS mask sized to the same rows), so as the bands thin, the word thins with them.
 *
 * The server-rendered first frame IS frame 0 (--p: 0), so it is complete without JavaScript.
 * BlindScrub only writes --p from cached geometry.
 */
export function HeroBlind() {
  return (
    <section id="hero" className="hero" aria-label="STRIPED" data-chrome="blue" style={{ "--p": 0 } as React.CSSProperties}>
      <div className="hero__stage">
        <Img
          name="polaroid-10"
          alt="A crowd of people standing together on a sunny lawn, almost all of them in striped shirts."
          sizes="100vw"
          high
          className="hero__photo"
        />
        <div className="hero__blind" aria-hidden>
          {Array.from({ length: BANDS }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <p className="hero__line t-line">{site.tagline}</p>
        <p className="hero__trio t-ui">
          {site.trio.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </p>
        <h1 className="hero__word" aria-label="STRIPED">
          <span aria-hidden className="hero__word-desk">STRIPED</span>
          <span aria-hidden className="hero__word-phone">
            STRI
            <br />
            PED
          </span>
        </h1>
        <p className="hero__cue t-label" aria-hidden>
          scroll · open the stripes
        </p>
        <p className="hero__cap">
          <span className="t-label">{home.heroCaption.label}</span>
          <span>{home.heroCaption.text}</span>
        </p>
      </div>
      <BlindScrub />
    </section>
  );
}
