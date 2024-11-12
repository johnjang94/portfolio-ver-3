import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_BACKEND_URL || "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
