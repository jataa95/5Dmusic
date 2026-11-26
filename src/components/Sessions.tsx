import Image from "next/image";
import { TIKTOK, photos } from "@/content";
import Reveal from "./Reveal";

function Row({ reverse }: { reverse?: boolean }) {
  const list = reverse ? [...photos].reverse() : photos;
  const doubled = [...list, ...list];
  return (
    <div className="thumbs" aria-hidden>
      <div className={`marquee ${reverse ? "marquee--reverse" : ""}`}>
        {doubled.map((p, i) => (
          <div className="thumb" key={i}>
            <Image src={p.src} alt="" fill sizes="140px" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Sessions() {
  return (
    <section className="sessions section section--light" id="sessions">
      <Row />
      <Reveal className="sessions__copy">
        <h2 className="display h2 center">Beyond the booth</h2>
        <p className="lede center narrow">
          Session nights bring upcoming artists, producers and the 5D team into one room for performances, talks
          and real feedback. We&apos;re growing fast, so we split the nights to make sure everybody gets room.
        </p>
        <a className="link-arrow" href={TIKTOK} target="_blank" rel="noreferrer">
          See the next session date <span aria-hidden>↗</span>
        </a>
      </Reveal>
      <Row reverse />
    </section>
  );
}
