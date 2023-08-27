import { type NextPage } from 'next';
import { useState } from 'react';

import { GamesList } from '~/components/GamesList';

import { PrivatePage } from '~/components/PrivatePage';
import { WeekSelector } from '~/components/WeekSelector';
import { Separator } from '~/components/ui/separator';

const Home: NextPage = () => {
  const [week, setWeek] = useState(1);

  return (
    <PrivatePage>
      <WeekSelector week={week} setWeek={setWeek} />
      <Separator className="w-3/4 bg-slate-900" />
      <GamesList week={week} />
    </PrivatePage>
  );
};

export default Home;
