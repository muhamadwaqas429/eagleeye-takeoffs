import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command, isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure JSON imports work in both client and server bundles
  json: {
    stringify: false,
  },
  build: {
    // SSR build output format: ESM so Node scripts can import() it
    ...(isSsrBuild && {
      target: "node18",
      rollupOptions: {
        output: {
          format: "es",
        },
      },
    }),
  },
}));
