import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SessionProvider } from 'next-auth/react';

import CustomNavbar from '../components/ui/navbar/CustomNavbar';

export default function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps}
}) {
  return (
    <SessionProvider session={session}>
      <CustomNavbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}