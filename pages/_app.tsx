import { SessionProvider } from 'next-auth/react';
import ConsoltoWidget from '../components/cousin/ConsoltoWidget';
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css';

export default function App({ 
  Component, 
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps) {
  return (
    <SessionProvider session={session}>
        <ConsoltoWidget />
        <Component {...pageProps} />
        <Analytics />
    </SessionProvider>
  )
}
