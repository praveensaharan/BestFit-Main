import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 10000, // Set the limit to a higher value (e.g., 1000KB)
  },
  plugins: [react()],
});
