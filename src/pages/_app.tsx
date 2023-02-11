import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { api } from '../utils/trpc';

import '../styles/globals.css';
import { Modal } from 'modal-rt';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Modal />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
