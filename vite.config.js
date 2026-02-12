import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  base: "/",

  /* ================= DEV SERVER ================= */
  server: {
    host: true,
    allowedHosts: ["lightbox-applicants-cache-expansys.trycloudflare.com"],
  },

  /* ================= PLUGINS ================= */
  plugins: [
    react(),

    // GZIP Compression
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),

    // BROTLI Compression (Best)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],

  /* ================= BUILD OPTIMIZATION ================= */
  build: {
    target: "es2018",
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,

    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          react: ["react", "react-dom"],
          // Router
          router: ["react-router-dom"],
          // Redux
          redux: ["@reduxjs/toolkit", "react-redux"],
          // UI Libraries
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
          // Other vendors
          vendor: ["axios", "react-toastify", "react-hook-form", "react-modal"],
        },
        // Ensure consistent chunk names
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },

    chunkSizeWarningLimit: 1000,
  },

  /* ================= PERFORMANCE ================= */
  esbuild: {
    drop: ["console", "debugger"], // Remove console.logs in production
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  },

  /* ================= OPTIMIZE DEPS ================= */
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@reduxjs/toolkit",
      "react-redux",
    ],
  },
});
