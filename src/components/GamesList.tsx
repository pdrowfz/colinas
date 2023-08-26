import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { toast } from 'react-hot-toast';
import { LoadingPage } from '~/components/Loading';
import { api } from '~/utils/api';
import { teams } from '~/utils/teams';
import { Card } from './ui/card';
import { Button } from './ui/button';

dayjs.extend(advancedFormat);

type GamesListProps = {
  week: number;
};

const GamesList = ({ week }: GamesListProps) => {
  const ctx = api.useContext();
  const { data, isLoading } = api.games.getGamesByWeek.useQuery({ week });
  const { mutate, isLoading: isPicking } = api.picks.create.useMutation({
    onSuccess: () => {
      toast.success('Successfully picked!');
      void ctx.games.getGamesByWeek.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.message;
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.error('Failed to pick. Please try again later.');
      }
    },
  });

  if (isLoading) return <LoadingPage />;

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="w-3/4">
      {data.map((game) => (
        <>
          <h4 className="my-3 text-xl font-semibold text-slate-900">
            {dayjs(game.date).format('dddd, MMMM Do')}
          </h4>
          <Card key={game.id} className="h-32 w-full">
            <div className="flex h-full w-full flex-row">
              <div className="flex h-full w-1/3 items-center justify-center">
                <Button
                  variant="ghost"
                  className="h-full w-full"
                  onClick={() =>
                    mutate({
                      pickId: game.picks[0]?.id,
                      gameId: game.id,
                      pick: 'away',
                    })
                  }
                  disabled={isPicking || game.picks[0]?.pick === 'away'}
                >
                  {teams[game.awayTeam].name}
                </Button>
              </div>
              <div className="flex h-full w-1/3 flex-col items-center justify-between p-2">
                {game.status === 'not_started'
                  ? dayjs(game.date).format('h:mm A')
                  : null}
                {game.status === 'live' ? 'LIVE' : null}
                {game.status === 'final' ? 'FINAL' : null}
                <div className="flex w-full flex-row justify-around">
                  {game.status !== 'not_started' ? (
                    <div>{game.awayScore}</div>
                  ) : null}
                  <div>@</div>
                  {game.status !== 'not_started' ? (
                    <div>{game.homeScore}</div>
                  ) : null}
                </div>
                <div>&nbsp;</div>
              </div>
              <div className="flex h-full w-1/3 items-center justify-center">
                <Button
                  variant="ghost"
                  className="h-full w-full"
                  onClick={() =>
                    mutate({
                      pickId: game.picks[0]?.id,
                      gameId: game.id,
                      pick: 'home',
                    })
                  }
                  disabled={isPicking || game.picks[0]?.pick === 'home'}
                >
                  {teams[game.homeTeam].name}
                </Button>
              </div>
            </div>
          </Card>
        </>
      ))}
    </div>
  );
};

export { GamesList };
