"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef, useState } from "react";
import { steps } from "@/content";

const IMG = "/media/control-room.webp";

function Tile({ i, p }: { i: number; p: MotionValue<number> }) {
  const start = 0.04 + i * 0.12;
  const opacity = useTransform(p, [start, start + 0.08], [0, 1]);
  const y = useTransform(p, [start, start + 0.1], [60, 0]);
  return (
    <motion.div className="arc__tile" style={{ opacity, y, ["--i" as string]: i }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={IMG} alt="" />
      <span className="arc__label">
        {steps[i].n} · {steps[i].name}
      </span>
    </motion.div>
  );
}

export default function Arc() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useTransform(scrollYProgress, (v) => (reduce ? 1 : v));
  const gap = useTransform(p, [0.7, 0.88], [12, 0]);
  const radius = useTransform(p, [0.7, 0.88], [10, 0]);
  const labels = useTransform(p, [0.8, 0.9], [1, 0]);
  const [active, setActive] = useState(0);

  useMotionValueEvent(p, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor((v - 0.04) / 0.12))));
  });

  return (
    <section className="arc section--light" id="process" ref={ref}>
      <div className="arc__sticky">
        <h2 className="display h2 center">The arc of an artist</h2>
        <motion.div
          className="arc__grid"
          style={{ ["--gap" as string]: gap, ["--r" as string]: radius, ["--labels" as string]: labels }}
        >
          {steps.map((s, i) => (
            <Tile key={s.n} i={i} p={p} />
          ))}
        </motion.div>
        <div className="arc__caption" aria-live="polite">
          <p className="arc__step">
            <span>{steps[active].n}</span> {steps[active].name}
          </p>
          <p>{steps[active].body}</p>
          <p className="muted">Every phase is a creative act. And we guide it all.</p>
        </div>
      </div>
    </section>
  );
}
