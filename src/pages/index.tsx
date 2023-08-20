import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { type NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { type ReactNode } from 'react';
import { LoadingPage } from '~/components/Loading';
import { api } from '~/utils/api';
import { type TeamAbbreviation, getTeamName } from '~/utils/teams';

dayjs.extend(advancedFormat);

const Button = ({ children }: { children: ReactNode }) => {
  return <button className="border px-4 py-2">{children}</button>;
};

const Header = () => {
  const { user, isLoaded } = useUser();

  if (!user || !isLoaded) return null;

  return (
    <header className="flex w-full flex-row items-center justify-between border-b border-slate-400 p-4">
      <h1 className="text-3xl">Colinas</h1>
      <div className="flex flex-col items-center">
        <Image
          src={user.profileImageUrl}
          alt="Profile picture"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full"
        />
        <p className="mt-3 text-lg">{user.fullName}&apos;s picks</p>
      </div>
      <Button>
        <SignOutButton />
      </Button>
    </header>
  );
};

const GamesList = () => {
  const { data, isLoading } = api.games.getAll.useQuery();

  if (isLoading) return <LoadingPage />;

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="w-full">
      {[...data, ...data].map((game) => (
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
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Colinas</title>
        <meta name="description" content="Colinas Applications" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className="flex h-screen justify-center">
        <main className="h-full w-full border-x border-slate-400 md:max-w-5xl">
          <div className="flex justify-center">
            {!user.isSignedIn && (
              <div className="flex items-center justify-center pt-48">
                <Button>
                  <SignInButton />
                </Button>
              </div>
            )}
            {!!user.isSignedIn && (
              <div className="flex w-full flex-col">
                <Header />
                <GamesList />
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
