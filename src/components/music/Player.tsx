"use client";

import { useState } from "react";
import "./player.css";

export type Track = { id: string; title: string; meta: string };

/**
 * A setlist that plays in place. Nothing loads from YouTube until a track is chosen
 * (youtube-nocookie.com, so no tracking cookies before play). The poster is a stripe card.
 */
export function Player({ tracks, label }: { tracks: Track[]; label: string }) {
  const [current, setCurrent] = useState<Track | null>(null);
  const shown = current ?? tracks[0];
  return (
    <div className="player">
      <div className="player__screen">
        {current ? (
          <iframe
            key={current.id}
            src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0&modestbranding=1`}
            title={current.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="player__poster" onClick={() => setCurrent(shown)}>
            <span className="player__poster-title">{shown.title}</span>
            <span className="player__poster-meta">
              <span className="player__play" aria-hidden>
                ▶
              </span>
              play · {shown.meta}
            </span>
          </button>
        )}
      </div>
      <ol className="player__list" aria-label={label}>
        {tracks.map((t, i) => (
          <li key={t.id}>
            <button type="button" onClick={() => setCurrent(t)} aria-current={current?.id === t.id ? "true" : undefined}>
              <span className="player__no">{String(i + 1).padStart(2, "0")}</span>
              <span className="player__title">{t.title}</span>
              <span className="player__meta">{t.meta}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className="player__fine">plays from YouTube when you press play.</p>
    </div>
  );
}
