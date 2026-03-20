import { defineConfig } from "vite-plus";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon-96x96.png",
        "favicon.ico",
        "apple-touch-icon.png",
        "web-app-manifest-192x192.png",
        "web-app-manifest-512x512.png",
        "site.webmanifest",
      ],
      // Use RealFaviconGenerator `public/site.webmanifest` (linked from index.html); avoid duplicate <link rel="manifest">.
      manifest: false,
    }),
  ],
  lint: { options: { typeAware: true, typeCheck: true } },
});
