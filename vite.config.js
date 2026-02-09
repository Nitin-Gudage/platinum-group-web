import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ["orchestra-buyers-cave-silent.trycloudflare.com"]
  },
  plugins: [react()],
})
