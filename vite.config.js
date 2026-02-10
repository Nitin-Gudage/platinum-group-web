import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ["nav-eastern-believed-strong.trycloudflare.com"]
  },
  plugins: [react()],
})
