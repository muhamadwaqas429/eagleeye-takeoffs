import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()], // keeping tailwind if you want
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // "@/..." points to src/
    },
  },
});
