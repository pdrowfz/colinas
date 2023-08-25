import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { toast } from 'react-hot-toast';
import { LoadingPage } from '~/components/Loading';
import { api } from '~/utils/api';
import { type TeamAbbreviation, getTeamName } from '~/utils/teams';

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
    <div className="w-full">
      <div className="flex w-full flex-col items-center">
        <div className="w-full border-b border-slate-400" />
        {data.map((game) => (
          <div
            key={game.id}
            className="flex w-full flex-col items-center justify-center border-b border-slate-400 p-8"
          >
            <p>Week {game.week}</p>
            <p>{dayjs(game.date).format('dddd, MMMM Do - h:mm A')}</p>
            <p>
              {getTeamName(game.awayTeam as TeamAbbreviation)} @{' '}
              {getTeamName(game.homeTeam as TeamAbbreviation)}
            </p>
            <button
              onClick={() =>
                mutate({
                  pickId: game.picks[0]?.id,
                  gameId: game.id,
                  pick: 'away',
                })
              }
              disabled={isPicking || game.picks[0]?.pick === 'away'}
            >{`Pick ${getTeamName(game.awayTeam as TeamAbbreviation)}`}</button>
            <button
              onClick={() =>
                mutate({
                  pickId: game.picks[0]?.id,
                  gameId: game.id,
                  pick: 'home',
                })
              }
              disabled={isPicking || game.picks[0]?.pick === 'home'}
            >{`Pick ${getTeamName(game.homeTeam as TeamAbbreviation)}`}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { GamesList };
