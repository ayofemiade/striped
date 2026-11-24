type Tone = "blue" | "cream" | "paper";

type Props = {
  no: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
  tone?: Tone;
  id?: string;
  /** chrome of the opened body, for the header tone */
  bodyChrome?: "blue" | "paper";
  bodyClassName?: string;
  children: React.ReactNode;
};

/**
 * A chapter = one stripe. The band is always readable; its body opens (motion 2) the first time
 * it comes into view. The band is a real h2, so the page outline reads chapter by chapter.
 */
export function Stripe({ no, title, aside, tone = "blue", id, bodyChrome = "paper", bodyClassName = "", children }: Props) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className="relative">
      <div className="stripe-band" data-tone={tone} data-chrome={tone === "blue" ? "blue" : "paper"}>
        <span className="no" aria-hidden>
          {no}
        </span>
        <h2 id={headingId} className="t-band">
          {title}
        </h2>
        {aside ? <p className="aside">{aside}</p> : null}
      </div>
      <div className={`stripe-open ${bodyClassName}`} data-chrome={bodyChrome}>
        {children}
      </div>
    </section>
  );
}
