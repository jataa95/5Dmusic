"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { Clip } from "@/content";

const Ctx = createContext<(clip: Clip) => void>(() => {});

export const usePlayClip = () => useContext(Ctx);

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [clip, setClip] = useState<Clip | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const play = useCallback((c: Clip) => setClip(c), []);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (clip && !d.open) d.showModal();
    if (!clip && d.open) d.close();
  }, [clip]);

  return (
    <Ctx.Provider value={play}>
      {children}
      <dialog
        ref={dialog}
        className="modal"
        onClose={() => setClip(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setClip(null);
        }}
      >
        {clip && (
          <div className="modal__body">
            <video key={clip.id} src={clip.src} poster={clip.poster} controls autoPlay playsInline />
            <div className="modal__meta">
              <span className="chip">{clip.meta}</span>
              <p>{clip.title}</p>
            </div>
            <button className="modal__close" onClick={() => setClip(null)} aria-label="Close video">
              Close
            </button>
          </div>
        )}
      </dialog>
    </Ctx.Provider>
  );
}

export function PlayButton({ clip, className, children }: { clip: Clip; className?: string; children: React.ReactNode }) {
  const play = usePlayClip();
  return (
    <button className={className} onClick={() => play(clip)} aria-label={`Play: ${clip.title}`}>
      {children}
    </button>
  );
}
