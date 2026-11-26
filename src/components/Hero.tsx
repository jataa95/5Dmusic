"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { bestOf, photos, voices } from "@/content";
import { PlayButton } from "./VideoModal";

const HERO = bestOf.find((c) => c.id === "performance")!;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const reelY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const strip = [...photos, ...photos];

  // Restart the clip from the top the moment the preloader lifts.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const start = () => {
      v.currentTime = 0;
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.play().catch(() => {});
    };
    window.addEventListener("5d:ready", start, { once: true });
    return () => window.removeEventListener("5d:ready", start);
  }, []);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__backdrop" aria-hidden>
        <Image src={HERO.poster} alt="" fill sizes="100vw" preload />
      </div>

      <motion.div className="hero__reel" style={{ y: reelY }}>
        <video
          ref={video}
          className="hero__video"
          src={HERO.src}
          poster={HERO.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="A singer performing live for the room at a 5D session"
        />
        <div className="hero__badge" aria-hidden>
          <svg viewBox="0 0 100 100">
            <defs>
              <path id="ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text>
              <textPath href="#ring" textLength="236" lengthAdjust="spacing">
                ON A 5D WAY · ON A 5D WAY ·
              </textPath>
            </text>
          </svg>
          <Image src="/media/logo.png" alt="" width={64} height={64} />
        </div>
        <PlayButton clip={HERO} className="hero__sound">
          <span className="play-dot" aria-hidden /> Live at 5D · Play with sound
        </PlayButton>
      </motion.div>

      <div className="hero__copy">
        <p className="eyebrow">Branding · Recording · Artist Development</p>
        <h1 className="display hero__title">
          Move your career
          <br />
          on a <em>5D</em> level
        </h1>
        <p className="hero__lede">
          A full-service music company focused on managing talent. We help upcoming artists, even the ones yet to
          record their first song, find their sound, their image and their people.
        </p>
        <div className="hero__ctas">
          <a href="#about" className="pill pill--solid">Discover 5D</a>
          <PlayButton clip={voices[0]} className="pill pill--ghost">
            <span className="play-dot" aria-hidden /> Watch the intro
          </PlayButton>
        </div>
      </div>

      <div className="hero__strip" aria-label="Studio photos">
        <div className="marquee marquee--slow">
          {strip.map((p, i) => (
            <figure className="strip-card" key={i} aria-hidden={i >= photos.length}>
              <figcaption>
                <span>{p.tag}</span>
                {p.title}
              </figcaption>
              <div className="strip-card__img">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 700px) 45vw, 260px" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
