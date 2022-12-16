import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import Head from "next/head";

import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Login from "../../components/ui/auth/Login";

export default function SignInPage({ providers, session }) {
  return (
    <div>
      <Head>
        <title>Useful-Tools | Sign in</title>
        <meta name="description" content="A plattform to find and post useful tools. For a better online experience!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <Login>
          {Object.values(providers).map(provider => (
            <FontAwesomeIcon 
            icon={provider.name === "GitHub" ? faGithub : faGoogle} 
            key={provider.name} 
            onClick={() => signIn(provider.id)} 
            className="mx-2"
            width={40}
            style={{cursor: "pointer"}} />
          ))}
        </Login>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/docs" },
    };
  }

  return {
    props: {
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
      session: await getSession(context)
    },
  };
}