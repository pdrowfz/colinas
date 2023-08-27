import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { LoadingPage } from '~/components/Loading';
import { api } from '~/utils/api';
import { Game } from './Game';
import { Fragment } from 'react';

dayjs.extend(advancedFormat);

type GamesListProps = {
  week: number;
};

const GamesList = ({ week }: GamesListProps) => {
  const { data, isLoading } = api.games.getGamesByWeek.useQuery({ week });

  if (isLoading) return <LoadingPage />;

  if (!data) return <div>Something went wrong</div>;

  const gamesWithFormattedDate = data.map((game) => ({
    ...game,
    formattedDate: dayjs(game.date).format('dddd, MMMM Do'),
  }));

  const gamesGroupedByDate = gamesWithFormattedDate.reduce(
    (group: { [key: string]: Game[] }, item) => {
      if (!group[item.formattedDate]) {
        group[item.formattedDate] = [];
      }
      group[item.formattedDate]?.push(item);
      return group;
    },
    {},
  );

  const gameDates = Object.keys(gamesGroupedByDate);

  return (
    <div className="w-3/4">
      {gameDates.map((date) => (
        <>
          <h4
            key={date}
            className="mb-4 mt-8 text-xl font-semibold text-slate-900"
          >
            {date}
          </h4>
          <div className="flex flex-col gap-4">
            {gamesGroupedByDate[date]?.map((game) => (
              <Game key={game.id} {...game} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export { GamesList };
