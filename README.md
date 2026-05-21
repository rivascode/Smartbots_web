<p align="center">
  <img src="apps/web/public/assets/logo-smartbots-wordmark.png" alt="SMARTBOTS" width="280" />
</p>

<h1 align="center">Smartbots_web</h1>

<p align="center">
  Web corporativa de SMARTBOTS para presentar automatización de procesos, software empresarial, sistemas conectados e infraestructura para empresas en Perú y LATAM.
</p>

<p align="center">
  <a href="https://github.com/rivascode/Smartbots_web">
    <img alt="Repositorio" src="https://img.shields.io/badge/GitHub-Smartbots__web-111827?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <img alt="React" src="https://img.shields.io/badge/React-18-22d3ee?style=for-the-badge&logo=react&logoColor=111827" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3b82f6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-4-a855f7?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-10-f59e0b?style=for-the-badge&logo=pnpm&logoColor=111827" />
</p>

<p align="center">
  <a href="https://github.com/rivascode/Smartbots_web/raw/main/exports/smartbots_web_export_html.zip">
    <img alt="Descargar HTML" src="https://img.shields.io/badge/Descargar-HTML_para_presentación-d81bb8?style=for-the-badge&logo=html5&logoColor=white" />
  </a>
</p>

---

## Vista General

Este repositorio contiene una web tipo SPA con rutas por hash:

```text
#inicio
#nosotros
#servicios
#beneficios
#contacto
```

La web incluye:

- Heroes animados con canvas, gradientes, partículas y visuales de marca.
- Copy comercial orientado a gerentes y usuarios no técnicos.
- Widget flotante de WhatsApp con el robot de SMARTBOTS.
- Formulario de contacto conectado a una API Express.
- SEO dinámico por página, Open Graph, Twitter Cards, canonical y JSON-LD.
- Export HTML autocontenido para abrir en presentaciones sin instalar dependencias.

## Stack Técnico

| Capa | Tecnología |
| --- | --- |
| Monorepo | pnpm workspaces |
| Frontend | React 18 + TypeScript |
| Build web | Vite |
| Backend | Node.js + Express |
| Validación | Zod |
| Iconos | lucide-react |
| Estilos | CSS global, responsive y animaciones |

## Requisitos

- Node.js 20 o superior.
- pnpm 10.12.1 o compatible.
- Git.

Activar pnpm con Corepack:

```bash
corepack enable
```

## Instalación

```bash
git clone https://github.com/rivascode/Smartbots_web.git
cd Smartbots_web
pnpm install
```

## Desarrollo Local

Web + API:

```bash
pnpm dev
```

Solo web:

```bash
pnpm dev:web
```

Solo API:

```bash
pnpm dev:api
```

URLs locales:

| Servicio | URL |
| --- | --- |
| Web | `http://127.0.0.1:5173/#inicio` |
| API health | `http://127.0.0.1:4000/api/health` |

## Validación

Antes de subir cambios:

```bash
pnpm typecheck
pnpm build
```

Comandos específicos:

```bash
pnpm --filter @smartbots/web typecheck
pnpm --filter @smartbots/web build
pnpm --filter @smartbots/api typecheck
pnpm --filter @smartbots/api build
```

## Producción

### Web

Compilar la web:

```bash
pnpm build:web
```

Salida generada:

```text
apps/web/dist/
```

Esa carpeta se puede publicar en Vercel, Netlify, Cloudflare Pages, Hostinger, cPanel, Nginx o cualquier hosting estático.

Comando recomendado de build en hosting:

```bash
pnpm install --frozen-lockfile
pnpm build:web
```

Directorio de salida:

```text
apps/web/dist
```

Como la web usa rutas por hash (`#inicio`, `#servicios`, etc.), no requiere reglas especiales de rewrite para navegación interna.

### API

Compilar API:

```bash
pnpm --filter @smartbots/api build
```

Ejecutar API compilada:

```bash
pnpm --filter @smartbots/api start
```

Variables de entorno:

```env
PORT=4000
WEB_ORIGIN=https://www.smartbots.pe
```

`WEB_ORIGIN` debe coincidir con el dominio real de la web para que CORS permita el formulario de contacto.

### Preview de Build

Para revisar localmente la versión compilada:

```bash
pnpm build:web
pnpm preview:web
```

URL:

```text
http://127.0.0.1:4173/#inicio
```

## Export HTML para Presentación

Generar versión autocontenida:

```bash
pnpm export:html
```

Esto crea:

```text
../Smartbots_web_export_html/index.html
```

Para compartirla como ZIP:

```bash
cd ..
zip -qr Smartbots_web/exports/smartbots_web_export_html.zip Smartbots_web_export_html
```

Uso:

1. Abrir la carpeta `Smartbots_web_export_html`.
2. Hacer doble clic en `index.html`.
3. Usarlo en reuniones o presentaciones sin servidor local.

También se puede descargar desde GitHub:

[Descargar `smartbots_web_export_html.zip`](https://github.com/rivascode/Smartbots_web/raw/main/exports/smartbots_web_export_html.zip)

## SEO

Archivos principales:

```text
apps/web/index.html
apps/web/src/app/seo.ts
apps/web/public/sitemap.xml
apps/web/public/robots.txt
```

Incluye:

- Title y description por página.
- Keywords alineadas al servicio.
- Canonical por ruta.
- Open Graph para compartir en redes.
- Twitter Cards.
- JSON-LD con `Organization`, `WebSite`, `WebPage`, `Service` y acción de agenda.
- `robots.txt` y `sitemap.xml`.

Dominio configurado:

```text
https://www.smartbots.pe/
```

Si cambia el dominio, actualizar `siteUrl` en `apps/web/src/app/seo.ts`, `sitemap.xml`, `robots.txt` y los metadatos de `apps/web/index.html`.

## Dónde Editar Contenido

Contenido reutilizable:

```text
apps/web/src/data/siteContent.ts
```

Datos de marca y contacto:

```text
apps/web/src/data/siteSettings.ts
```

Páginas:

```text
apps/web/src/features/home/HomePage.tsx
apps/web/src/features/about/AboutPage.tsx
apps/web/src/features/services/ServicesPage.tsx
apps/web/src/features/benefits/BenefitsPage.tsx
apps/web/src/features/contact/ContactPage.tsx
```

Estilos y responsive:

```text
apps/web/src/styles/global.css
```

## Estructura

```text
Smartbots_web/
  apps/
    api/
      src/
        config/
        middleware/
        routes/
        schemas/
        server.ts
    web/
      public/
        assets/
      scripts/
        export-single-html.mjs
      src/
        app/
        components/
        data/
        features/
        hooks/
        services/
        styles/
  packages/
    shared/
  exports/
    smartbots_web_export_html.zip
```

## Scripts Principales

| Comando | Uso |
| --- | --- |
| `pnpm dev` | Levanta web y API. |
| `pnpm dev:web` | Levanta solo la web. |
| `pnpm dev:api` | Levanta solo la API. |
| `pnpm typecheck` | Valida TypeScript en todos los paquetes. |
| `pnpm build` | Compila todos los paquetes. |
| `pnpm build:web` | Compila solo la web. |
| `pnpm preview:web` | Previsualiza la web compilada. |
| `pnpm export:html` | Genera HTML autocontenido para presentación. |

---

<p align="center">
  <strong>SMARTBOTS</strong><br />
  Procesos más simples para empresas que quieren evolucionar.
</p>
