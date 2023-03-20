import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { api } from '../utils/trpc';

import '../styles/globals.css';
import { Modal } from 'modal-rt';
import { Toaster } from 'react-hot-toast';
import { GlobalProvider } from '../../context/GlobalContext';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <GlobalProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Modal />
        <Toaster />
      </SessionProvider>
    </GlobalProvider>
  );
};

export default api.withTRPC(MyApp);
