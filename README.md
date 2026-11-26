# 5D Music Group

Official website for **5D Music Group**, a full-service music company focused on managing talent:
Branding, Recording and Artist Development. "Move your career faster on a 5D level."

Built with Next.js 16 (App Router), React 19 and [Motion](https://motion.dev) for scroll animation.
The palette is sampled from the 5D globe logo: magenta `#F5007A`, pink `#FF4FA8`, crimson `#C8005A`,
wine `#80002E`, on black `#050003`, with a blush tint `#FFF0F6` for light sections.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/content.ts`: all copy, photo, video and process-step data. Edit text here.
- `src/components/`: one component per page section (Hero, About, Studio, Sessions, BestOf, Arc, Cta, Voices, Footer) plus the video modal.
- `src/app/globals.css`: design tokens (`:root`) and all styles.
- `public/media/`: studio photos, trimmed session videos (TikTok end cards removed) and the logo cut-out.

## Deploy

Static by default; import the repo into Vercel and deploy with no extra config.
