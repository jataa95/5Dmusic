import Reveal from "./Reveal";
import { bestOf } from "@/content";
import { PlayButton } from "./VideoModal";

export default function About() {
  const perf = bestOf.find((c) => c.id === "welcome")!;
  return (
    <section className="about section" id="about">
      <div className="about__media">
        <video src={perf.src} poster={perf.poster} autoPlay muted loop playsInline aria-hidden />
        <PlayButton clip={perf} className="about__play">
          <span className="play-dot" aria-hidden /> Play with sound
        </PlayButton>
      </div>
      <div className="about__copy">
        <Reveal>
          <p className="eyebrow">Who we are</p>
          <h2 className="display h2">
            Different styles.
            <br />
            Different dimensions.
            <br />
            <span className="accent">One family.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede">
            5D Music Group is a fast-rising community of artists, producers and creatives. We manage talent from the
            first idea to the release, and we do it together: no bad mind, no competition.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <blockquote className="pull">
            “Everybody is good, but in different styles, different dimensions. We are all one. No competition here.”
            <cite>Opening words, 5D session night</cite>
          </blockquote>
        </Reveal>
        <Reveal delay={0.3}>
          <ul className="pillars">
            <li><span>01</span>Branding</li>
            <li><span>02</span>Recording</li>
            <li><span>03</span>Artist Development</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
