import Head from "next/head";
import { useRouter } from "next/router";

import Redirect from "../../components/ui/Redirect";

export default function ToolsPage() {
  const router = useRouter();

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