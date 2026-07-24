import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        // Must match the backend's port. The backend defaults to 5000
        // (see backend/src/config/env.js) unless you set PORT in backend/.env.
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
