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

Local Node version (important)
--------------------------------
- The frontend requires a modern Node version (Node 18+; we use Node 20 in CI). Use `nvm` to install and select a compatible Node version locally:

```bash
# install nvm (if you don't have it)
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 20
nvm use 20

# then in frontend:
cd frontend
npm install
npm run build
```

Why this matters: Vite and some plugins are ESM-only and use newer Node features (top-level await, etc.). If you try to build with an older Node (e.g., Node 12) you will see syntax or engine errors.

What I changed in this repo
---------------------------
- Added a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds `frontend` and deploys `frontend/dist` to GitHub Pages when you push to `main`.
- Updated `frontend/package.json` to be ESM (`"type": "module"`) so Vite can load the ESM config and plugins.
- Added `frontend/package-lock.json` (reproducible installs) — committing this lets the workflow use `npm ci`.

If you'd like, I can also add a CircleCI/Netlify alternative or change the workflow to only run on tags instead of every push.
