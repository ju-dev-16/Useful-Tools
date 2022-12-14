import { useContext, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from 'react-bootstrap';

// setNavVisibility
export default function HomePage() {
  //   const themeContext = useContext(ThemeContext);
  const router = useRouter();

  // useEffect(() => {
  //   setNavVisibility(false);
  // });

  return (
    <div>
      <Head>
        <title>Useful-Tools | Home</title>
        <meta name="description" content="A plattform to find and post useful tools. For a better online experience!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-4'>
        <div className='w-100'>
          <img src="/images/header.svg" alt="Header img with icon" style={{height: 250, width: "100%"}} className="mt-5 mb-2" />
        </div>
        <div className='w-100 d-flex flex-column align-items-center justify-content-center mb-4'>
          {/* color: themeContext.color === "white" ? "#212529" : "white" */}
          <h1 style={{fontSize: "8vh"}}>Useful Tools</h1>
          {/* color: themeContext.color === "white" ? "#212529" : "white" */}
          <h4 style={{}}>For a better online experience</h4>
        </div>
        <div className='d-flex justify-content-center'>
          <Button onClick={() => router.push("/auth/register")}>Getting started</Button>
          &nbsp;
          <Button className='btn-danger'>API Documentation</Button>
        </div>
      </main>
    </div>
  );
}