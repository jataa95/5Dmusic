"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MIN_MS = 1800;
const MAX_MS = 6000;

/**
 * Full-screen intro: the 5D globe, five equalizer bars (one per dimension),
 * the "On a 5D way" catchphrase and a load counter. Waits for the page and
 * the hero video, then wipes up in magenta to reveal the site.
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let ready = false;
    let raf = 0;

    const pageLoaded = new Promise<void>((r) =>
      document.readyState === "complete" ? r() : window.addEventListener("load", () => r(), { once: true }),
    );
    const heroVideo = new Promise<void>((r) => {
      const v = document.querySelector<HTMLVideoElement>(".hero__video");
      if (!v || v.readyState >= 3) return r();
      v.addEventListener("canplay", () => r(), { once: true });
      v.addEventListener("error", () => r(), { once: true });
    });
    const timeout = new Promise<void>((r) => setTimeout(r, MAX_MS));
    Promise.race([Promise.all([pageLoaded, heroVideo]), timeout]).then(() => (ready = true));

    document.documentElement.classList.add("is-loading");

    const tick = (now: number) => {
      const t = now - start;
      // ease toward 90 while waiting, then run to 100 once everything is ready
      const cap = ready && t >= (reduce ? 300 : MIN_MS) ? 100 : 90;
      setCount((c) => {
        const next = Math.min(cap, c + Math.max(0.4, (cap - c) * 0.06));
        return cap === 100 && next > 99.5 ? 100 : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  useEffect(() => {
    if (count < 100 || phase !== "loading") return;
    const a = setTimeout(() => {
      setPhase("leaving");
      document.documentElement.classList.remove("is-loading");
      window.dispatchEvent(new Event("5d:ready"));
    }, 250);
    return () => clearTimeout(a);
  }, [count, phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const b = setTimeout(() => setPhase("done"), 1100);
    return () => clearTimeout(b);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`preloader ${phase === "leaving" ? "is-leaving" : ""}`} role="status" aria-label="Loading 5D Music Group">
      <div className="preloader__wipe" aria-hidden />
      <div className="preloader__stage">
        <div className="preloader__logo">
          <span className="preloader__halo" aria-hidden />
          <Image src="/media/logo.png" alt="" width={220} height={220} preload />
        </div>
        <div className="preloader__eq" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} style={{ animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
        <p className="preloader__tag">On a 5D way</p>
      </div>
      <div className="preloader__foot" aria-hidden>
        <span>5D Music Group · Setting up the room</span>
        <span className="preloader__count">{String(Math.floor(count)).padStart(3, "0")}</span>
      </div>
    </div>
  );
}
