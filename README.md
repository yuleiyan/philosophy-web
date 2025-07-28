
# Philosophy Web

**Philosophy Web** is an interactive, single‑page application that introduces users to major philosophical and spiritual traditions from around the world. Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **motion** and **shadcn/ui**, the site combines smooth animations, carefully‑curated imagery.

## ✨ Key Features

-  **Component‑driven UI** – Modular React components organised under `src/components` and `src/features`.
-  **Rich media experience** – WebP images, custom iconography, and bespoke fonts create an immersive look and feel.
-  **motion animations** – Sequential text reveals, animated CTA buttons, and scroll‑triggered transitions hold user attention.
-  **100 % TypeScript** – Strict typing across the entire codebase for safer refactors.
-  **Accessibility first** – Semantic markup, keyboard navigation, and ARIA attributes baked in from day one.
-  **CI & CD**

## 🗂️ Project Structure

```text
.
├── public/               # Static assets served as‑is
├── src/
│   ├── assets/           # Fonts and global images
│   ├── components/       # Re‑usable UI primitives
│   ├── features/
│   │   ├── intro/        # Landing sequence
│   │   └── characters/   # One sub‑folder per tradition
│   └── contexts/         # React context providers
├── .github/workflows/    # CI pipeline
├── vite.config.ts        # Vite configuration
└── tailwind.config.js    # Tailwind theme
```

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
| ---- | ------- |
| Node | ≥ 18.x  |
| npm  | ≥ 9.x   |

### Installation

```bash
git clone https://github.com/yuleiyan/philosophy-web.git
cd philosophy-web
npm install
npm run dev
```

## 🔧 Scripts

| Script            | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with hot reloading.    |
| `npm run build`   | Generates an optimised production bundle.         |
| `npm run preview` | Serves the production build for local inspection. |
| `npm run lint`    | Runs ESLint with the project rules.               |