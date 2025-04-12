import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const PROXY_URL = "http://localhost:3001";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // @NOTE: by default we need to add *.svg?react postfix
      include: /\.svg$/,
    }),
    tailwindcss(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
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
