import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/",
  server: {
    host: true,
    allowedHosts: ["listings-hindu-proceedings-spy.trycloudflare.com"]
  },
  plugins: [react()],
})
