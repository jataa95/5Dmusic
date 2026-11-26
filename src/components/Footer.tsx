import Image from "next/image";
import { HANDLE, TIKTOK, nav } from "@/content";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <Image src="/media/control-room-2.webp" alt="" fill sizes="100vw" className="footer__bg" />
      <div className="footer__inner">
        <div className="footer__brand">
          <Image src="/media/logo.png" alt="5D Music Group logo" width={120} height={120} />
          <p className="footer__name">5D Music Group</p>
          <p>Follow the movement. New sessions, artists and drops land on our socials first.</p>
          <a className="pill pill--solid" href={TIKTOK} target="_blank" rel="noreferrer">
            Follow {HANDLE}
          </a>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <a href="#top">Home</a>
          {nav.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#join">Join</a>
          <a href={TIKTOK} target="_blank" rel="noreferrer">TikTok</a>
        </nav>
      </div>
      <p className="footer__legal">
        © 2026 5D Music Group · Branding · Recording · Artist Development
      </p>
    </footer>
  );
}
