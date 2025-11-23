import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  // Base path for GitHub Pages (repository name)
  base: '/SaltySkipper/',
  // Serve the repository-level `images/` directory as Vite's public dir
  // so the frontend can reference images like `/SaltySkipperLogo.PNG`.
  publicDir: '../images',
  server: {
    port: 5173
  }
})
