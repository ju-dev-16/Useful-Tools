import '../styles/globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNavbar from '../components/ui/navbar/CustomNavbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomNavbar />
      <Component {...pageProps} />
    </>
  );
}