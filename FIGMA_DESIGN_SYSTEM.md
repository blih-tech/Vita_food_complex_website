# Vita Food Complex - Figma Design System Integration

This document provides comprehensive guidelines for integrating Figma designs with the Vita Food Complex codebase using the Model Context Protocol (MCP).

## Project Architecture Overview

### Tech Stack
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Language**: TypeScript
- **Monorepo**: Turborepo with pnpm
- **Internationalization**: next-intl (English/Amharic)
- **Icons**: Lucide React
- **Build System**: Turbo

### Project Structure
```
Vita_food_complex_website/
├── apps/
│   ├── frontend/           # Main website (Next.js)
│   ├── admin/             # Admin dashboard (Next.js)
│   └── backend/           # API (NestJS)
├── packages/
│   ├── ui/                # Shared UI components
│   ├── types/             # Shared TypeScript types
│   └── eslint-config/     # ESLint configurations
```

## Design System Structure

### 1. Token Definitions

#### CSS Custom Properties (Design Tokens)
Located in: `/apps/frontend/src/app/globals.css`

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #23b349;
  --color-primary-dark: #0f4b1f;
  --color-background-page: #ffffff;
  --color-body-text: #333733;

  /* Figma Design Colors */
  --brand-brand: #23B349;
  --text-white: #FFFFFF;
  --text-dark-subtle: #333733;
  --neutral-white-white-500: #FFFFFF;

  /* Card Accent Colors */
  --color-card-purple: #a099b5;
  --color-card-purple-glow: #ddd4f7;
  --color-card-terracotta: #7e4627;
  --color-card-terracotta-glow: #f28b52;
  --color-card-tan: #9d8562;
  --color-card-tan-glow: #eecc9c;

  /* Typography */
  --font-display: var(--font-funnel-display), "Funnel Display", Helvetica, sans-serif;
  --font-body: var(--font-outfit), "Outfit", Helvetica, sans-serif;

  /* Spacing & Sizing */
  --radius-lg: 0.5rem;
  --radius-2xl: 1rem;
  --shadow-drop: 0px 0px 70.05px 8.76px rgba(0, 0, 0, 0.1);
}
```

#### Typography System
```css
.heading-hero      /* 180px - Funnel Display */
.heading-section   /* 64px - Funnel Display */
.heading-card      /* 48px - Funnel Display */
.text-body-large   /* 24px - Outfit */
.text-body-default /* 16px - Outfit */
.text-body-small   /* 14px - Outfit */
```

### 2. Component Library

#### UI Components Location
- **Shared Components**: `/packages/ui/src/`
- **App-specific Components**: `/apps/frontend/src/components/ui/`
- **Section Components**: `/apps/frontend/src/components/sections/`

#### Component Architecture
```typescript
// Example Button Component
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
```

### 3. Styling Approach

#### Tailwind CSS Configuration
- Uses Tailwind CSS v4
- Custom CSS variables for design tokens
- Utility-first approach with component classes
- Mobile-first responsive design

#### Utility Functions
```typescript
// /apps/frontend/src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 4. Icon System

#### Icon Library
- **Primary**: Lucide React
- **Location**: Imported directly in components
- **Usage**: `<IconName className="w-4 h-4" />`

### 5. Asset Management

#### Image Storage
- **Public Assets**: `/apps/frontend/public/`
- **Optimized Images**: Next.js Image component
- **Icons**: Lucide React (vector icons)

### 6. Responsive Design

#### Breakpoint System
```css
--breakpoint-xs: 320px;
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
--breakpoint-desktop: 1920px;
```

## Figma Integration Workflow

### 1. Design Token Sync

#### From Figma to CSS
```bash
# Use Figma MCP to extract design tokens
mcp0_get_variable_defs --nodeId="NODE_ID" --fileKey="FILE_KEY"
```

#### Update CSS Variables
```css
/* Sync Figma variables with CSS custom properties */
:root {
  --figma-primary: #23B349; /* From Figma */
  --figma-text-primary: #333733; /* From Figma */
}
```

### 2. Component Mapping

#### Code Connect Setup
```typescript
// Map Figma components to React components
mcp0_add_code_connect_map \
  --nodeId="FIGMA_NODE_ID" \
  --fileKey="FIGMA_FILE_KEY" \
  --componentName="Button" \
  --source="packages/ui/src/button.tsx" \
  --label="React"
```

### 3. Design Context Extraction

#### Get Design Specifications
```bash
# Extract design context for implementation
mcp0_get_design_context \
  --nodeId="NODE_ID" \
  --fileKey="FILE_KEY" \
  --clientFrameworks="react,next.js" \
  --clientLanguages="typescript"
```

### 4. Asset Import

#### Image/Asset Upload
```bash
# Upload assets from Figma to project
mcp0_upload_assets \
  --fileKey="FILE_KEY" \
  --count=1
```

## Implementation Guidelines

### 1. When Creating New Components

1. **Check Figma First**: Use `mcp0_search_design_system` to find existing components
2. **Extract Design Context**: Get specifications with `mcp0_get_design_context`
3. **Implement Component**: Follow existing patterns in `/packages/ui/src/`
4. **Map to Figma**: Use `mcp0_add_code_connect_map` for future sync

### 2. When Updating Existing Components

1. **Get Current Mapping**: Use `mcp0_get_code_connect_map`
2. **Extract Updated Design**: Use `mcp0_get_design_context`
3. **Update Component**: Modify following existing patterns
4. **Update Mapping**: Use `mcp0_add_code_connect_map` with new parameters

### 3. Design System Consistency

#### Color Usage
```css
/* Primary Actions */
background-color: var(--color-primary); /* #23b349 */

/* Text Hierarchy */
color: var(--color-body-text); /* #333733 */

/* Backgrounds */
background-color: var(--color-background-page); /* #ffffff */
```

#### Typography Hierarchy
```css
/* Hero Sections */
font-family: var(--font-display); /* Funnel Display */

/* Body Text */
font-family: var(--font-body); /* Outfit */
```

## Code Connect Templates

### Button Component Template
```typescript
// Code Connect template for Button
{
  "componentName": "Button",
  "props": {
    "variant": {
      "type": "enum",
      "values": ["primary", "secondary", "outline"],
      "default": "primary"
    },
    "size": {
      "type": "enum", 
      "values": ["sm", "md", "lg"],
      "default": "md"
    },
    "children": {
      "type": "slot"
    }
  }
}
```

## Best Practices

### 1. Design-First Development
1. Start with Figma designs
2. Extract design tokens first
3. Implement components systematically
4. Maintain Code Connect mappings

### 2. Token Management
1. Keep CSS variables in sync with Figma
2. Use semantic token names
3. Document token usage patterns
4. Version control token changes

### 3. Component Architecture
1. Follow existing component patterns
2. Use TypeScript interfaces for props
3. Implement proper accessibility
4. Maintain responsive design principles

### 4. Internationalization
1. Design with Amharic text expansion in mind
2. Use flexible layouts
3. Test with both languages
4. Consider RTL/LTR implications

## Troubleshooting

### Common Issues

#### Token Mismatch
```bash
# Check Figma variables
mcp0_get_variable_defs --nodeId="NODE_ID" --fileKey="FILE_KEY"

# Compare with CSS variables
grep -r "var(--" apps/frontend/src/app/globals.css
```

#### Component Mapping Issues
```bash
# Check existing mappings
mcp0_get_code_connect_map --nodeId="NODE_ID" --fileKey="FILE_KEY"

# Get suggestions for new mappings
mcp0_get_code_connect_suggestions --nodeId="NODE_ID" --fileKey="FILE_KEY"
```

## Quick Start Commands

### Initialize Figma Connection
```bash
# Check authentication
mcp0_whoami

# Get available design libraries
mcp0_get_libraries --fileKey="YOUR_FILE_KEY"

# Search for components
mcp0_search_design_system --query="button" --fileKey="YOUR_FILE_KEY"
```

### Design to Code Workflow
```bash
# 1. Get design context
mcp0_get_design_context --nodeId="NODE_ID" --fileKey="FILE_KEY"

# 2. Create component mapping
mcp0_add_code_connect_map --nodeId="NODE_ID" --fileKey="FILE_KEY" --componentName="ComponentName" --source="path/to/component" --label="React"

# 3. Upload assets if needed
mcp0_upload_assets --fileKey="FILE_KEY" --count=1
```

This integration guide ensures seamless collaboration between Figma designs and the Vita Food Complex codebase, maintaining consistency and accelerating development workflows.
