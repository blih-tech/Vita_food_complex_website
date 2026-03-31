# Vita Food Complex — Monorepo Rulebook (CLAUDE.md)

This document provides essential guidance for development within the Vita Food Complex monorepo.

---

## Core Philosophy: 100% CMS Managed
**Every page and all content on the public website are managed exclusively through the Admin Dashboard.**
- **NO HARD-CODING:** Never hardcode user-facing text, images, or sections in the frontend.
- **Dynamic First:** All new components must be designed to fetch their data from the CMS/API.
- **Bilingual:** All content must support English and Amharic side-by-side.

---

## Applications & Ports
| App | Location | Framework | Dev Port | URL |
|-----|----------|-----------|----------|-----|
| Public Website | `apps/frontend` | Next.js 16.2 | 3000 | `https://vita-food-frontend.vercel.app` |
| Admin Dashboard | `apps/admin` | Next.js 16.2 | 3001 | `https://vita-food-admin.vercel.app` |
| Backend API | `apps/backend` | NestJS | 4000 | `https://vita-food-complex-website.onrender.com` |

---

## Shared Packages
| Package | Usage |
|---------|-------|
| `@repo/ui` | Shared React components (Atomic UI, layout components) |
| `@repo/types` | Shared TypeScript interfaces & DTO schemas |
| `@repo/eslint-config` | Standardized linting rules |
| `@repo/typescript-config` | Base TypeScript configurations |

---

## Technical Stack
- **Frontend / Admin**: Next.js 16.2 (App Router, Turbopack, React Compiler), Tailwind CSS
- **Backend**: NestJS (Latest), MongoDB + Mongoose, Socket.io (WebSockets)
- **Auth**: JWT + Passport.js (Secure RBAC)
- **i18n**: `next-intl` (English + Amharic)
- **Package Manager**: `pnpm` workspaces + Turborepo

---

## Development Commands (Root Directory)
```bash
pnpm install          # Install all dependencies (Root only!)
pnpm dev              # Run all applications simultaneously
pnpm dev:frontend     # Run frontend only (Port 3000)
pnpm dev:admin        # Run admin only (Port 3001)
pnpm dev:backend      # Run backend only (Port 4000)
pnpm build            # Build all applications
```

---

## Engineering Rules

### 1. Frontend & Admin (Next.js)
- **Styling**: Tailwind CSS only. No inline styles or CSS modules.
- **Components**: Functional components in `.tsx` files. Default exports preferred.
- **i18n**: Always use `useTranslations()` hook. No raw text in JSX.
- **Data Fetching**: Use shared API wrapper in `src/lib/api.ts`.

### 2. Backend (NestJS)
- **API Prefix**: All routes must start with `/api/v1`.
- **Validation**: Every request body must use a validated DTO (`class-validator`).
- **Response Format**: Use the standard `ApiResponse<T>` from `@repo/types`.
- **Security**: Protect routes with `JwtAuthGuard` and `@Roles('admin')` where appropriate.

### 3. Shared Types & UI
- **Strict Typing**: No `any` type allowed.
- **Reuse**: Check `@repo/ui` and `@repo/types` before creating new ones.
- **Exports**: Ensure all shared symbols are exported from the package's `index.ts`.

---

## Deployment Strategy
- **Frontend & Admin**: Vercel (Auto-deploy on `main`)
- **Backend**: Render (Do NOT deploy NestJS to Vercel)
- **Database**: MongoDB Atlas (Cloud)
- **Assets**: Multer-based uploads (handled via backend)

---

## Development Roadmap
1. **Foundation**: Monorepo, Shared packages, i18n setup. (Completed)
2. **Core Infrastructure**: MongoDB, JWT Auth, **CMS Engine**. (In Progress)
3. **CMS-Driven Frontend**: Dynamic Home, Products, Transparency pages.
4. **Admin CMS Dashboard**: Page Builder, Content & Lead management.
5. **Optimization**: Lighthouse 90+, E2E testing, Production launch.

---

**Last Updated:** March 2026  
**Maintained by:** Blih Tech
