import { type AppType } from 'next/app';

import { api } from '~/utils/api';

import '~/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Colinas Pick&apos;em</title>
        <meta name="description" content="Colinas Pick'em" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
