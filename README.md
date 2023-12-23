# Colinas Pick'em

Colinas Pick'em is an app to allow picking the winners of the NFL games of the week.

## Tech used

Colinas Pick'em is built on top of the T3 Stack. It currently uses:

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Prisma](https://prisma.io)
- [Zod](https://github.com/colinhacks/zod)
- Deployed on [Vercel](https://vercel.com/)
- Authentication through [Clerk](https://clerk.com/)
- MySQL database on [PlanetScale](https://planetscale.com/)
- Logs on [Axiom](https://axiom.co/)

## Screenshots

![colinas vercel app_login](https://github.com/pdrowfz/colinas/assets/1108060/394d3cd2-e56d-44fd-9e1e-83e511a14a93)

![colinas vercel app_games](https://github.com/pdrowfz/colinas/assets/1108060/52661c6a-5672-4a7c-8e31-28388c90a439)

## How to run

Fill `DATABASE_URL` with your MySQL database URL, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` with your Clerk keys, and then:

- `npx prisma db push`
- `npm install`
- `npm run dev`

## How to deploy

Merge a PR to the `main` branch and it will run the pipeline and deploy automatically.
