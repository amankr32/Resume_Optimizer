# Frontend — AI Resume ATS Checker

React (Vite) single-page app for the AI Resume ATS Checker. See the [root README](../README.md) for full project setup, environment configuration, and API documentation.

## Quick Start

```bash
npm install
npm run dev
```

The dev server runs on Vite's default port and expects the backend API to be running (see `../backend`).

## Structure

- `src/api/` — API client (Axios) for talking to the backend
- `src/pages/` — route-level page components
- `src/components/` — reusable UI components
- `src/hooks/` — React Query hooks for data fetching/mutations
- `src/context/` — Theme, Auth, and UI context providers

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.
