# Contributing to Vita Food Complex Website

Thank you for contributing to the Vita Food Complex project! This document outlines the standards, workflows, and philosophies required to maintain the quality and consistency of this monorepo.

---

## 🌟 Core Philosophy: 100% CMS Managed

Before writing any code, remember our most sacred rule: **Every page and all content on the public website must be managed exclusively through the Admin Dashboard.**

- **No Hard-coding:** Never hardcode user-facing text, images, or layout sections in the frontend.
- **Dynamic First:** Every new feature must be built to fetch its data from the API.
- **Bilingual Support:** All new content structures must support English and Amharic (አማርኛ) side-by-side.

---

## 🛠 Getting Started

### Prerequisites
- **Node.js**: v20 or higher
- **pnpm**: v9 or higher (Strictly required for workspace management)
- **MongoDB**: A local instance or MongoDB Atlas connection string

### Setup
1. **Clone the repository:**
   ```bash
   git clone git@github.com:blih-tech/Vita_food_complex_website.git
   cd Vita_food_complex_website
   ```

2. **Install dependencies (ALWAYS from the root):**
   ```bash
   pnpm install
   ```

3. **Environment Variables:**
   Copy the example environment files in each app directory (`apps/frontend`, `apps/admin`, `apps/backend`) and fill in the required values.

---

## 📂 Monorepo Structure

- **`apps/frontend`**: Public-facing website (Next.js 16.2)
- **`apps/admin`**: CMS Admin Dashboard (Next.js 16.2)
- **`apps/backend`**: REST API & WebSockets (NestJS)
- **`packages/ui`**: Shared React components (@repo/ui)
- **`packages/types`**: Shared TypeScript interfaces (@repo/types)
- **`packages/config`**: Shared configurations (ESLint, Tailwind, TypeScript)

---

## 🚀 Development Workflow

### Running the Project
Always run commands from the repository root:
- `pnpm dev`: Runs all applications (Frontend, Admin, Backend)
- `pnpm dev:frontend`: Runs only the public website (Port 3000)
- `pnpm dev:admin`: Runs only the admin dashboard (Port 3001)
- `pnpm dev:backend`: Runs only the backend API (Port 4000)

### Branching Strategy
- `main`: Production-ready code (Auto-deploys to Vercel/Render)
- `dev`: Primary development branch
- `feature/*`: New features or bug fixes (Branch off from `dev`)

### Commit Messages
We follow a concise, descriptive commit style:
- `feat: add product category filtering`
- `fix: resolve distributor form validation error`
- `docs: update contributor guidelines`
- `refactor: optimize shared card component`

---

## 🎨 Coding Standards

### 1. Styling (Tailwind CSS Only)
- Use **Tailwind CSS utility classes** for all styling.
- **No** inline styles (`style={{...}}`).
- **No** CSS Modules or external CSS libraries.
- Use theme values defined in the shared Tailwind configuration.

### 2. TypeScript (Strict Mode)
- **No `any` type:** Always define proper interfaces or types.
- **Shared Types:** All interfaces used by more than one app must be defined in `packages/types`.
- **API Responses:** All backend responses must use the `ApiResponse<T>` wrapper.

### 3. Bilingual Support (i18n)
- Use `next-intl` for all UI labels (buttons, placeholders, static headers).
- Content fetched from the CMS must include both `en` and `am` fields.
- Use the `useTranslations()` hook in frontend components.

### 4. Shared Packages
- Before creating a new UI component, check if it belongs in `@repo/ui`.
- Atomic components (buttons, inputs, cards) should live in the shared UI package to ensure consistency between Frontend and Admin.

---

## 📝 Pull Request Process

1. **Verify Build:** Run `pnpm build` from the root to ensure no workspace errors.
2. **Linting:** Run `pnpm lint` to ensure code style compliance.
3. **Tests:** If applicable, ensure all existing tests pass.
4. **Documentation:** Update `GEMINI.md` or `README.md` if your change introduces new global rules or environment variables.

---

## 🚀 Deployment
- **Frontend/Admin:** Deployed to Vercel.
- **Backend:** Deployed to Render (Persistent server required for WebSockets).
- **Database:** MongoDB Atlas.

---

## 📬 Contact & Support
Developed and maintained by **Blih Marketing & Communications**.
- **Website:** [blihmarketing.com](https://blihmarketing.com)
- **Email:** hello@blihmarketing.com

---
**© 2026 Blih Marketing & Communications. All rights reserved.**
