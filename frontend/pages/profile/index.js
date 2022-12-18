import Head from 'next/head';
import { getSession } from "next-auth/react";

import Redirect from '../../components/ui/Redirect';

export default function ProfilePage() {
  return (
    <div>
      <Head>
        <title>Useful-Tools | Profile</title>
        <meta name="description" content="A plattform to find and post useful tools. For a better online experience!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-5'>
        <Redirect />
      </main>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session === null) {
    return {
      redirect: {
        destination: "/signin?redirect=profile",
      },
    }
  }

  return {
    props: {
      session: session
    }
  }
}