import Image from "next/image";
import { voices } from "@/content";
import Reveal from "./Reveal";
import { PlayButton } from "./VideoModal";

export default function Voices() {
  return (
    <section className="voices section" id="voices">
      <Reveal>
        <h2 className="display h2 center">Voices from the room</h2>
        <p className="lede center narrow">
          Hear it from the people inside 5D: the intro, and artists at a session night.
        </p>
      </Reveal>
      <div className="voices__grid">
        {voices.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.1}>
            <article className="voice">
              <PlayButton clip={v} className="voice__media">
                <Image src={v.poster} alt="" fill sizes="(max-width: 800px) 90vw, 33vw" />
                <span className="best__play" aria-hidden>▶</span>
              </PlayButton>
              <span className="chip">{v.meta}</span>
              <h3>{v.title}</h3>
              <p>“{v.quote}”</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
