import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import path from "path";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

const PROXY_URL = "http://localhost:3001";

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: 3002,
    proxy: {
      "/api": {
        target: PROXY_URL,
        changeOrigin: true,
      },
    },
  },
});
