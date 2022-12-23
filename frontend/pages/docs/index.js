import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { faKey, faEye, faEyeSlash, faCopy, faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Endpoints from "../../components/ui/Endpoints";

export default function DocsPage() {
  const [apiKey, setApiKey] = useState("");
  const [isVisibile, setIsVisibile] = useState(true);
  const [copyIcon, setCopyIcon] = useState(faCopy);

  useEffect(() => {
    const handleIconChange = setTimeout(() => setCopyIcon(prevState => prevState = faCopy), 2500);

    return () => clearInterval(handleIconChange);
  }, [copyIcon]);

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
          <InputGroup className="my-5">
            <Button className="d-flex align-items-center" onClick={() => setIsVisibile(prevState => prevState = !prevState)}>
              <FontAwesomeIcon icon={isVisibile ? faEye : faEyeSlash} width={15} />
            </Button>
            {isVisibile && (
            <>
              <Button className="d-flex align-items-center" onClick={() => {
                navigator.clipboard.writeText(apiKey);
                setCopyIcon(prevState => prevState = faCheck);
              }}>
                <FontAwesomeIcon icon={copyIcon} width={15} />
              </Button>
              <Form.Control
                placeholder="Api Key"
                value={apiKey}
                contentEditable={false}
                className="shadow-none"
                style={{cursor: "default"}}
              />
            </>
            )}
            {apiKey === "" 
            ? (
            <Button className="d-flex align-items-center" onClick={() => {
              setApiKey(prevState => prevState = require('crypto').randomBytes(32).toString('hex'));
              setIsVisibile(prevState => prevState = true);
            }}>
              <FontAwesomeIcon icon={faKey} width={15} className="me-2" /> Create API Key 
            </Button>              
            )
            : (
            <Button className="d-flex align-items-center" onClick={() => {
              setApiKey(prevState => prevState = "");
              // Delete it also from the database
              setIsVisibile(prevState => prevState = true);
            }}>
              <FontAwesomeIcon icon={faTrashCan} width={15} className="me-2" /> Delete API Key 
            </Button>                
            )
          }
          </InputGroup>
          <Endpoints name="tools" />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const prisma = new PrismaClient();
  const session = await getSession({ req });

  if (session === null) {
    return {
      redirect: {
        destination: "/signin?redirect=docs",
      },
    }
  }

  return {
    props: {
      session: session
    }
  }
}