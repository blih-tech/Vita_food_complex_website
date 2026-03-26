# Vita Food Complex — Monorepo Rulebook

## Apps
| App | Location | Framework | Port |
|-----|----------|-----------|------|
| Public website | `apps/frontend` | Next.js 16.2 | 4000 |
| Admin dashboard | `apps/admin` | Next.js 16.2 | 4001 |
| REST API + WebSockets | `apps/backend` | NestJS | 4002 |

## Shared packages
| Package | Usage |
|---------|-------|
| `@repo/ui` | Shared React components (frontend + admin only) |
| `@repo/types` | Shared TypeScript interfaces (all 3 apps) |
| `@repo/eslint-config` | Shared ESLint config |
| `@repo/typescript-config` | Shared tsconfig |

## Stack
- **Frontend / Admin**: Next.js 16.2, App Router, Turbopack, React Compiler, Tailwind CSS v4
- **Backend**: NestJS 11, REST API + WebSockets (socket.io), MongoDB via Mongoose
- **Language**: TypeScript strict across all apps
- **Package manager**: pnpm workspaces + Turborepo

## Frontend / Admin rules (Next.js)
- Tailwind only — no inline styles, no CSS modules
- All components `.tsx` with default export
- Use `@repo/ui` for any reusable component shared between apps
- Use `@repo/types` for all shared type definitions
- API calls go through `src/lib/api.ts` (fetch wrapper)
- Import alias: `@frontend/*` (frontend), `@admin/*` (admin)

## Backend rules (NestJS)
- All routes prefixed with `/api/v1`
- Use DTOs with `class-validator` decorators for all request bodies
- Use `@CurrentUser()` decorator to get the logged-in user
- All endpoints protected by `JwtAuthGuard` unless decorated with `@Public()`
- Mongoose schemas live in `modules/[name]/schemas/`
- WebSocket events live in `modules/realtime/`
- Port is set in `main.ts` — always 4002

## Module structure (`apps/backend/src/`)
```
modules/
  auth/        — JWT auth, login, register
  users/       — user CRUD + roles
  content/     — CMS pages/posts
  orders/      — order management
  settings/    — site settings
  realtime/    — WebSocket gateway
common/
  guards/      — JwtAuthGuard, RolesGuard
  decorators/  — @CurrentUser(), @Roles(), @Public()
  filters/     — global exception filter
```

## MongoDB rules
- Use Mongoose schemas with TypeScript types from `@repo/types`
- Always set `timestamps: true` on every schema
- Never use `_id` directly in responses — use `toJSON()` transform or lean queries
- Connection string in `apps/backend/.env` → `MONGODB_URI`

## Monorepo rules
- **ALWAYS** run `pnpm install` from the **repo root** — never from inside an app
- **ALWAYS** run turbo commands from the **repo root**
- To run a single app: `pnpm dev:frontend` / `pnpm dev:admin` / `pnpm dev:backend`
- To run everything: `pnpm dev`

## Environment files
| File | Purpose |
|------|---------|
| `apps/backend/.env` | MongoDB URI, JWT secret, CORS origins, port |
| `apps/frontend/.env.local` | API + WebSocket URLs |
| `apps/admin/.env.local` | API + WebSocket URLs |

## Deployment
| Target | Platform | Notes |
|--------|----------|-------|
| `apps/frontend` | Vercel | Static + Edge |
| `apps/admin` | Vercel | Static + Edge |
| `apps/backend` | Hostinger VPS (Docker) | Persistent server — NOT Vercel |
| Database | MongoDB Atlas | Cloud hosted |
