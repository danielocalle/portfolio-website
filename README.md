# Portfolio Website

Personal portfolio website built with Astro. This project is currently in early development and serves as the foundation for future sections, projects, and content.

## Tech Stack

- Astro 6
- React 19 (for interactive islands/components)
- Tailwind CSS 4
- Motion (React animation library)
- TypeScript

## Current State

- Single-page landing scaffold composed in `src/pages/index.astro`
- Sticky top navigation component at `src/components/NavBar.tsx`
- Hero/intro section with subtle Motion reveal at `src/components/HeroSection.tsx`
- Shared placeholder portfolio content centralized in `src/data/portfolio.ts`
- About/Work/Contact anchor targets are set up for upcoming section iterations
- Global Tailwind setup via `src/styles/global.css` with Astro + React integration in `astro.config.mjs`

## Requirements

- Node.js `>=22.12.0`
- npm

## Development

```bash
npm install
npm run dev
```

Local dev server runs at `http://localhost:4321`.

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview the production build locally
- `npm run check` - run Astro type/content checks
