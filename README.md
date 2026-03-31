# Vita Food Complex Website

**Official Website for Vita Hydro Agro-Processing PLC**

A modern, fully bilingual (English + Amharic) corporate website for a leading biscuit and flour manufacturer based in Debre Sina, Ethiopia.

**Developed by:** [Blih Marketing & Communications](https://blihmarketing.com)

---

## Project Overview

The Vita Food Complex website is a **fully CMS-driven** digital platform. **Every page and all content** on the public website is dynamically managed through a powerful **Admin Dashboard**. This gives the Vita team complete control to update text, images, products, news, downloads, and more without any coding knowledge.

### Key Highlights
- **100% CMS Managed Website** — All pages are dynamic and editable via Admin Dashboard
- **Full Dual Language Support** — English + Amharic (አማርኛ) with seamless switching
- **Modern Full-Stack Architecture** — Next.js 16 + NestJS + MongoDB
- **Monorepo Setup** powered by Turborepo
- **Secure B2B Distributor Portal** with order management
- **Strong Transparency Focus** — Factory, Quality, Lab Tests, and Certifications
- **SEO Optimized** for both English and Amharic markets

---

## Tech Stack

### Frontend (Public Website) & Admin Dashboard
- **Next.js 16.2** (App Router, Turbopack, React Compiler)
- **TypeScript 5.x**
- **Tailwind CSS**
- **next-intl** — Full i18n support (English + Amharic)
- **next-seo** — Advanced SEO & structured data
- **Socket.io-client** — Real-time updates

### Backend
- **NestJS** (Latest)
- **MongoDB + Mongoose**
- **Socket.io** — Real-time notifications and order tracking
- **JWT + Passport.js** — Secure authentication
- **Multer** — File uploads (images, PDFs, catalogs)

### Development & Infrastructure
- **Turborepo** — Monorepo management
- **pnpm** workspaces
- **Vercel** — Hosting for Frontend & Admin
- **Render** — Backend API hosting
- **MongoDB Atlas** — Cloud database
- **GitHub** (`blih-tech` organization)

---

## Monorepo Structure

```bash
Vita_food_complex_website/
├── apps/
│   ├── frontend/          # Public-facing website (fully dynamic)
│   ├── backend/           # REST API + WebSocket server
│   └── admin/             # Full CMS Admin Dashboard
├── packages/
│   ├── ui/                # Shared UI components (@repo/ui)
│   ├── types/             # Shared TypeScript types (@repo/types)
│   └── config/            # Shared configurations
├── CLAUDE.md
├── turbo.json
├── pnpm-workspace.yaml
└── README.md
```

---

## Live URLs

| Application          | URL                                                      |
|----------------------|----------------------------------------------------------|
| **Public Website**   | `https://vita-food-frontend.vercel.app`                  |
| **Admin Dashboard**  | `https://vita-food-admin.vercel.app`                     |
| **Backend API**      | `https://vita-food-complex-website.onrender.com`         |
| **API Base Path**    | `https://vita-food-complex-website.onrender.com/api/v1`  |

---

## Core Philosophy: Full CMS Management

> **All pages and content on the public website are managed exclusively through the Admin Dashboard.**

This means:
- No static/hard-coded pages on the frontend
- Every section, text block, image, and component can be updated in real-time from the admin
- Content is stored in MongoDB and served dynamically to the frontend
- Bilingual content (English + Amharic) is managed side-by-side in the CMS

### Pages Fully Managed via CMS

The following pages are completely dynamic and editable from the Admin Dashboard:

- **Home Page** (Hero, Stats, Product Highlights, News Preview, Social Wall, CTAs)
- **About Us**
- **Products** (List + Individual Product Detail pages)
- **Factory & Production**
- **Quality & Certifications**
- **Lab Test Results**
- **Recipes**
- **Distributors & Dealers**
- **CSR / Charity Corner**
- **News & Media**
- **Learning Hub**
- **Download Center**
- **Contact Us**

---

## Key Features

### 1. Dual Language Support
- Full English + Amharic support
- Language switcher (flag/dropdown)
- SEO-friendly URLs (`/en/...` and `/am/...`)
- All content, forms, buttons, and PDFs available in both languages

### 2. Product Management
- Full product catalog (Biscuits + Flour)
- Detailed information: ingredients, nutritional facts, shelf life, allergens, storage
- Per-product catalog PDF download
- Recipe recommendations

### 3. B2B Distributor Portal
- Public “Become a Distributor” form
- Secure login area for approved dealers
- Bulk purchase order system
- Order tracking and history
- Marketing materials access

### 4. Transparency & Trust
- Quality Certificates page with downloadable PDFs
- Lab Test transparency page with recent reports
- Factory & Production page with capacity stats, virtual tour, and sustainability info

### 5. Engagement Features
- Dynamic News / Blog section
- Appointment & Sponsorship request forms
- Social wall (Instagram, TikTok, etc.)
- CSR initiatives showcase

### 6. Download Center
- Centralized hub for catalogs, brochures, company profile, high-res images, press kits

### 7. Technical Features
- Full on-page + technical SEO (including Amharic keywords)
- Google Analytics 4 with conversion tracking
- Fast loading, mobile-first, accessible design
- Real-time updates via WebSockets

---

## Admin Dashboard Capabilities

The Admin Dashboard is the **central control hub** where the Vita team manages the entire website.

### Main Sections:
- **Dashboard** – Overview and analytics
- **Pages CMS** – Manage all website pages and sections
- **Products** – Add/edit/delete products and variants
- **News & Media** – Create and publish articles
- **Recipes** – Manage recipe content
- **Distributors** – Review applications and manage dealer accounts
- **Orders** – Handle purchase orders
- **Quality & Lab** – Upload certificates and lab reports
- **Media & Downloads** – Manage all downloadable files
- **Appointments** – Manage factory visits and sponsorship requests
- **Users & Roles** – Admin and dealer user management
- **Settings** – Global site settings, SEO, language content
- **Analytics** – Integrated performance data

---

## Getting Started

### Prerequisites
- Node.js **v20+**
- pnpm **v9+**
- Git
- MongoDB Atlas connection string

### Installation

```bash
git clone git@github.com:blih-tech/Vita_food_complex_website.git
cd Vita_food_complex_website
pnpm install
```

### Environment Variables

**`apps/frontend/.env.local`**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_WS_URL=http://localhost:4000
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**`apps/admin/.env.local`**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_WS_URL=http://localhost:4000
```

**`apps/backend/.env`**
```env
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_strong_secret
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001
PORT=4000
NODE_ENV=development
```

### Development Commands

```bash
# Run all apps
pnpm dev

# Run individually
pnpm dev:frontend     # → localhost:3000
pnpm dev:backend      # → localhost:4000
pnpm dev:admin        # → localhost:3001
```

### Build Commands

```bash
pnpm build                    # Build everything
pnpm build --filter=frontend
pnpm build --filter=admin
pnpm build --filter=backend
```

---

## Deployment

- **Frontend & Admin** → Deployed on **Vercel** (separate projects)
- **Backend** → Hosted on **Render**
- **Database** → **MongoDB Atlas**
- **AI Agent** → Claude Code running 24/7 on Hostinger VPS for autonomous development

---

## Branch Strategy

- `main` – Production (auto-deploys)
- `dev` – Development branch
- `feature/*` – Feature branches

---

## About the Client

**Vita Hydro Agro-Processing PLC** (Debre Sina, Ethiopia)
- Biscuit and Wheat Flour production.
- Investment: 210M ETB. Capacity: 42-60t flour/day, 1.5-2t biscuits/hr.
- Design: Bold, modern, playful, food-forward.

**Agency:** Blih Marketing & Communications – Addis Ababa, Ethiopia

---

**© 2025–2026 Blih Marketing & Communications. All rights reserved.**
