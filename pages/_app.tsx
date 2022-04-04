import '../styles/globals.css'
import type { AppProps } from 'next/app'

// pages/_app.js
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }:AppProps): React.ReactElement<AppProps> {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
