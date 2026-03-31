# Backend App — Gemini Rules

## Context
- **Framework**: NestJS 11
- **Port**: 4002
- **Database**: MongoDB via Mongoose
- **Architecture**: REST API + WebSockets (socket.io)

## Backend Rules
- **API Versioning**: All routes must be prefixed with `/api/v1`.
- **Validation**: Use DTOs with `class-validator` decorators for all request bodies.
- **Authentication**:
  - All endpoints are protected by `JwtAuthGuard` by default.
  - Use `@Public()` decorator to make an endpoint public.
  - Use `@CurrentUser()` decorator to access the logged-in user.
- **WebSocket**: Events must be located in `modules/realtime/`.
- **MongoDB**:
  - Use Mongoose schemas with types from `@repo/types`.
  - Always set `timestamps: true` in schemas.
  - Never return `_id` directly; use `toJSON()` transforms or `.lean()`.
- **Environment**: Configuration in `.env`.

## Module Structure (`src/`)
- `modules/auth/`: JWT, login, register.
- `modules/users/`: CRUD + roles.
- `modules/content/`: CMS pages/posts.
- `modules/orders/`: Order management.
- `modules/settings/`: Site settings.
- `modules/realtime/`: WebSocket gateway.
- `common/`: Guards, decorators, filters.
