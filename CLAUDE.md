# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Pavan Karumuri built with Next.js 16, React 19, and Tailwind CSS v4. A modern, single-page application showcasing professional experience, projects, skills, and education.

**Tech Stack:**
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Node.js tooling

## Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Build & Deploy
npm run build        # Production build
npm start           # Start production server

# Linting
npm run lint        # Run ESLint
```

## Architecture

### Directory Structure
```
app/                  # Next.js App Router
  layout.tsx         # Root layout (fonts, metadata, dark mode)
  page.tsx           # Homepage - composes all sections
components/           # React components (all client components)
  Navigation.tsx     # Sticky nav with scroll detection
  Hero.tsx          # Hero section
  Experience.tsx    # Work history timeline
  Projects.tsx      # Project cards
  Skills.tsx        # Skills grid
  Education.tsx     # Education section
  Contact.tsx       # Contact form
public/              # Static assets
```

### Component Architecture
- All components in `components/` are client components (`"use client"`)
- Single-page architecture with section-based navigation using anchor links
- Section IDs: `#hero`, `#experience`, `#projects`, `#skills`, `#education`, `#contact`
- Tailwind CSS v4 via PostCSS (no custom CSS files except `globals.css`)

### Key Patterns
- Path alias `@/*` maps to root directory (configured in `tsconfig.json`)
- Fixed navigation with scroll-based backdrop blur effect
- Dark mode by default (`slate-950` background)
- Responsive design: mobile-first with `md:` breakpoints for navigation

### State Management
- React hooks (`useState`, `useEffect`) for local component state
- No global state management library
- Navigation uses scroll event listeners for visual state changes

## Development Notes

### Styling
- Tailwind CSS v4 (new PostCSS-based integration)
- Color palette: `slate-950` (bg), `sky-600` (primary actions), `slate-400` (secondary text)
- Font: Inter via `next/font/google`

### Contact Form
- Contact section needs backend integration (email service/API)
- Currently client-side only

### Deployment
- Optimized for Vercel (Next.js native platform)
- Static site generation possible - no dynamic routes currently

## Content Management

Content is currently embedded directly in components. When updating:
- Experience → `components/Experience.tsx`
- Projects → `components/Projects.tsx`
- Skills → `components/Skills.tsx`
- Education → `components/Education.tsx`

All sections follow resume data from `portfolio.md` PRD.
