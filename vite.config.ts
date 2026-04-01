import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://www.neuralflow.ai",
      dynamicRoutes: ["/", "/about", "/de", "/de/about"],
      exclude: ["/404"],
      generateRobotsTxt: true,
      i18n: {
        defaultLanguage: "en",
        languages: ["en", "de"],
        strategy: "prefix",
      },
    }),
  ],
  server: {
    allowedHosts: ["soppingly-ungrumpy-rachal.ngrok-free.dev"],
  },
});
