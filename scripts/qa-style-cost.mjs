/**
 * QA: where does style/layout time go? Loads a page on a 4x-throttled phone profile and reports
 * Chrome's RecalcStyle/Layout durations, once as-is and once per CSS "suspect" switched off.
 *   node scripts/qa-style-cost.mjs http://localhost:3001/
 */
import { chromium } from "playwright-core";

const url = process.argv[2] ?? "http://localhost:3001/";
const suspects = {
  baseline: "",


  "no stripe panels": "html.js .stripe-open::before,html.js .stripe-open::after{display:none!important}",



};
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe" });
for (const [name, css] of Object.entries(suspects)) {
  const ctx = await b.newContext({ viewport: { width: 412, height: 823 }, deviceScaleFactor: 1.75, isMobile: true, hasTouch: true });
  const pg = await ctx.newPage();
  const cdp = await ctx.newCDPSession(pg);
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await cdp.send("Performance.enable");
  if (css) await pg.addInitScript((c) => {
    const s = document.createElement("style"); s.textContent = c;
    document.addEventListener("DOMContentLoaded", () => document.head.append(s));
  }, css);
  await pg.goto(url, { waitUntil: "load" });
  await pg.waitForTimeout(2500);
  const { metrics } = await cdp.send("Performance.getMetrics");
  const m = Object.fromEntries(metrics.map((x) => [x.name, x.value]));
  console.log(
    name.padEnd(22),
    "style",
    Math.round(m.RecalcStyleDuration * 1000) + "ms",
    "x" + m.RecalcStyleCount,
    " layout",
    Math.round(m.LayoutDuration * 1000) + "ms",
    "x" + m.LayoutCount,
    " script",
    Math.round(m.ScriptDuration * 1000) + "ms",
  );
  await ctx.close();
}
await b.close();
