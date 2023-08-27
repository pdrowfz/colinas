import { SignInButton, useUser } from '@clerk/nextjs';
import { type NextPage } from 'next';
import { useRouter } from 'next/router';
import { ColinasLogo } from '~/components/ColinasLogo';
import { LoadingSpinner } from '~/components/Loading';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';

const Login: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  if (user.isLoaded && !!user.isSignedIn) {
    void router.push('/home ');
  }

  return (
    <div className="flex flex-row overflow-hidden">
      <div className="h-screen w-1/2 bg-[url('/assets/images/sofi.jpeg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="flex h-screen w-1/2 flex-col items-center justify-center bg-slate-200">
        <div className="flex flex-row items-center justify-center text-xl font-medium text-slate-900">
          <ColinasLogo className="h-20 w-20 fill-slate-900" />
          Colinas Pick&apos;em
        </div>
        <Separator className="mb-4 w-3/4 bg-slate-900 lg:w-1/2" />
        {!user.isLoaded ? <LoadingSpinner size={32} /> : null}
        {user.isLoaded && !user.isSignedIn && (
          <Button size="lg" asChild={true}>
            <SignInButton />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Login;
