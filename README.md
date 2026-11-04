# Kyro Labs Website

Official website for **Kyro Labs** — Independent software studio conceiving, building, and operating high-utility digital platforms and technical infrastructure.

## Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + Radix UI Primitives (shadcn/ui)
- **Icons:** Lucide React
- **Production Server:** `serve` (SPA client-side routing support)
- **Deployment:** [Railway.app](https://railway.com) (Nixpacks or Docker)

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Vite local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

Or run the production static server:
```bash
npm start
```

## Deploying to Railway.app

This repository is pre-configured with `railway.json`, `nixpacks.toml`, and a multi-stage `Dockerfile` for zero-config Railway deployment.

### Quick Deploy:

1. Go to [railway.com](https://railway.com) and log in.
2. Click **New Project** → **Deploy from GitHub repo**.
3. Select **KyroLabsWebsite**.
4. Railway will automatically detect the configuration, build the project with `npm run build`, and serve the static SPA via `serve` on `$PORT`.
5. Under your project settings, click **Generate Domain** (or assign a custom domain like `kyrolabs.com`).

---

© Kyro Labs. All rights reserved.
