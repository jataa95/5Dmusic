import Image from "next/image";
import { TIKTOK } from "@/content";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="cta" id="join">
      <Image src="/media/lounge-wide.webp" alt="" fill sizes="100vw" className="cta__bg" />
      <Reveal className="cta__copy">
        <h2 className="display h1">
          Because your sound
          <br />
          is personal
        </h2>
        <p>
          If something inside you says, “this could be a song,” it&apos;s time to start. Whether you&apos;ve never
          recorded or you have a full project waiting, we&apos;d love to hear from you.
        </p>
        <a className="pill pill--solid" href={TIKTOK} target="_blank" rel="noreferrer">
          Message us on TikTok
        </a>
      </Reveal>
    </section>
  );
}
