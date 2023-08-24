import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const gamesRouter = createTRPCRouter({
  getGamesByWeek: publicProcedure
    .input(z.object({ week: z.number().min(1).max(18) }))
    .query(async ({ ctx, input }) => {
      const games = await ctx.prisma.game.findMany({
        where: { week: input.week },
        orderBy: [{ date: 'desc' }],
      });

      return games;
    }),
});
