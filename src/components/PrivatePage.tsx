import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { type ReactNode } from 'react';
import { Header } from './Header';

type PrivatePageProps = {
  children: ReactNode;
};

const PrivatePage = ({ children }: PrivatePageProps) => {
  const user = useUser();
  const router = useRouter();

  if (user.isLoaded && !user.isSignedIn) {
    void router.push('/');
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Header />
      <main className="my-6 flex h-full w-full flex-col items-center md:max-w-7xl">
        {children}
      </main>
    </div>
  );
};

export { PrivatePage };
