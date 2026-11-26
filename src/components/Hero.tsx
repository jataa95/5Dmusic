"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { photos, voices } from "@/content";
import { PlayButton } from "./VideoModal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const globeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 180]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.8]);
  const strip = [...photos, ...photos];

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div className="hero__globe" style={{ y: globeY, scale: globeScale }} aria-hidden>
        <Image src="/media/logo.png" alt="" width={640} height={640} preload />
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
