import { SignOutButton, useUser } from '@clerk/nextjs';
import { type ReactNode } from 'react';
import Image from 'next/image';

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

export { Header };
