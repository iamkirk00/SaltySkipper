# SaltySkipper — Development Setup

This repository contains a minimal scaffold for the SaltySkipper app:

- `frontend/` — Vite + React app (placeholder pages for Landing, Label, Game, Videos)
- `backend/` — FastAPI app with a `/status` endpoint
- `images/` — place your logo and skipper images here

Quick start (two terminals):

1) Frontend

```bash
cd frontend
npm install
npm run dev
```

2) Backend (Python 3.11+ recommended)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Notes:
- The frontend is a minimal Vite + React scaffold. We'll add the scripted chatbot, the skipping-rock game, and the videos carousel next.
- Upload your logo/skipper images into `images/` and tell me the filenames so I can reference them in the Landing page.

Publishing to GitHub Pages (automatic via GitHub Actions)

- The repo contains a GitHub Actions workflow that will build the frontend and publish `frontend/dist` to the `gh-pages` branch automatically when you push to `main`.
- Required updates were already added to `frontend/package.json` and `frontend/vite.config.js`:
	- `homepage` is set to `https://iamkirk00.github.io/SaltySkipper/`
	- `vite.config.js` `base` is set to `/SaltySkipper/` so assets resolve correctly on GitHub Pages.

How to publish now:

1) Commit and push your changes to `main`:

```bash
git add .
git commit -m "Prepare frontend for GitHub Pages deployment"
git push origin main
```

2) The GitHub Actions workflow will run automatically and publish the site. Wait a few minutes and open:

`https://iamkirk00.github.io/SaltySkipper/`

Local deploy (optional):
- The repo also includes `gh-pages` devDependency and a `deploy` script so you can deploy from your machine with:

```bash
cd frontend
npm install
npm run deploy
```

Notes:
- If you use the local `deploy` script it will push a `gh-pages` branch to the repo. The GitHub Actions workflow will also publish on pushes to `main`.
- If assets don't appear correctly, check the `base` setting in `frontend/vite.config.js` and the `homepage` field in `frontend/package.json`.
