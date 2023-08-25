import { SignInButton, useUser } from '@clerk/nextjs';
import { type NextPage } from 'next';
import { type ReactNode } from 'react';
import { useRouter } from 'next/router';

const Button = ({ children }: { children: ReactNode }) => {
  return <button className="border px-4 py-2">{children}</button>;
};

const Login: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  if (user.isLoaded && !!user.isSignedIn) {
    void router.push('/home ');
  }

  return (
    <>
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
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
