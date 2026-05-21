import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { cp } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = fileURLToPath(new URL(".", import.meta.url));
const webDir = resolve(scriptDir, "..");
const repoDir = resolve(webDir, "../..");
const distDir = join(webDir, "dist");
const outputDir = resolve(repoDir, "../Smartbots_web_export_html");

async function main() {
  if (!existsSync(join(distDir, "index.html"))) {
    throw new Error("No existe apps/web/dist. Ejecuta pnpm --filter @smartbots/web build primero.");
  }

  rmSync(outputDir, { recursive: true, force: true });
  mkdirSync(outputDir, { recursive: true });
  await cp(distDir, outputDir, { recursive: true });

  const indexPath = join(outputDir, "index.html");
  let html = readFileSync(indexPath, "utf8");
  const cssMatch = html.match(/<link rel="stylesheet"(?: crossorigin)? href="\.\/(assets\/[^"]+\.css)">/);
  const jsMatch = html.match(/<script type="module" crossorigin src="\.\/(assets\/[^"]+\.js)"><\/script>/);

  if (!cssMatch || !jsMatch) {
    throw new Error("No se encontraron los assets CSS/JS generados por Vite.");
  }

  const css = readFileSync(join(outputDir, cssMatch[1]), "utf8");

  html = html.replace(cssMatch[0], () => `<style>\n${css}\n</style>`);
  html = html.replace(jsMatch[0], "");
  html = html.replace("</body>", () => `<script src="./${jsMatch[1]}"></script>\n  </body>`);
  writeFileSync(indexPath, html);

  console.log(`Export HTML portable listo en: ${outputDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
