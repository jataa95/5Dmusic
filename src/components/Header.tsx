"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HANDLE, TIKTOK, nav } from "@/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const left = nav.slice(0, 2);
  const right = nav.slice(2);

  return (
    <>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="header__side" aria-label="Primary">
          {left.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="#top" className="wordmark" aria-label="5D Music Group home">
          <Image src="/media/logo.png" alt="" width={34} height={34} />
          <span>5D Music Group</span>
        </a>
        <nav className="header__side header__side--right" aria-label="Secondary">
          {right.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="pill pill--solid" href={TIKTOK} target="_blank" rel="noreferrer">
            Join 5D
          </a>
        </nav>
        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav>
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Contact</a>
        </nav>
        <a className="pill pill--solid" href={TIKTOK} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
          Follow {HANDLE}
        </a>
      </div>
    </>
  );
}
