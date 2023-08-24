import { z } from 'zod';
import { createTRPCRouter, privateProcedure } from '../trpc';

export const picksRouter = createTRPCRouter({
  create: privateProcedure
    .input(
      z.object({
        pickId: z.string().cuid().optional(),
        gameId: z.string().cuid(),
        pick: z.string().length(4),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const pick = await ctx.prisma.pick.upsert({
        where: {
          id: input.pickId ?? '',
        },
        update: {
          pick: input.pick,
        },
        create: {
          authorId,
          gameId: input.gameId,
          pick: input.pick,
        },
      });

      return pick;
    }),
});
