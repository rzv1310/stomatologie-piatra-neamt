import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
import { readFileSync } from "fs";
import { buildSitemapXml } from "./src/config/route-registry";
import { BUSINESS, businessSchemaFields, llmsContactBlock } from "./src/config/business";

// Public text files generated from src/content templates + business config.
const renderTemplate = (file: string) =>
  readFileSync(path.resolve(__dirname, "src/content", file), "utf8")
    .split("{{SITE_URL}}").join(BUSINESS.url)
    .split("{{CONTACT}}").join(llmsContactBlock());
const publicFiles: Record<string, [string, string]> = {
  "llms.txt": ["llms.template.md", "text/plain; charset=utf-8"],
  "robots.txt": ["robots.template.txt", "text/plain; charset=utf-8"],
};

// Injects business identity (NAP, geo, hours) into index.html and emits llms.txt/robots.txt.
const businessPlugin = () => ({
  name: "business-identity",
  transformIndexHtml(html: string) {
    return html
      .split("%BUSINESS_PHONE%").join(BUSINESS.phone.display)
      .replace(/(<script type="application\/ld\+json" data-business-schema>)([\s\S]*?)(<\/script>)/, (_m, a, json, c) => {
        const data = JSON.parse(json);
        const [ctx, type, id, ...rest] = Object.entries(data);
        const merged = Object.fromEntries([ctx, type, id, ...Object.entries(businessSchemaFields()), ...rest]);
        return `${a}\n${JSON.stringify(merged, null, 2)}\n${c}`;
      });
  },
  configureServer(server: any) {
    for (const [name, [tpl, type]] of Object.entries(publicFiles)) {
      server.middlewares.use(`/${name}`, (_req: any, res: any) => {
        res.setHeader("Content-Type", type);
        res.end(renderTemplate(tpl));
      });
    }
  },
  generateBundle(this: any) {
    for (const [name, [tpl]] of Object.entries(publicFiles)) {
      this.emitFile({ type: "asset", fileName: name, source: renderTemplate(tpl) });
    }
  },
});

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
    businessPlugin(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
