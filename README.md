# Smartbots_web

Sitio web y plataforma base de SMARTBOTS. El proyecto presenta la propuesta comercial de la marca, sus servicios, beneficios, enfoque operativo y canales de contacto con una experiencia visual animada, responsive y preparada para seguir iterando.

## Estado actual

- Web principal funcionando con navegación por hash: `#inicio`, `#nosotros`, `#servicios`, `#beneficios`, `#contacto`.
- Hero principal con fondo canvas animado, panel visual de resultados y barras de progreso en movimiento.
- Secciones internas rediseñadas con efectos tipo liquid glass, fondos animados, rutas visuales, contadores y transiciones al hacer scroll.
- Logo oficial preparado como assets web en `apps/web/public/assets`.
- API Express incluida para health check y recepción de contactos.

## Tecnologías usadas

- **Monorepo:** pnpm workspaces.
- **Frontend:** React 18, TypeScript, Vite.
- **Backend:** Node.js, Express, TypeScript.
- **Validación:** Zod para esquemas del API.
- **Iconografía:** `lucide-react`.
- **Estilos:** CSS global propio en `apps/web/src/styles/global.css`.
- **Animaciones:** CSS keyframes, IntersectionObserver para scroll reveal, Canvas 2D para fondos con partículas y conexiones.
- **Paquete compartido:** `@smartbots/shared` para tipos compartidos entre web y API.

## Requisitos

- Node.js 20 o superior recomendado.
- pnpm 10.12.1 o compatible.
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

## Levantar el proyecto

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

- Web: `http://127.0.0.1:5173/#inicio`
- API health: `http://127.0.0.1:4000/api/health`

## Scripts principales

```bash
pnpm build
pnpm typecheck
pnpm --filter @smartbots/web build
pnpm --filter @smartbots/web typecheck
pnpm --filter @smartbots/api build
pnpm --filter @smartbots/api typecheck
```

## Estructura del proyecto

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

## Mapa de secciones

### Inicio

Archivo principal: `apps/web/src/features/home/HomePage.tsx`

- Hero con `HeroMotionBackground` y `DashboardVisual`.
- Bloque de soluciones tecnológicas con card oscura de automatización.
- Sección de impacto con fondo animado, contadores y barras.
- Industrias.
- Razones para elegir SMARTBOTS.
- Ruta creativa de siguiente paso con 4 etapas.

### Nosotros

Archivo principal: `apps/web/src/features/about/AboutPage.tsx`

- Hero oscuro con órbita del logo SMARTBOTS.
- Sección de enfoque con contraste claro, cards tipo glass e iconos.
- Sección de transformación operativa rediseñada con visual central y etapas.

### Servicios

Archivo principal: `apps/web/src/features/services/ServicesPage.tsx`

- Hero con visual de automatización, bots, APIs, datos y cloud.
- Grilla de soluciones en fondo oscuro animado.
- Cards tipo liquid glass con textos centrados e iconos de `lucide-react`.
- Se eliminó el CTA final para evitar repetición.

### Beneficios

Archivo principal: `apps/web/src/features/benefits/BenefitsPage.tsx`

- Hero diferenciado con visual de impacto económico y operativo.
- Visual `BenefitsImpactVisual` con métricas, barras y contadores.
- Enfoque en costos, tiempo, recursos, KPIs y decisiones.

### Contacto

Archivo principal: `apps/web/src/features/contact/ContactPage.tsx`

- Hero con visual específico de canales de contacto.
- Formulario conectado al cliente `contactApi`.
- Información de contacto empresarial.

## Componentes visuales clave

- `HeroMotionBackground.tsx`: canvas reutilizable para fondos animados con partículas, líneas y barridos de luz.
- `DashboardVisual.tsx`: panel visual del hero principal con métricas, barras animadas y bullets.
- `ServiceAutomationVisual.tsx`: visual de servicios orientado a desarrollo, bots, APIs, datos e infraestructura.
- `BenefitsImpactVisual.tsx`: visual de beneficios con indicadores, contadores y estados de impacto.
- `ContactChannelsVisual.tsx`: representación visual de contacto multicanal.
- `AboutOrbit.tsx`: órbita animada con el isotipo de SMARTBOTS para la página Nosotros.
- `AnimatedCounter.tsx`: contador visual reutilizable para métricas.
- `ScrollEnhancements.tsx`: activa transiciones suaves al entrar en viewport y agrega botón flotante para volver arriba.

## Sistema visual

La identidad visual se apoya en:

- Magenta SMARTBOTS para energía, innovación y llamados a la acción.
- Cyan para tecnología, datos y automatización.
- Fondos oscuros para impacto, hero y secciones de alto contraste.
- Fondos claros con glass para secciones explicativas.
- Bordes suaves, blur, transparencias y sombras para efecto liquid glass.
- Grillas sutiles y partículas animadas para reforzar la idea de sistemas conectados.

Los estilos están centralizados en:

```text
apps/web/src/styles/global.css
```

Ahí se ajustan:

- Colores base.
- Tipografías y escalas.
- Layout responsive.
- Animaciones de hero y fondos.
- Scroll reveal.
- Cards tipo glass.
- Estados hover.
- Breakpoints mobile/tablet/desktop.

## Dónde editar textos

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

Los textos muy específicos de cada hero o visual están dentro de su página o componente visual correspondiente.

## Logos y assets

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

## Criterios de diseño aplicados

- Cada página tiene un hero de tamaño similar al inicio, pero con diseño distinto para evitar repetición.
- Las secciones de servicios, beneficios y contacto usan visuales propios, no la misma ventana tipo dashboard.
- Las animaciones de scroll se aplican globalmente para que los bloques entren de forma suave.
- Los textos principales se ajustaron para explicar mejor el valor de SMARTBOTS.
- Se priorizó contraste en fondos oscuros y legibilidad en cards glass.
- Responsive revisado para tamaños tipo iPhone 15 Pro Max, especialmente en Nosotros.

## Flujo recomendado para seguir trabajando

1. Levantar la web:

   ```bash
   pnpm dev:web
   ```

2. Abrir:

   ```text
   http://127.0.0.1:5173/#inicio
   ```

3. Editar textos en `siteContent.ts`.
4. Editar layout de páginas en `features/*`.
5. Editar animaciones y responsive en `global.css`.
6. Verificar:

   ```bash
   pnpm --filter @smartbots/web typecheck
   pnpm --filter @smartbots/web build
   ```

## Verificación realizada

Antes de preparar esta documentación se verificó:

```bash
pnpm.cmd --filter @smartbots/web build
pnpm.cmd --filter @smartbots/web typecheck
```

Ambos comandos pasaron correctamente.

## Notas para publicación

El repositorio objetivo debe llamarse:

```text
Smartbots_web
```

Si el proyecto aún no tiene Git inicializado:

```bash
git init
git branch -M main
git add .
git commit -m "Initial Smartbots web project"
git remote add origin https://github.com/<usuario>/Smartbots_web.git
git push -u origin main
```

Si el repositorio ya existe y tiene remoto configurado:

```bash
git add .
git commit -m "Document and polish Smartbots web"
git push
```

## Recomendaciones para el lunes

- Revisar la web completa en desktop y mobile.
- Confirmar textos finales de cada servicio.
- Reemplazar placeholders de clientes cuando existan logos autorizados.
- Conectar formulario de contacto a correo, CRM o WhatsApp empresarial según decisión comercial.
- Definir hosting final para frontend y API.
