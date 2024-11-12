import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    port: process.env.PORT || 3000,
    proxy: {
      "/api": {
        target: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
