import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ["lopez-lion-composition-thu.trycloudflare.com"]
  },
  plugins: [react()],
})
