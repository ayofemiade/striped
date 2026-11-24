/**
 * QA: the first frame must be complete without JavaScript, and nothing may stay hidden.
 *   node scripts/qa-nojs.mjs http://localhost:3001/ docs/striped/qa/home/nojs-1440.png
 */
import { chromium } from "playwright-core";

const [url = "http://localhost:3001/", out = "nojs.png"] = process.argv.slice(2);
const exe = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(
  (p) => {
    try {
      return !!(process.platform === "win32" && p);
    } catch {
      return false;
    }
  },
);
const b = await chromium.launch({ executablePath: exe });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
const pg = await ctx.newPage();
await pg.goto(url, { waitUntil: "load" });
await pg.screenshot({ path: out });
const hidden = await pg.evaluate(() => {
  // with JS off the html.js class never appears, so no stripe panel may exist
  const panels = [...document.querySelectorAll(".stripe-open")].filter((el) => getComputedStyle(el, "::before").content !== "none");
  return { jsClass: document.documentElement.classList.contains("js"), panels: panels.length, imgs: document.images.length };
});
console.log(JSON.stringify(hidden));
await b.close();
