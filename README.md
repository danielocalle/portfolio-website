# Portfolio Website

Personal portfolio website built with Astro. This project is currently in early development and serves as the foundation for future sections, projects, and content.

## Tech Stack

- Astro 6
- React 19 (for interactive islands/components)
- Tailwind CSS 4
- Motion (React animation library)
- TypeScript

## Current State

- Single landing page at `src/pages/index.astro`
- Global Tailwind setup via `src/styles/global.css`
- One animated React component: `src/components/RotatingDot.tsx`
- Astro + React integration configured in `astro.config.mjs`

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
