import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import SitemapPlugin from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    SitemapPlugin({
      hostname: "https://woodrockgroup.in", // Set your live website domain
      routes: ["/about", "/contact", "/careers"], // Your specified routes
      // Other optional configurations (comment out if not needed)
      // exclude: [],  // Add excluded routes here if necessary
      // filename: 'sitemap.xml', // Use default filename
      // dest: 'public', // Use default output directory
      // changefreq: 'daily', // Use default update frequency
      // priority: 1, // Use default priority
      // lastmod: null, // Use default last modification date
    }),
    react(),
  ],
  assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.otf"],
});
