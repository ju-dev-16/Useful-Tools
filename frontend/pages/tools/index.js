import Head from "next/head";
import { getSession } from "next-auth/react";

import Redirect from "../../components/ui/Redirect";

export default function ToolsPage() {
  const DUMMY_DATA = [ 
    {
        name: "Fuel consumption calculator",
        icon: "",
        isFavorite: false
    },
    {
        name: "Barcode validator",
        icon: "",
        isFavorite: true
    },
    {
        name: "German fine calculator",
        icon: "",
        isFavorite: true
    }
  ];

  return (
    <div>
      <Head>
        <title>Useful-Tools | Tools</title>
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
        destination: "/signin?redirect=tools",
      },
    }
  }

  return {
    props: {
      session: session
    }
  }
}