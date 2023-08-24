import { z } from 'zod';
import { createTRPCRouter, privateProcedure } from '~/server/api/trpc';

export const gamesRouter = createTRPCRouter({
  getGamesByWeek: privateProcedure
    .input(z.object({ week: z.number().min(1).max(18) }))
    .query(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const games = await ctx.prisma.game.findMany({
        where: { week: input.week },
        orderBy: [{ date: 'desc' }],
        include: {
          picks: {
            where: {
              authorId,
            },
          },
        },
      });

      return games;
    }),
});
