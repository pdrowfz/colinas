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
    <div className="flex w-full flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export { PrivatePage };
