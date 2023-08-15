import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const gamesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.game.findMany();
  }),
});
