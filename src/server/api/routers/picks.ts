import { z } from 'zod';
import { createTRPCRouter, privateProcedure } from '../trpc';

export const picksRouter = createTRPCRouter({
  create: privateProcedure
    .input(z.object({ gameId: z.string().cuid(), pick: z.string().length(4) }))
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const pick = await ctx.prisma.pick.create({
        data: {
          authorId,
          gameId: input.gameId,
          pick: input.pick,
        },
      });

      return pick;
    }),
});
