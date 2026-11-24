/** STRIPED's own tee logo (a digitised embroidery file), recoloured by currentColor via a CSS mask. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        aspectRatio: "3593 / 3475",
        WebkitMask: "url(/brand/striped-logo.svg) center / contain no-repeat",
        mask: "url(/brand/striped-logo.svg) center / contain no-repeat",
      }}
    />
  );
}
