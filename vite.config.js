import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ["carried-organized-ghz-smell.trycloudflare.com"]
  },
  plugins: [react()],
})
