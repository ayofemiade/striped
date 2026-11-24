"use client";

import { useId, useState } from "react";
import "./join-form.css";

type Props = {
  /** e.g. "the blue dyLAn hat": switches the consent line to STRIPED's product wording */
  piece?: string;
  submitLabel?: string;
  children?: React.ReactNode; // preference fields (product page)
};

/**
 * DEMO ONLY (decision D7). Validates like the real striped.world form, then shows a success state
 * that says plainly nothing was sent. It never posts to STRIPED's live endpoint.
 * Written like a letter: ruled lines, the visitor's words in the display face.
 */
export function JoinForm({ piece, submitLabel = "join the list", children }: Props) {
  const id = useId();
  const [state, setState] = useState<"idle" | "done">("idle");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const n = String(f.get("name") || "").trim();
    const em = String(f.get("email") || "").trim();
    const ph = String(f.get("phone") || "").trim();
    // same rules as striped.world/assets/app.js
    if (!n || n.length > 80 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      setError("add your name and a valid email, then try again.");
      return;
    }
    if (ph && (!/^[+()0-9 .-]{7,32}$/.test(ph) || ph.replace(/\D/g, "").length < 7)) {
      setError("add a valid phone number, or leave it blank.");
      return;
    }
    setError("");
    setName(n);
    setState("done");
  };

  if (state === "done") {
    return (
      <div className="jform jform--done" role="status">
        <p className="jform__done-title">you’re in, {name}.</p>
        <p className="jform__done-sub">
          {piece ? `we’d follow up about ${piece} when it’s ready.` : "new pieces. little updates. straight to you."}
        </p>
        <p className="jform__demo">demo · nothing was sent. this is a concept for STRIPED, not the live list.</p>
        <button type="button" className="jform__reset" onClick={() => setState("idle")}>
          start again
        </button>
      </div>
    );
  }

  return (
    <form className="jform" onSubmit={onSubmit} noValidate aria-describedby={`${id}-demo`}>
      {children}
      <label className="jform__row">
        <span className="t-label">name</span>
        <input name="name" autoComplete="name" required maxLength={80} />
      </label>
      <label className="jform__row">
        <span className="t-label">email</span>
        <input name="email" type="email" autoComplete="email" required maxLength={254} />
      </label>
      <label className="jform__row">
        <span className="t-label">
          phone <em>(optional)</em>
        </span>
        <input name="phone" type="tel" autoComplete="tel" maxLength={32} />
      </label>
      <label className="jform__check">
        <input type="checkbox" name="consent" defaultChecked />
        <span>
          {piece ? "email me about this piece and striped attire." : "email me about striped attire."} unsubscribe anytime.
        </span>
      </label>
      {error ? (
        <p className="jform__error" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn btn-join jform__submit">
        {submitLabel} <span aria-hidden>↗</span>
      </button>
      <p className="jform__demo" id={`${id}-demo`}>
        demo form · nothing is sent from this concept.
      </p>
    </form>
  );
}
