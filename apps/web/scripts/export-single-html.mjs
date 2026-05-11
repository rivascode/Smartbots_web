import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { cp } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = fileURLToPath(new URL(".", import.meta.url));
const webDir = resolve(scriptDir, "..");
const repoDir = resolve(webDir, "../..");
const distDir = join(webDir, "dist");
const outputDir = resolve(repoDir, "../Smartbots_web_export_html");

const logoAssets = [
  "logo-smartbots-wordmark.webp",
  "logo-smartbots-official-light.webp",
  "logo-smartbots-mark.webp"
];

function escapeForScript(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function mimeFor(fileName) {
  const ext = extname(fileName);
  if (ext === ".png") return "image/png";
  if (ext === ".svg") return "image/svg+xml";
  return "image/webp";
}

function toDataUrl(fileName) {
  const filePath = join(outputDir, "assets", fileName);
  return `data:${mimeFor(fileName)};base64,${readFileSync(filePath).toString("base64")}`;
}

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
  let js = readFileSync(join(outputDir, jsMatch[1]), "utf8");

  const logoMap = Object.fromEntries(logoAssets.map((asset) => [`assets/${asset}`, toDataUrl(asset)]));
  const helperStart = js.indexOf("function lr(e)");
  const helperEnd = js.indexOf("function tp()", helperStart);

  if (helperStart === -1 || helperEnd === -1) {
    throw new Error("No se encontró el helper de assets en el bundle generado.");
  }

  const helper = js.slice(helperStart, helperEnd);
  js = js.replace(
    helper,
    `function lr(e){const n=e.replace(/^\\\\/+/,\"\");const a=${escapeForScript(logoMap)};return a[n]||\`./\${n}\`}`
  );

  html = html.replace(cssMatch[0], () => `<style>\n${css}\n</style>`);
  html = html.replace(jsMatch[0], () => `<script type="module">\n${js}\n</script>`);
  writeFileSync(indexPath, html);

  console.log(`Export HTML autocontenido listo en: ${outputDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
