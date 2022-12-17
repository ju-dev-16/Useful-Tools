import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";

import Endpoints from "../../components/ui/Endpoints";

export default function DocsPage() {
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
        <title>Useful-Tools | Documentation</title>
        <meta name="description" content="A plattform to find and post useful tools. For a better online experience!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='h-100 p-5'>
          <h1 style={{fontSize: "6vh", wordBreak: "break-word"}}>API Documentation</h1>
          <Endpoints name="tools" />
        </div>
      </main>
    </div>
  );
}