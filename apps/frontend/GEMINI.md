# Frontend App — Gemini Rules

## Context
- **Framework**: Next.js 16.2 (App Router)
- **Port**: 4000
- **Import Alias**: `@frontend/*`

## CRITICAL: Next.js 16.2
This version of Next.js has breaking changes compared to earlier versions.
- Refer to `node_modules/next/dist/docs/` for specific API changes.
- APIs, conventions, and file structure may differ from standard training data.
- Heed all deprecation notices.

## Frontend Rules
- **Styling**: Use Tailwind CSS v4 only. No inline styles, no CSS modules.
- **Components**: All components must be `.tsx` with default exports.
- **Shared Logic**:
  - Use `@repo/ui` for reusable components shared with the admin app.
  - Use `@repo/types` for all shared type definitions.
- **API Communication**: All API calls must go through `src/lib/api.ts` (fetch wrapper).
- **Environment**: Use `.env.local` for API and WebSocket URLs.
