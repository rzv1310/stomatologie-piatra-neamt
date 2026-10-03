import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
import { buildSitemapXml } from "./src/config/route-registry";

// Generates /sitemap.xml from the route registry on every build and serves it in dev.
const sitemapPlugin = () => ({
  name: "sitemap-from-registry",
  configureServer(server: any) {
    server.middlewares.use("/sitemap.xml", (_req: any, res: any) => {
      res.setHeader("Content-Type", "application/xml");
      res.end(buildSitemapXml());
    });
  },
  generateBundle(this: any) {
    this.emitFile({ type: "asset", fileName: "sitemap.xml", source: buildSitemapXml() });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    imagetools(),
    sitemapPlugin(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
