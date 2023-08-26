import { toast } from 'react-hot-toast';
import { Card } from './ui/card';
import { api, type RouterOutputs } from '~/utils/api';
import { teams } from '~/utils/teams';

import dayjs from 'dayjs';
import Image from 'next/image';
import { TeamButton } from './TeamButton';

type Game = RouterOutputs['games']['getGamesByWeek'][number];

const Game = ({
  awayScore,
  awayTeam,
  date,
  homeScore,
  homeTeam,
  id,
  picks,
  status,
}: Game) => {
  const ctx = api.useContext();
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

  const userPick = picks[0]?.pick;

  return (
    <Card className="h-32 w-full">
      <div className="flex h-full w-full flex-row">
        <div className="flex h-full w-1/3 items-center justify-center">
          <TeamButton
            team={`${userPick === 'away' ? 'picked' : ''}${awayTeam}`}
            onClick={() =>
              mutate({
                pickId: picks[0]?.id,
                gameId: id,
                pick: 'away',
              })
            }
            disabled={isPicking || userPick === 'away'}
          >
            <Image
              src={teams[awayTeam].logoPath}
              alt={`${teams[awayTeam].name} Logo`}
              height={96}
              width={96}
              className="h-24 w-24"
            />
          </TeamButton>
        </div>
        <div className="flex h-full w-1/3 flex-col items-center justify-between p-2">
          {status === 'not_started' ? dayjs(date).format('h:mm A') : null}
          {status === 'live' ? 'LIVE' : null}
          {status === 'final' ? 'FINAL' : null}
          <div className="flex w-full flex-row items-center justify-around text-slate-900">
            {status !== 'not_started' ? <div>{awayScore}</div> : null}
            <div className="text-3xl font-semibold">@</div>
            {status !== 'not_started' ? <div>{homeScore}</div> : null}
          </div>
          <div>&nbsp;</div>
        </div>
        <div className="flex h-full w-1/3 items-center justify-center">
          <TeamButton
            team={`${userPick === 'home' ? 'picked' : ''}${homeTeam}`}
            onClick={() =>
              mutate({
                pickId: picks[0]?.id,
                gameId: id,
                pick: 'home',
              })
            }
            disabled={isPicking || userPick === 'home'}
          >
            <Image
              src={teams[homeTeam].logoPath}
              alt={`${teams[homeTeam].name} Logo`}
              height={96}
              width={96}
              className="h-24 w-24"
            />
          </TeamButton>
        </div>
      </div>
    </Card>
  );
};

export { Game };
