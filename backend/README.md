# Backend

This folder is now the Convex backend for the rental platform.

## Local setup

```bash
cd backend
npm install
npm run dev
```

Convex will create `.env.local` with the deployment values for this backend.

## Seed initial data

After `npm run dev` is connected to a Convex deployment, run:

```bash
npx convex run seed:initial
```

## Deploy

```bash
cd backend
npm run deploy
```

Use the generated `NEXT_PUBLIC_CONVEX_URL` in the frontend Vercel project.
