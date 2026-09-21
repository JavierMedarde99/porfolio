# porfolio

Portfolio personal — SvelteKit + TypeScript + Tailwind CSS.

## Stack

- SvelteKit 2 + Svelte 5
- TypeScript (strict)
- Tailwind CSS 4 (vía `@tailwindcss/vite`)
- Vite

## Arranque

```bash
npm install
npm run dev
```

Abre http://localhost:5173.

## Checks

```bash
npm run check   # svelte-check + tipos
npm run build   # build de producción
```

## Deploy en Vercel

1. Importa el repo en Vercel (framework preset: SvelteKit).
2. Variables de entorno en el proyecto:
   - `RESEND_API_KEY` (obligatoria para el formulario)
   - `CONTACT_TO_EMAIL` (obligatoria para el formulario)
   - `CONTACT_FROM_EMAIL` (opcional, por defecto `onboarding@resend.com`)
3. Cada push a `main` despliega producción; cada PR genera un preview deployment.
