import { GameStatus, Team } from '@prisma/client';
import { z } from 'zod';
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';

export const gamesRouter = createTRPCRouter({
  getGamesByWeek: privateProcedure
    .input(z.object({ week: z.number().min(1).max(18) }))
    .query(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const games = await ctx.prisma.game.findMany({
        where: { week: input.week },
        orderBy: [{ date: 'asc' }],
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

  updateGames: publicProcedure
    .meta({
      openapi: {
        method: 'PATCH',
        path: '/games',
        summary: 'Update the score and status of a list of games',
        protect: true,
      },
    })
    .input(
      z.object({
        games: z.array(
          z.object({
            awayTeam: z.nativeEnum(Team),
            homeTeam: z.nativeEnum(Team),
            awayScore: z.number().int().min(0).max(99),
            homeScore: z.number().int().min(0).max(99),
            status: z.nativeEnum(GameStatus),
          }),
        ),
      }),
    )
    .output(
      z.object({
        success: z.boolean(),
      }),
    )
    .mutation(({ ctx, input }) => {
      input.games.map(async (partialGameData) => {
        if (!!partialGameData.awayTeam && !!partialGameData.homeTeam) {
          await ctx.prisma.game.updateMany({
            where: {
              awayTeam: partialGameData.awayTeam,
              homeTeam: partialGameData.homeTeam,
            },
            data: partialGameData,
          });
        }
      });

      return { success: true };
    }),
});
