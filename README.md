# Smart Orange Test Task

A simple front-end project demonstrating:
- Dynamic portfolio rendering from a JSON endpoint.
- Auto-generated tabs based on item types (portfolio__card-top-type).
- Filtering by tabs.
- Initial render shows up to 3 items and a "Load More" button that appends 3 more each click.
- Loading spinner on the Load More button.
- Environment variables support via a minimal .env loader in webpack.

## Table of Contents
- Requirements
- Getting Started
  - Installation
  - Environment Variables
  - Development
  - Production Build
- Scripts
- Project Structure
- Features
- Notes & Troubleshooting

## Requirements
- Node.js 16+ (recommended LTS)
- npm 8+

## Getting Started

### Installation
```
npm install
```

### Environment Variables
This project reads environment variables from a `.env` file at the project root and injects them into the client bundle via `webpack.DefinePlugin`.

- Example file: `.env.example`
- Create your own `.env` by copying the example:
```
cp .env.example .env
```
- Available variables:
  - `API_URL` — Endpoint to fetch portfolio data (JSON). Default fallback: `https://test.smarto.agency/smarto_complexes_list.json`.
  - `PAGE_SIZE` — Number of items to render initially and per "Load More" click. Default: `3`.

You can also rely on defaults if `.env` is missing.

### Development
Runs a dev server (BrowserSync) and watches sources; JS is bundled with webpack in watch mode; SCSS compiled with sourcemaps.
```
npm run dev
```
- Open the URL printed by BrowserSync (usually http://localhost:3000).
- Source files are under `src/`. Output is served from `dist/`.

### Production Build
Creates a production JS bundle and minified CSS, copies HTML and images into `dist/`.
```
npm run build
```
The output will be placed under:
- `dist/index.html`
- `dist/assets/js/bundle.js`
- `dist/assets/css/styles.css`
- `dist/assets/images/*`

## Scripts
Defined in `package.json`:
- `npm run dev` — Start development workflow (gulp + webpack watch + BrowserSync).
- `npm run start` — Alias to `dev`.
- `npm run build` — Production build (webpack in production mode + gulp build:css + copy assets).

## Project Structure
```
smart-orange-test-task/
├─ dist/                      # Compiled output (generated)
├─ src/
│  ├─ images/                 # Source images
│  ├─ js/
│  │  ├─ main.js             # Entry point (imports styles, portfolio, slider)
│  │  ├─ portfolio.js        # Portfolio logic (fetch, tabs, load more)
│  │  └─ slider.js           # Slick slider init
│  ├─ scss/
│  │  └─ styles.scss         # Main styles
│  └─ index.html             # HTML template
├─ webpack.config.js          # JS bundling + env injection
├─ gulpfile.js                # Dev server, HTML/images copy, CSS build
├─ package.json
├─ .env.example               # Example environment variables
└─ .env                       # Your local environment variables (optional)
```

## Features
- Portfolio data is fetched from `API_URL` (see `.env`).
- Tabs are built dynamically from the portfolio items' type field (supports keys: `type`, `category`, `top_type`).
- Filtering by tabs; the "Усі" tab shows all.
- Initial render shows up to `PAGE_SIZE` items; Load More adds `PAGE_SIZE` more.
- Load More button shows a spinner state while appending items.
- Graceful image fallback to `/assets/images/mock.jpg` if an image fails to load.
- Robust parsing of varied JSON shapes (tries `data`, `complexes`, `items`, `projects`, `list`, or the first array found).

## Notes & Troubleshooting
- On build you may see a warning from Dart Sass about the legacy JS API deprecation. This is a known upstream warning and does not affect functionality.
- If images do not show during development, ensure that `src/images` contains the referenced files; they are copied to `dist/assets/images` by gulp.
- The HTML copy task adjusts `<img src>` to point into `/assets/images/<file>` automatically.
- If you modify `.env`, re-run the webpack build (or restart `npm run dev`) so the variables are re-injected.

## License
This repository is provided for the Smart Orange test task purposes.
