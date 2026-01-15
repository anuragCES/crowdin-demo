# Next.js Static Export (GitHub Pages)

This repo is configured for static export and deployment to GitHub Pages.

Getting started

- Install dependencies: `npm install` or `yarn`
- Run the dev server: `npm run dev`

GitHub Pages deployment

- Push to `main` to trigger the workflow.
- The static site is built to `out/` using Next.js `output: "export"`.

Notes

- API routes and server-side auth are not supported on GitHub Pages.
- `pages/index.js` and `pages/protected.js` are now client-only/static demos.

