import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Cast to any to avoid type conflicts when multiple Vite versions are present
  // in different node_modules folders.
  plugins: [
    tailwindcss(),
    react(),
  ] as any,
})
