import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
