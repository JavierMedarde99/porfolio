# porfolio

Portfolio personal de **Javi Med** — Backend & Full Stack Developer (Java, Spring Boot, microservicios y cloud, con frontends en Svelte/React y apps en Flutter).

<!-- TODO: añadir URL de producción cuando Vercel esté conectado -->

Secciones del sitio: Home, About, Experience, Projects (con filtros y páginas por proyecto) y Contact (formulario funcional con server actions).

## Stack

- SvelteKit 2 + Svelte 5 (runes) + TypeScript estricto
- Tailwind CSS 4 (vía `@tailwindcss/vite`) + dark mode con persistencia
- Vitest + Testing Library (unit) y Playwright (E2E)
- ESLint (flat) + Prettier
- CI con GitHub Actions (lint, typecheck, build, test, e2e) y branch protection en `main`
- Deploy en Vercel (`@sveltejs/adapter-vercel`)

## Proyectos registrados

Fuente: `src/lib/data/projects.ts`.

| Proyecto        | Categoría     | Stack                                                     |
| --------------- | ------------- | --------------------------------------------------------- |
| Money Manager   | Full Stack    | Spring Boot, PostgreSQL, JWT · React, TypeScript, Zustand |
| F1-Bet          | Mobile        | Flutter, Dart, Supabase                                   |
| Collection      | Full Stack    | Spring Boot hexagonal, MongoDB · React, TypeScript        |
| Wiki Collection | Documentation | Markdown, GitHub Wiki                                     |
| Portfolio       | Frontend      | SvelteKit, TypeScript, Tailwind CSS                       |

## Cursos y certificaciones

Fuente: `COURSES` en `src/lib/data/experience.ts` (misma lista que el CV, con enlace al certificado).

| Curso                                                 | Plataforma | Certificado                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spring Test                                           | Udemy      | [ver](https://drive.google.com/file/d/1HAuGXAN3x-3hqFor722IntGpYwsZGe-u/view?usp=sharing)                                                                                                                                                                               |
| SOLID Principles                                      | Udemy      | [ver](https://drive.google.com/file/d/1akuOijmkQlijLKlsMUr9DELvFwcjIMbM/view?usp=sharing)                                                                                                                                                                               |
| MongoDB                                               | Platzi     | [ver](https://drive.google.com/file/d/1GyViCy7Men4pjPIcCSHMgZqeniozjHOR/view?usp=sharing)                                                                                                                                                                               |
| React                                                 | Platzi     | [ver](https://drive.google.com/file/d/1cPOp3So9ji4ezOWsMpI0BIbG58UaR6Al/view?usp=sharing)                                                                                                                                                                               |
| MariaDB                                               | Udemy      | [ver](https://drive.google.com/file/d/13TzQ2PVrYzq2us4_io8Ku75ytO-frnSl/view?usp=sharing)                                                                                                                                                                               |
| Python                                                | Udemy      | [ver](https://drive.google.com/file/d/1stP1vanF-2yPUr-QNSQWKdx-l-zfLlCj/view?usp=sharing)                                                                                                                                                                               |
| Pack IA (AI for Work, LLM Concepts, Machine Learning) | Datacamp   | [1](https://drive.google.com/file/d/1c412FtiRvSe_FvbOXohqSs0d9isOKhgn/view?usp=sharing) [2](https://drive.google.com/file/d/1vnexAmkcdcdWHavvTGOsURHFxjBbNxo0/view?usp=sharing) [3](https://drive.google.com/file/d/1GeYwadT6rEfXosM_-Ph_SOqXkZqOSnbm/view?usp=sharing) |

## Arranque

```bash
npm install
npm run dev      # http://localhost:5173
```

## Checks y tests

```bash
npm run lint          # ESLint
npm run format:check  # Prettier
npm run check         # svelte-check + tipos
npm run test:run      # Vitest (unit)
npm run e2e           # Playwright (E2E, levanta preview solo)
npm run build         # build de producción
```

## Estructura

```
src/
  routes/            # páginas (+page.svelte) y endpoints (sitemap.xml, actions de contact)
  lib/
    actions/         # action use:reveal (scroll reveal)
    components/      # layout, home, projects, experience, contact, seo
    data/            # projects.ts, experience.ts, skills.ts, navigation.ts
    stores/          # theme (dark/light)
    types/           # Project, Experience, ...
    utils/           # seo.ts (SITE, pageTitle)
  test/              # setup + mocks $app para Vitest
tests/e2e/           # specs Playwright
```

## Deploy en Vercel

1. Importa el repo en Vercel (framework preset: SvelteKit).
2. Variables de entorno en el proyecto:
   - `RESEND_API_KEY` (obligatoria para el formulario)
   - `CONTACT_TO_EMAIL` (obligatoria para el formulario)
   - `CONTACT_FROM_EMAIL` (opcional, por defecto `onboarding@resend.com`)
3. Cada push a `main` despliega producción; cada PR genera un preview deployment.
