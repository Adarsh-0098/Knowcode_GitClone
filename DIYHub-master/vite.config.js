import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      three: "three",
    },
  },
  // Default publicDir
  publicDir: "public", // Keep this as 'public' for static assets
});
