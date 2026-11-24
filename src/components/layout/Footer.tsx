import Link from "next/link";
import { JOIN_HREF, careLabel, nav, site } from "@/data/site";
import { Logo } from "./Logo";

/** The footer is a garment care label: STRIPED already labels its patches with "Patch Facts". */
export function Footer() {
  return (
    <footer className="bg-deep text-paper" data-chrome="blue">
      <div className="gutter grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Logo className="h-16 text-paper" />
          <p className="t-line mt-8 max-w-[14ch]">{site.tagline}</p>
          <p className="t-ui mt-6 text-sky">{site.trio.join(" ")}</p>
        </div>

        <div className="md:col-span-4 md:col-start-7 self-start border-2 border-paper/80 px-5 py-4">
          <p className="t-ui mb-1 border-b-2 border-paper/80 pb-3 font-extrabold">STRIPED™ · {site.by}</p>
          <dl aria-label="care label">
            {careLabel.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-paper/40 py-2 last:border-0">
                <dt className="t-ui">{k}</dt>
                <dd className="text-right italic">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <nav aria-label="footer" className="t-ui flex flex-col gap-3 md:col-span-2 md:col-start-11">
          {[...nav, { href: JOIN_HREF, label: "join" }].map((n) =>
            "soon" in n && n.soon ? (
              <span key={n.href} aria-disabled="true" className="opacity-70">
                {n.label} <sup>soon</sup>
              </span>
            ) : (
              <Link key={n.href} href={n.href} className="hover:underline underline-offset-4">
                {n.label}
              </Link>
            ),
          )}
          <span className="mt-3 flex flex-col gap-3">
            {site.instagram.map((i) => (
              <a key={i.handle} href={i.href} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                {i.handle} <span aria-hidden>↗</span>
              </a>
            ))}
          </span>
        </nav>
      </div>
      <div className="gutter flex flex-wrap justify-between gap-4 border-t border-paper/25 py-5 t-ui text-sky">
        <span>striped.world · {site.by}</span>
        <span>{site.demo}</span>
      </div>
    </footer>
  );
}
