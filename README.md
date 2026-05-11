<p align="center">
  <img src="apps/web/public/assets/logo-smartbots-wordmark.png" alt="SMARTBOTS" width="280" />
</p>

<h1 align="center">Smartbots_web</h1>

<p align="center">
  Sitio web y plataforma base de SMARTBOTS: automatización, inteligencia artificial, desarrollo de software e infraestructura TI para operaciones más eficientes.
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
  <img alt="Node" src="https://img.shields.io/badge/Node.js-API-16a34a?style=flat-square&logo=node.js&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-Backend-111827?style=flat-square&logo=express&logoColor=white" />
  <img alt="Zod" src="https://img.shields.io/badge/Zod-Validación-2563eb?style=flat-square" />
  <img alt="Lucide" src="https://img.shields.io/badge/Lucide-Iconos-ec4899?style=flat-square" />
  <img alt="Canvas" src="https://img.shields.io/badge/Canvas-Animaciones-06b6d4?style=flat-square" />
</p>

<p align="center">
  <a href="https://github.com/rivascode/Smartbots_web/raw/main/exports/smartbots_web_export_html.zip">
    <img alt="Descargar HTML" src="https://img.shields.io/badge/Descargar-HTML_comprimido-d81bb8?style=for-the-badge&logo=html5&logoColor=white" />
  </a>
</p>

---

## Vista General

<table>
  <tr>
    <td width="33%">
      <strong>Web animada</strong><br />
      Hero con canvas, partículas, barras vivas, transiciones al hacer scroll y visuales diferenciados por página.
    </td>
    <td width="33%">
      <strong>Monorepo ordenado</strong><br />
      Frontend, backend y paquete compartido separados para seguir creciendo sin mezclar responsabilidades.
    </td>
    <td width="33%">
      <strong>Lista para continuar</strong><br />
      README detallado, scripts claros, assets oficiales y estructura documentada para retomarlo desde otra PC o Mac.
    </td>
  </tr>
</table>

SMARTBOTS_web presenta la propuesta comercial de la marca, sus servicios, beneficios, enfoque operativo y canales de contacto. La experiencia está pensada para sentirse tecnológica, visual, moderna y editable.

## Descarga Rápida HTML

Para compartir la web como archivo comprimido y abrirla sin instalar dependencias:

[Descargar `smartbots_web_export_html.zip`](https://github.com/rivascode/Smartbots_web/raw/main/exports/smartbots_web_export_html.zip)

Uso recomendado:

1. Descargar el ZIP.
2. Descomprimirlo.
3. Abrir `Smartbots_web_export_html/index.html` con doble clic.

Para regenerar el comprimido desde el proyecto:

```bash
pnpm --filter @smartbots/web export:html
cd ..
zip -qr smartbots_web_export_html.zip Smartbots_web_export_html
```

## Estado Actual

| Área | Estado |
| --- | --- |
| Navegación | Web principal funcionando con rutas por hash: `#inicio`, `#nosotros`, `#servicios`, `#beneficios`, `#contacto`. |
| Inicio | Hero oscuro animado, panel visual de resultados, barra de métricas, sección de impacto y ruta de trabajo. |
| Nosotros | Hero con órbita de marca, enfoque operativo y sección de transformación rediseñada. |
| Servicios | Hero diferenciado, visual de automatización y grilla oscura tipo liquid glass. |
| Beneficios | Visual de impacto con métricas, contadores y barras animadas. |
| Contacto | Visual específico de canales, CTA y formulario conectado al API. |
| API | Express con health check y endpoint de contacto validado con Zod. |

## Paleta Visual

| Color | Uso | Hex aproximado |
| --- | --- | --- |
| <span style="display:inline-block;width:18px;height:18px;border-radius:5px;background:#d81bb8;"></span> Magenta SMARTBOTS | Innovación, acentos, CTAs, energía visual. | `#d81bb8` |
| <span style="display:inline-block;width:18px;height:18px;border-radius:5px;background:#16bdd7;"></span> Cyan tecnológico | Datos, automatización, conexiones y movimiento. | `#16bdd7` |
| <span style="display:inline-block;width:18px;height:18px;border-radius:5px;background:#111827;"></span> Dark UI | Hero, impacto, contraste y profundidad. | `#111827` |
| <span style="display:inline-block;width:18px;height:18px;border-radius:5px;background:#f8fbff;border:1px solid #dbeafe;"></span> Light glass | Secciones explicativas, fondos suaves y cards claras. | `#f8fbff` |

## Stack Técnico

| Capa | Tecnología | Uso |
| --- | --- | --- |
| Monorepo | pnpm workspaces | Organización de apps y paquetes compartidos. |
| Frontend | React 18 + TypeScript | Interfaz web, componentes y páginas. |
| Build web | Vite | Desarrollo rápido y build optimizado. |
| Backend | Node.js + Express | API base para health y contacto. |
| Validación | Zod | Validación del payload de contacto. |
| Iconos | lucide-react | Iconografía consistente en cards, botones y visuales. |
| Animación | CSS + Canvas 2D + IntersectionObserver | Fondos vivos, barras, contadores y scroll reveal. |
| Shared | `@smartbots/shared` | Tipos comunes como `PageSlug`. |

## Requisitos

- Node.js 20 o superior recomendado.
- pnpm 10.12.1 o compatible.
- Git instalado para versionar y subir cambios.
- En Windows, si PowerShell bloquea `pnpm`, usar `pnpm.cmd`.

## Instalación

```bash
corepack enable
pnpm install
```

En Windows:

```powershell
corepack enable
pnpm.cmd install
```

## Levantar el Proyecto

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

## Scripts Principales

```bash
pnpm build
pnpm typecheck
pnpm --filter @smartbots/web build
pnpm --filter @smartbots/web typecheck
pnpm --filter @smartbots/api build
pnpm --filter @smartbots/api typecheck
```

## Estructura del Proyecto

```text
Smartbots_web/
  apps/
    api/
      src/
        config/              Variables y configuración del API.
        middleware/          Manejo centralizado de errores.
        routes/              Rutas HTTP: health y contacto.
        schemas/             Validaciones con Zod.
        server.ts            Entrada del servidor Express.
      package.json
      tsconfig.json

    web/
      public/
        assets/              Logos oficiales, favicon y assets públicos.
      src/
        app/
          App.tsx            Shell principal, routing por hash y layout global.
          navigation.ts      Lectura y normalización de la ruta actual.
        components/
          layout/            Header y Footer.
          ui/                Botones, cards, badges, scroll reveal, contadores.
          visuals/           Visuales animados de hero, servicios, beneficios y contacto.
        data/
          siteContent.ts     Textos, listas, servicios, beneficios e industrias.
        features/
          about/             Página Nosotros.
          benefits/          Página Beneficios.
          contact/           Página Contacto.
          home/              Página Inicio.
          services/          Página Servicios.
        hooks/               Hooks reutilizables.
        services/            Cliente para consumir el API.
        styles/
          global.css         Sistema visual, responsive y animaciones.
        main.tsx             Entrada React.
      package.json
      vite.config.ts

  packages/
    shared/
      src/index.ts           Tipos compartidos, incluyendo PageSlug.
      package.json

  pnpm-workspace.yaml
  package.json
  README.md
```

## Mapa de Páginas

| Página | Archivo | Rol visual |
| --- | --- | --- |
| Inicio | `apps/web/src/features/home/HomePage.tsx` | Primera impresión, tecnología, impacto y ruta de trabajo. |
| Nosotros | `apps/web/src/features/about/AboutPage.tsx` | Propósito operativo, enfoque y transformación. |
| Servicios | `apps/web/src/features/services/ServicesPage.tsx` | Soluciones separadas por necesidad real. |
| Beneficios | `apps/web/src/features/benefits/BenefitsPage.tsx` | Impacto económico, tiempo, recursos y decisiones. |
| Contacto | `apps/web/src/features/contact/ContactPage.tsx` | Conversión, contacto directo y formulario. |

## Componentes Visuales Clave

| Componente | Función |
| --- | --- |
| `HeroMotionBackground.tsx` | Canvas reutilizable para fondos animados con partículas, líneas y barridos de luz. |
| `DashboardVisual.tsx` | Panel visual del hero principal con métricas, barras animadas y bullets. |
| `ServiceAutomationVisual.tsx` | Visual de servicios orientado a desarrollo, bots, APIs, datos e infraestructura. |
| `BenefitsImpactVisual.tsx` | Visual de beneficios con indicadores, contadores y estados de impacto. |
| `ContactChannelsVisual.tsx` | Representación visual de contacto multicanal. |
| `AboutOrbit.tsx` | Órbita animada con el isotipo de SMARTBOTS para la página Nosotros. |
| `AnimatedCounter.tsx` | Contador visual reutilizable para métricas. |
| `ScrollEnhancements.tsx` | Transiciones suaves al entrar en viewport y botón flotante para volver arriba. |

## Sistema de Diseño

<table>
  <tr>
    <td><strong>Glass UI</strong></td>
    <td>Cards con blur, bordes translúcidos, sombras suaves y apariencia ligera.</td>
  </tr>
  <tr>
    <td><strong>Fondos vivos</strong></td>
    <td>Canvas, grillas, partículas, líneas y gradientes para comunicar sistemas conectados.</td>
  </tr>
  <tr>
    <td><strong>Contraste por sección</strong></td>
    <td>Heroes oscuros, bloques claros de lectura y secciones de impacto con mayor profundidad.</td>
  </tr>
  <tr>
    <td><strong>Responsive</strong></td>
    <td>Ajustes para desktop, tablet y mobile, incluyendo tamaños tipo iPhone 15 Pro Max.</td>
  </tr>
</table>

Los estilos están centralizados en:

```text
apps/web/src/styles/global.css
```

Ahí se ajustan colores, tipografías, layout, animaciones, scroll reveal, cards glass, hover states y breakpoints.

## Dónde Editar Contenido

La mayor parte del contenido editable vive en:

```text
apps/web/src/data/siteContent.ts
```

Editar ahí cuando se necesite cambiar:

- Servicios.
- Beneficios.
- Industrias.
- Razones de SMARTBOTS.
- Datos de contacto.
- Listas y textos reutilizados.

Los textos específicos de cada hero o visual están dentro de su página o componente visual correspondiente.

## Logos y Assets

Assets generados desde el logo oficial suministrado:

```text
apps/web/public/assets/logo-smartbots-wordmark.webp
apps/web/public/assets/logo-smartbots-wordmark.png
apps/web/public/assets/logo-smartbots-official.webp
apps/web/public/assets/logo-smartbots-official.png
apps/web/public/assets/logo-smartbots-official-light.webp
apps/web/public/assets/logo-smartbots-official-light.png
apps/web/public/assets/logo-smartbots-mark.webp
apps/web/public/assets/logo-smartbots-mark.png
apps/web/public/assets/favicon-32.png
apps/web/public/assets/apple-touch-icon.png
apps/web/public/assets/smartbots-app-icon.png
```

El header usa el wordmark oficial. Los visuales internos usan el isotipo cuando se necesita mayor recordación de marca.

## Verificación

Antes de subir el proyecto se verificó:

```bash
pnpm.cmd build
pnpm.cmd typecheck
```

También se validó la web con:

```bash
pnpm.cmd --filter @smartbots/web build
pnpm.cmd --filter @smartbots/web typecheck
```

## Flujo Recomendado para el Lunes

1. Clonar el repo:

   ```bash
   git clone https://github.com/rivascode/Smartbots_web.git
   cd Smartbots_web
   ```

2. Instalar dependencias:

   ```bash
   corepack enable
   pnpm install
   ```

3. Levantar la web:

   ```bash
   pnpm dev:web
   ```

4. Abrir:

   ```text
   http://127.0.0.1:5173/#inicio
   ```

5. Editar textos en `siteContent.ts`.
6. Editar layouts en `features/*`.
7. Editar animaciones y responsive en `global.css`.
8. Verificar antes de subir cambios:

   ```bash
   pnpm build
   pnpm typecheck
   ```

## Próximos Pasos

| Prioridad | Tarea |
| --- | --- |
| Alta | Revisar la web completa en desktop y mobile. |
| Alta | Confirmar textos finales de cada servicio. |
| Media | Reemplazar placeholders de clientes con logos autorizados. |
| Media | Conectar formulario a correo, CRM o WhatsApp empresarial. |
| Media | Definir hosting final para frontend y API. |

---

<p align="center">
  <strong>SMARTBOTS</strong><br />
  Tecnología con propósito operativo.
</p>
