import Image from "next/image";
import manifest from "@/data/image-manifest.json";

type Entry = { w: number; h: number; sizes: number[] };
const M = manifest as Record<string, Entry>;

export function imageSize(name: string) {
  const e = M[name];
  if (!e) throw new Error(`Unknown image "${name}". Run node scripts/optimize-images.mjs`);
  return e;
}

type Props = {
  name: string;
  alt: string;
  sizes: string;
  className?: string;
  eager?: boolean;
  high?: boolean;
  style?: React.CSSProperties;
};

/** next/image fed by the pre-built manifest: true width/height, so no layout shift. */
export function Img({ name, alt, sizes, className, eager, high, style }: Props) {
  const { w, h } = imageSize(name);
  return (
    <Image
      src={`/images/site/${name}.webp`}
      alt={alt}
      width={w}
      height={h}
      sizes={sizes}
      className={className}
      style={style}
      loading={eager || high ? "eager" : "lazy"}
      fetchPriority={high ? "high" : eager ? "low" : "auto"}
      decoding="async"
    />
  );
}
