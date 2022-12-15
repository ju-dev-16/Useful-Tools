import Head from 'next/head';
import { useRouter } from "next/router";

import Redirect from '../../components/ui/Redirect';

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Useful-Tools | Redirect</title>
        <meta name="description" content="A plattform to find and post useful tools. For a better online experience!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-4'>
        <Redirect />
      </main>
    </div>
  );
}