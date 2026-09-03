# Zyphiq Tech — Agency Landing Page

A single-page site for the Zyphiq Tech digital agency, styled after the RedDevs
template in a warm grey + muted tan palette.

Built with **React 19 + Vite + Tailwind CSS v4**.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run lint     # oxlint
npm run build    # production build in dist/
```

## Structure

- `src/components/` — one component per page section (Hero, Services, Work, Process, Stats, Testimonials, FAQ, Blog, CtaBanner, Footer) plus shared pieces (Button, Logo, Reveal, SectionHeading, ProjectMarquee)
- `src/data/projects.js` — the portfolio project list, shared by the Work grid and the hero marquee
- `src/assets/covers/` — 1600×900 project cover images
- `src/index.css` — Tailwind theme tokens (brand tan scale, espresso, fonts, marquee/reveal animations)

## Notes

- Copy, testimonials, FAQ answers, blog posts and stats are placeholder content.
- The dev server watches with polling (`vite.config.js`) because the project
  lives on an exFAT volume where native file events are unreliable.
