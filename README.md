# The Barber's · Motril

Web de una sola página para la barbería The Barber's (Motril, Granada).
React + TypeScript + Vite + Tailwind CSS 4 + Lucide.

## Ejecutar en local
```bash
npm install
npm run dev
```

## Compilar
```bash
npm run build   # genera /dist (y sitemap.xml si defines VITE_SITE_URL)
```

## Qué editar
Todo el contenido está en `src/config/site.ts`: datos, servicios, horarios,
enlaces de Google, redes y textos legales. Las fotos se copian en
`public/images` (ver `public/images/LEEME.md`).

## Publicar en Vercel
1. Importa este repositorio en Vercel (preset Vite, se detecta solo).
2. Variable opcional: `VITE_SITE_URL` = dominio final, sin barra final.
3. Deploy.

## Pendiente de confirmar con el propietario
Horario semanal, precios y servicios reales, URL verificada de la ficha de
Google Maps, URL de incrustación del mapa, redes sociales, sistema de reservas
(si lo hay), datos legales (titular, NIF, domicilio, email) y fotografías.
