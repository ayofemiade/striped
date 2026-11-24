/**
 * Scroll handlers never ask where an element is: after a scene writes styles, every such read
 * forces a synchronous layout. Measure here, in page coordinates, and work from cached numbers.
 */
export function watchGeometry(measure: () => void): () => void {
  let raf = 0;
  const schedule = () => {
    if (!raf)
      raf = requestAnimationFrame(() => {
        raf = 0;
        measure();
      });
  };
  measure();
  window.addEventListener("resize", schedule);
  const ro = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
  ro?.observe(document.body);
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", schedule);
    ro?.disconnect();
  };
}

export const pageTop = (el: Element) => el.getBoundingClientRect().top + window.scrollY;

/** Write a style only when its value changed, so idle frames cost nothing. */
export function makePut() {
  const last = new Map<string, string>();
  return (key: string, value: string, apply: (v: string) => void) => {
    if (last.get(key) === value) return;
    last.set(key, value);
    apply(value);
  };
}
