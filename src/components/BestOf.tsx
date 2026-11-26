"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { bestOf, type Clip } from "@/content";
import AutoVideo from "./AutoVideo";
import { PlayButton } from "./VideoModal";
import Reveal from "./Reveal";

const layout = [
  { col: "1 / span 5", speed: -60 },
  { col: "8 / span 4", speed: 90 },
  { col: "2 / span 4", speed: 30 },
  { col: "7 / span 5", speed: -40 },
  { col: "4 / span 5", speed: 60 },
];

function Tile({ clip, i }: { clip: Clip; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const s = reduce ? 0 : layout[i].speed;
  const y = useTransform(scrollYProgress, [0, 1], [s, -s]);
  return (
    <motion.div ref={ref} className="best__tile" style={{ gridColumn: layout[i].col, y }}>
      <PlayButton clip={clip} className="best__media">
        <AutoVideo src={clip.src} poster={clip.poster} />
        <span className="best__play" aria-hidden>▶</span>
      </PlayButton>
      <div className="best__cap">
        <h3>{clip.title}</h3>
        <span>{clip.meta}</span>
      </div>
    </motion.div>
  );
}

export default function BestOf() {
  return (
    <section className="best section section--wine" id="best">
      <Reveal>
        <h2 className="display best__title center">
          The Best <em className="serif">of</em> 5D
        </h2>
        <p className="lede center narrow">
          Moments from session nights, talks and performances. Tap any clip to watch it with sound.
        </p>
      </Reveal>
      <div className="best__grid">
        {bestOf.map((c, i) => (
          <Tile key={c.id} clip={c} i={i} />
        ))}
      </div>
    </section>
  );
}
