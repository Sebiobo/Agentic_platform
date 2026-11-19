# BuildAI frontend

React + TypeScript + Vite single-page app for the multi-agent application generator.

## Scripts

| Command             | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Dev server on http://localhost:5173   |
| `npm run build`     | Type-check and production build       |
| `npm run lint`      | Oxlint                                |
| `npm run typecheck` | TypeScript only                       |
| `npm run check`     | Type-check and lint                   |

The dev server proxies `/api` to `http://localhost:8000` (see `vite.config.ts`).

## Structure

```
src/
  styles/        global design tokens, reset and base styles
  lib/           shared infrastructure (API client, token storage)
  components/
    ui/          generic building blocks (Button, ButtonLink, icons)
    layout/      app shell pieces (Sidebar)
  features/
    auth/        session, API calls, protected routes, auth forms
    chat/        prompt box (conversations will live here)
  pages/         route-level components that compose features
```

Dependencies point one way: `pages` -> `features` -> `components` and `lib`.
`lib` and `components` never import from `features`.

## Styling

- Global styles live only in `src/styles`. Every value (color, spacing, motion) is a CSS variable from `tokens.css`.
- Every component and page has its own `*.module.css`. Class names are scoped automatically, so pages cannot affect each other.

## Known limitations

- The access token is kept in `localStorage`, which is readable by any script running on the page (XSS). A refresh-token flow with an `HttpOnly` cookie is planned.
