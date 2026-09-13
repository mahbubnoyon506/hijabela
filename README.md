# shadcn Theme Starter

A Next.js 16 app (App Router, TypeScript, Tailwind CSS v4) pre-wired with
[shadcn/ui](https://ui.shadcn.com) components and a working light/dark theme
toggle powered by [next-themes](https://github.com/pacocoursey/next-themes).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use the sun/moon button in the header to switch
between Light, Dark, and System.

## What's included

- **Theme tokens** — `src/app/globals.css` defines shadcn's full color
  palette twice: once under `:root` (light) and once under `.dark` (dark),
  using OKLCH colors. Tailwind reads these via `@theme inline`.
- **`ThemeProvider`** (`src/components/theme-provider.tsx`) — a thin client
  wrapper around `next-themes`, mounted in `src/app/layout.tsx` with
  `attribute="class"` so it toggles the `.dark` class on `<html>`.
- **`ThemeToggle`** (`src/components/theme-toggle.tsx`) — a dropdown button
  (Light / Dark / System) built from the shadcn `Button` and `DropdownMenu`
  components.
- **shadcn/ui components** — `Button`, `Card`, and `DropdownMenu` are already
  added under `src/components/ui/`, written in the standard shadcn source
  format so they behave like any other shadcn install.
- **`cn()` helper** — `src/lib/utils.ts`, combining `clsx` + `tailwind-merge`,
  used by every shadcn component for className composition.
- **`components.json`** — standard shadcn config (style: "new-york", base
  color: neutral), so the CLI works normally.

## Adding more shadcn components

This project wasn't scaffolded with `shadcn init` (that step was done by
hand here), but the config is in place, so from here on you can add any
other component the normal way:

```bash
npx shadcn@latest add input
npx shadcn@latest add dialog
```

## Notes

- Fonts use the system font stack (`--font-sans` / `--font-mono` in
  `globals.css`) rather than Google-hosted Geist, so the project builds with
  no external font fetch required. If you'd like Geist back, swap in
  `next/font/google` in `src/app/layout.tsx` as usual — that's the only
  change `create-next-app` would normally make for you.
- Tailwind CSS v4 is configured CSS-first (no `tailwind.config.ts`); all
  theme customization lives in `globals.css`.
