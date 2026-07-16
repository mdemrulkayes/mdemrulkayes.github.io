# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio site (Emrul Kayes) built with React 19 + TypeScript + Vite, deployed to GitHub Pages. No backend, no routing, no state library — one page assembled from static sections fed by a single data file.

## Commands

```
npm run dev        # start Vite dev server
npm run build       # tsc -b (type-check via project references) + vite build -> dist/
npm run lint         # oxlint
npm run preview      # serve the built dist/ locally
```

There is no test suite configured in this repo. Linting is via `oxlint` (`.oxlintrc.json`), not ESLint. There's no separate typecheck script — type checking happens as part of `npm run build` (`tsc -b`).

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. There's no manual deploy step.

## Architecture

**Content is data-driven.** Every section's copy (about text, skills, experience, projects, Upwork reviews, education, open-source list, social links) lives in `src/data/profile.ts` as plain exported arrays/objects. Section components (`src/components/*.tsx`, e.g. `About.tsx`, `Experience.tsx`, `Projects.tsx`) just map over this data. When asked to update resume/bio content, edit `profile.ts`, not the components.

**Page shell (`App.tsx`)** composes a fixed list of section components in order inside `<main>`, alongside always-mounted chrome: `Nav`, `GlobalFX` (background), `ScrollIdentity` (docked identity card once hero scrolls away), `Footer`, `BackToTop`. Sections are plain components, not routed — the page is one continuous scroll, navigated via anchor links (`#about`, `#skills`, etc., matched against `id` attributes set in each `Section`).

**`Section.tsx` is the shared layout wrapper** every content section renders through: eyebrow label, title, gradient underline, and a `reveal` scroll-in animation via `useReveal`. New sections should use it rather than duplicating heading markup.

**3D background system (three.js via `@react-three/fiber`)** is layered and deliberately expensive-to-avoid:
- `GlobalFX.tsx` — one fixed, full-viewport canvas (`variant="planes"`, paper planes towing skill-name banners) that spans the whole page behind all content.
- `FXLayer.tsx` — per-section canvases, lazy-mounted only when the section is within `250px` of the viewport (`IntersectionObserver`), so off-screen sections cost nothing.
- `src/components/fx/SectionFX.tsx` — the actual scene library. Exports `FXVariant` (`network`, `torus`, `cubes`, `stream`, `terrain`, `orbit`, `bubbles`, `constellation`, `wave`, `planes`, `planeStream`) and a `scenes` map from variant name to a scene component. Each scene is a self-contained `useFrame` animation over raw `BufferGeometry`/`Points`/`Line` (no external 3D asset loading). Colors come from CSS custom properties read into JS (`useIsDark` watches the `dark` class via `MutationObserver`), so scenes automatically re-theme with light/dark mode.
- All 3D layers respect `prefers-reduced-motion: reduce` — they render `null` instead of mounting a canvas.
- Adding a new section-scoped effect means adding a scene function + variant name in `SectionFX.tsx`, then passing `fx="yourVariant"` to that section's `<Section>`.

**Theming** is CSS-custom-property-based, not a Tailwind `dark:` class per-utility scheme (though `dark:` is used for a few opacity tweaks). `src/index.css` defines semantic tokens (`--c-ink`, `--c-panel`, `--c-fg`, `--c-mut`, `--c-accent`, gradient stops `--g1/--g2/--g3`, etc.) once for `:root` (light) and again under `.dark`, then maps them into Tailwind's theme via `@theme inline` (e.g. `--color-ink: var(--c-ink)`) so utilities like `bg-ink`, `text-fg`, `text-mut`, `border-line`, `text-vio` work directly in JSX. Theme is toggled by adding/removing the `.dark` class on `<html>` (`ThemeToggle.tsx`) and persisted to `localStorage('theme')`; `index.html` has an inline pre-paint script that applies `.dark` before React mounts (avoids flash), defaulting to dark unless `'light'` was explicitly saved.

**Interaction primitives, reused across components:**
- `cardGlow` (from `hooks/usePointerGlow.ts`) — per-card mousemove handler writing local `--gx`/`--gy`, paired with the `.glow-card` CSS class for a cursor-following glow inside each card.
- `useReveal` — IntersectionObserver-based scroll-reveal; add the `reveal` class (and let the hook find it) rather than writing new observer logic.

## Conventions

- Path aliases: none — imports are relative (`../hooks/useReveal`, `../data/profile`).
- Styling is Tailwind v4 utility classes directly in JSX; semantic color tokens (`ink`, `panel`, `panel-2`, `line`, `fg`, `mut`, `faint`, `vio`) come from the theme mapping above — prefer them over raw Tailwind palette colors (`gray-500`, etc.) to stay theme-consistent.
- TypeScript is strict-ish: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` all on — unused code will fail `npm run build`.
