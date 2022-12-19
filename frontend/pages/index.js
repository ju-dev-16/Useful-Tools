import Head from 'next/head';
import { useRouter } from 'next/router';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/Home.module.css'

export default function HomePage() {
  const router = useRouter();

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
        <div className='w-100 d-flex flex-column align-items-center justify-content-center mb-3'>
          <h1 style={{fontSize: "8vh"}}>Useful Tools</h1>
          <h4>For a better online experience</h4>
        </div>
        <div className={styles.grid}>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => router.push("/signup")}
          >
            <h2 className='text-primary d-flex justify-content-between'>
              Getting started <FontAwesomeIcon icon={faArrowRight} width={30} />
            </h2>
            <p>
              Create a Useful-Tools account to get started.
            </p>
          </a>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => router.push("/docs")}
          >
            <h2 className='text-danger d-flex justify-content-between'>
              API Documentation <FontAwesomeIcon icon={faArrowRight} width={30} />
            </h2>
            <p>
              Find in-depth information about Useful-Tools API.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}