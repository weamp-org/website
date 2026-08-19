<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 site for WeAMP. App code lives under `src/app/`; `page.tsx` is currently a minimal placeholder.

## Commands

- Use **pnpm** (`pnpm@11.21.0` pinned in `package.json`, lockfile `pnpm-lock.yaml`). Do not use npm/yarn/bun.
- `pnpm dev` (dev server), `pnpm build`, `pnpm start`
- `pnpm lint` — eslint with flat config (`eslint.config.mjs`); no `lint:fix` script
- No test framework or test script is configured. Typecheck with `pnpm exec tsc --noEmit`.

## Framework and toolchain quirks

- Next 16 generates route types: `LayoutProps<"/route">` is a **globally available** helper (no import) for typing layouts with inferred `params`/slots — see `src/app/layout.tsx:20`.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`).
- Tailwind v4 is CSS-first config: there is no `tailwind.config.js`. Theme tokens are declared in `src/app/globals.css` via `@theme inline`; dark mode uses a `.dark` class variant (see `@custom-variant dark`), not `prefers-color-scheme`.
- shadcn/ui is set up: `components.json` (style `base-lyra`), components in `src/components/ui/`, and `cn()` helper in `src/lib/utils.ts` using `@base-ui/react` (not Radix).
- `pnpm-workspace.yaml` sets `allowBuilds: { sharp: false }`, so the `sharp` postinstall is skipped and `next/image` production optimization may fall back.
- Path alias `@/*` → `src/*` (tsconfig).
