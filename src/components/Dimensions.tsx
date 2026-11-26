"use client";

import Image from "next/image";
import { useState } from "react";
import { dimensions } from "@/content";
import Reveal from "./Reveal";

export default function Dimensions() {
  const [active, setActive] = useState(0);

  return (
    <section className="dims section section--light" id="dimensions">
      <Reveal className="dims__head">
        <h2 className="display h2">
          Five <em>dimensions</em>
        </h2>
        <p className="lede">
          The 5D in our name is what we build around every artist. Five sides of a career, worked on together.
        </p>
      </Reveal>

      <div className="dims__row">
        {dimensions.map((d, i) => {
          const on = i === active;
          return (
            <article
              key={d.n}
              className={`dim ${on ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
            >
              <Image src={d.img} alt={d.alt} fill sizes="(max-width: 700px) 100vw, 60vw" className="dim__img" />
              <button
                className="dim__hit"
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-expanded={on}
                aria-controls={`dim-${d.n}`}
              >
                <span className="dim__num">{d.n}</span>
                <span className="dim__vname">{d.name}</span>
              </button>
              <div className="dim__content" id={`dim-${d.n}`} aria-hidden={!on}>
                <span className="chip">{d.tag}</span>
                <h3 className="display">{d.name}</h3>
                <p>{d.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
