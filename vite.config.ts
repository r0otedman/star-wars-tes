import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      shared: path.resolve(__dirname, "./src/shared"),
      app: path.resolve(__dirname, "./src/app"),
      features: path.resolve(__dirname, "./src/features"),
      entities: path.resolve(__dirname, "./src/entities"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/app/styles/variables/variables.scss" as *;`,
      },
    },
  },
});
