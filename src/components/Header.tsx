import { SignOutButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { Button } from './ui/button';
import { ColinasLogo } from './ColinasLogo';

const Header = () => {
  const { user, isLoaded } = useUser();

  return (
    <header className="flex h-44 w-full flex-row items-center justify-between bg-slate-900 px-10 lg:px-20">
      <div className="flex flex-row items-center justify-center text-xl font-medium text-slate-100">
        <ColinasLogo className="h-20 w-20 fill-slate-100" />
        Colinas Pick&apos;em
      </div>
      {!!isLoaded && !!user ? (
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <Image
              src={user.profileImageUrl}
              alt="Profile picture"
              height={40}
              width={40}
              className="h-10 w-10 rounded-full"
            />
          </div>
          <Button variant="secondary" asChild={true}>
            <SignOutButton />
          </Button>
        </div>
      ) : null}
    </header>
  );
};

export { Header };
