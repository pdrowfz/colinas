import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const gamesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const games = await ctx.prisma.game.findMany({
      orderBy: [{ date: 'desc' }],
    });

    return games;
  }),
});
