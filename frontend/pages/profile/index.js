import Head from 'next/head';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Redirect from '../../components/ui/Redirect';

export default function ProfilePage() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    router.push("/signin");
  }

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