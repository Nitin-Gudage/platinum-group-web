import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ["example-care-essay-build.trycloudflare.com"]
  },
  plugins: [react()],
})
