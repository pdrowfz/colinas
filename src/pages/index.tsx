import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import { type NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { type ReactNode } from 'react';
import { api } from '~/utils/api';

const Button = ({ children }: { children: ReactNode }) => {
  return <button className="border px-4 py-2">{children}</button>;
};

const Header = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <header className="flex w-full flex-row items-center justify-between border-b border-slate-400 p-4">
      <h1 className="text-3xl">Colinas</h1>
      <div className="flex flex-col items-center">
        <Image
          src={user.profileImageUrl}
          alt="Profile image"
          width="200"
          height="200"
          className="h-14 w-14 rounded-full"
        />
        <p className="mt-3 text-lg">{user.fullName}</p>
      </div>
      <Button>
        <SignOutButton />
      </Button>
    </header>
  );
};

const GamesList = () => {
  const { data } = api.games.getAll.useQuery();

  return (
    <div className="mt-5 flex w-full flex-row items-center justify-center">
      {data?.map((game) => (
        <div key={game.id} className="border-b py-5">
          <p>Week {game.week}</p>
          <p>{String(game.date)}</p>
          <p>
            {game.awayTeam} @ {game.homeTeam}
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
        <link rel="icon" href="/favicon.ico" />
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
