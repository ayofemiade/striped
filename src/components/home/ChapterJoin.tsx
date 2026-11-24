import { Stripe } from "@/components/stripe/Stripe";
import { Img } from "@/components/ui/Img";
import { JoinForm } from "@/components/ui/JoinForm";
import { home, site } from "@/data/site";

/** 07 · The invitation. Heads together in a circle: you're part of it. */
export function ChapterJoin() {
  const c = home.ch7;
  return (
    <Stripe id="join" no="07" title={c.title} aside={c.sub} tone="blue" bodyClassName="bg-cream">
      <div className="join">
        <figure className="join__photo">
          <Img
            name="polaroid-04"
            alt="A group lying in a circle on the floor with their heads together, all wearing striped tops."
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </figure>
        <div className="join__form gutter">
          <p className="t-line join__line">{c.music}</p>
          <JoinForm />
          <p className="join__ig">
            say hello on instagram.{" "}
            {site.instagram.map((i) => (
              <a key={i.handle} href={i.href} target="_blank" rel="noreferrer">
                {i.handle} <span aria-hidden>↗</span>
              </a>
            ))}
          </p>
        </div>
      </div>
    </Stripe>
  );
}
