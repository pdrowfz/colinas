import { type NextPage } from 'next';
import { useState } from 'react';

import { GamesList } from '~/components/GamesList';

import { PrivatePage } from '~/components/PrivatePage';
import { WeekSelector } from '~/components/WeekSelector';

const Home: NextPage = () => {
  const [week, setWeek] = useState(1);

  return (
    <PrivatePage>
      <WeekSelector week={week} setWeek={setWeek} />
      <GamesList week={week} />
    </PrivatePage>
  );
};

export default Home;
