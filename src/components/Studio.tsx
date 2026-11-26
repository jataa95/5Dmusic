"use client";

import Image from "next/image";
import { useRef } from "react";
import { photos } from "@/content";
import Reveal from "./Reveal";

export default function Studio() {
  const track = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".frame-card");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 24), behavior: "smooth" });
  };

  return (
    <section className="studio section section--light" id="studio">
      <Reveal>
        <h2 className="display h2 center">Made in the room.</h2>
        <p className="lede center narrow">
          Acoustic panels, gold light and producers who care. This is where songs, images and careers get built.
        </p>
      </Reveal>
      <div className="studio__wrap">
        <button className="arrow arrow--left" onClick={() => move(-1)} aria-label="Previous photos">←</button>
        <div className="studio__track" ref={track} tabIndex={0} aria-label="Studio gallery">
          {photos.map((p) => (
            <figure className="frame-card" key={p.src}>
              <div className="frame-card__mat">
                <div className="frame-card__img">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 700px) 80vw, 340px" />
                </div>
              </div>
              <figcaption>
                <strong>{p.title}</strong>
                <span>{p.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <button className="arrow arrow--right" onClick={() => move(1)} aria-label="Next photos">→</button>
      </div>
    </section>
  );
}
