import { SignOutButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { Button } from './ui/button';
import { ColinasLogo } from './ColinasLogo';

const Header = () => {
  const { user, isLoaded } = useUser();

  if (!user || !isLoaded) return null;

  return (
    <header className="flex w-full flex-row items-center justify-between bg-slate-900 p-4">
      <div className="flex flex-row items-center justify-center text-xl font-medium text-slate-100">
        <ColinasLogo className="h-20 w-20 fill-slate-100" />
        Colinas Pick&apos;em
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={user.profileImageUrl}
          alt="Profile picture"
          height={56}
          width={56}
          className="h-14 w-14 rounded-full"
        />
        <p className="mt-3 text-lg text-slate-100">
          {user.fullName}&apos;s picks
        </p>
      </div>
      <Button variant="secondary">
        <SignOutButton />
      </Button>
    </header>
  );
};

export { Header };
