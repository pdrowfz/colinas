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

  return (
    <div className="w-3/4">
      {data.map((game) => (
        <Fragment key={game.id}>
          <h4 className="my-3 text-xl font-semibold text-slate-900">
            {dayjs(game.date).format('dddd, MMMM Do')}
          </h4>
          <Game {...game} />
        </Fragment>
      ))}
    </div>
  );
};

export { GamesList };
