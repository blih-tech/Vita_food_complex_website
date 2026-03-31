# GEMINI.md — Vita Food Complex Website

**This is the sacred rulebook for all code changes in this repository.**  
Read this entire file **before** making any changes.

---

## Project Identity
- **Project:** Vita Hydro Agro-Processing PLC — Official Website
- **Client:** Vita Hydro Agro-Processing PLC (Debre Sina, Ethiopia)
- **Developed by:** Blih Marketing & Communications
- **Repository:** `github.com/blih-tech/Vita_food_complex_website`
- **Architecture:** Full-stack Turborepo monorepo (100% CMS Managed)
- **Status:** Active development

---

## Core Philosophy: Full CMS Management
> **Every page and all content on the public website are managed exclusively through the Admin Dashboard.**
- **No static or hard-coded pages/content** on the frontend.
- Every section, text block, image, and component must be editable via the Admin CMS.
- Bilingual content (English + Amharic) is managed side-by-side in the CMS.
- Content is stored in MongoDB and served dynamically to the frontend.

---

## Live URLs
| Application          | URL                                                      |
|----------------------|----------------------------------------------------------|
| **Public Website**   | `https://vita-food-frontend.vercel.app`                  |
| **Admin Dashboard**  | `https://vita-food-admin.vercel.app`                     |
| **Backend API**      | `https://vita-food-complex-website.onrender.com`         |
| **API Base Path**    | `https://vita-food-complex-website.onrender.com/api/v1`  |

---

## Monorepo Structure
```bash
Vita_food_complex_website/
├── apps/
│   ├── frontend/     # Public website (100% dynamic Next.js 16.2)
│   ├── backend/      # REST API + WebSockets (NestJS)
│   └── admin/        # Full CMS Admin Dashboard (Next.js 16.2)
├── packages/
│   ├── ui/           # @repo/ui — Shared React components
│   ├── types/        # @repo/types — Shared TypeScript interfaces
│   └── config/       # Shared tsconfig, ESLint, Tailwind config
├── turbo.json
├── pnpm-workspace.yaml
├── CLAUDE.md
└── GEMINI.md
```

---

## Tech Stack

### Frontend & Admin (Next.js 16.2)
- Next.js 16.2 (App Router + Turbopack)
- TypeScript (strict mode)
- Tailwind CSS (utility-first only)
- **next-intl** — Full bilingual support (English + Amharic)
- **next-seo** — SEO, sitemaps, Open Graph
- **@next/third-parties** — Google Analytics 4
- **socket.io-client** — Real-time communication
- React Compiler enabled (`reactCompiler: true`)

### Backend (NestJS)
- NestJS (latest) with TypeScript
- MongoDB + Mongoose
- Socket.io WebSockets (`@nestjs/websockets`)
- JWT Authentication with Passport.js
- `class-validator` + `class-transformer` for DTOs
- Multer for file uploads
- All API routes prefixed with `/api/v1`

**Package Manager:** pnpm  
**Build Tool:** Turborepo

---

## Absolute Rules (Never Break These)

### 1. Package Management & Commands
**Always run commands from the repository root**:
```bash
# Correct
pnpm install
pnpm dev
pnpm build

# Never do this
cd apps/frontend && pnpm install   # ❌ Breaks workspace symlinks
```

### 2. CMS-First Development
- **NEVER** hardcode user-facing text or images in the frontend.
- All new sections or pages must be designed to be editable via the Admin Dashboard.
- Always use the `useTranslations()` hook for UI labels, and fetch page content from the API.

### 3. Shared Packages — Always Use Them
- Import types from `@repo/types`
- Import UI components from `@repo/ui`
- **Never** duplicate types or components that already exist in shared packages.

### 4. Bilingual Support (Mandatory)
- Every user-facing string **must** go through `next-intl` or the CMS.
- Routing: `/en/...` and `/am/...`
- Language preference stored in localStorage under key `vita-lang`

### 5. Styling Rules
- **Tailwind CSS only**. No inline styles, CSS modules, or other libraries.
- Use theme values from `tailwind.config.ts`.

### 6. TypeScript & Code Quality
- Strict TypeScript mode — **no `any` type** allowed.
- All API responses must use `ApiResponse<T>` from `@repo/types`.
- All NestJS request bodies must use validated DTOs.

---

## Development Roadmap

### Phase 1: Foundation (Completed)
- [x] Monorepo structure with Turborepo & pnpm
- [x] Shared packages: `@repo/ui`, `@repo/types`, `@repo/config`
- [x] Scaffolding for Frontend, Admin, and Backend
- [x] `next-intl` integration for bilingual support

### Phase 2: Core Infrastructure (In Progress)
- [x] MongoDB/Mongoose & JWT Authentication
- [ ] **CMS Engine**: Dynamic page section management system
- [ ] Product Catalog API & Media management (Multer)
- [ ] Distributor/Dealer portal logic & Order system
- [ ] WebSocket gateway for real-time notifications

### Phase 3: CMS-Driven Frontend
- [ ] **Dynamic Home Page**: All sections (Hero, Stats, etc.) editable via CMS
- [ ] **Product Directory**: Dynamic filtering and SEO-optimized detail pages
- [ ] **Transparency Pages**: Quality, Lab Tests, and Factory tours
- [ ] **Engagement**: News, Recipes, and Download Center
- [ ] Full SEO, Open Graph, and JSON-LD integration

### Phase 4: Admin CMS Dashboard
- [ ] **Page Builder**: Interface for managing dynamic website sections
- [ ] Product & Content (News/Recipes) management
- [ ] Lead management (Distributors & Appointments)
- [ ] Order tracking and User/Role management

### Phase 5: Optimization & Launch
- [ ] Performance audit (Lighthouse 90+)
- [ ] E2E testing for Distributor and Order flows
- [ ] Production deployment to Vercel/Render
- [ ] Final security hardening

---

## What You Must Never Do
- Run `pnpm install` inside any `apps/*` folder.
- **Hardcode content** that should be in the CMS.
- Use `any` type.
- Deploy backend to Vercel.
- Commit `.env` files.

---

## Client Context
**Vita Hydro Agro-Processing PLC** (Debre Sina, Ethiopia)
- Biscuit and Wheat Flour production.
- Investment: 210M ETB. Capacity: 42-60t flour/day, 1.5-2t biscuits/hr.
- Design: Bold, modern, playful, food-forward.

**Agency:** Blih Marketing & Communications – Addis Ababa, Ethiopia

---

*Last updated: March 2026*  
**Maintained by Blih Tech** — Follow these rules strictly.

