import { useState } from 'react';
import { useRouter } from 'next/router';
import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import Head from "next/head";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignInPage({ providers }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = event => {
    const { name, value, checked } = event.target;

    setFormData({
      ...formData, 
      [name] : name === "rememberMe" ? checked : value
    });
  }

  return (
    <div>
      <Head>
        <title>Useful-Tools | Sign in</title>
        <meta name="description" content="A plattform to find and post useful tools. For a better online experience!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <div style={{width: "100%", height: "94vh"}}>
          <img src="/images/login.svg" alt="Login img with icon" style={{height: 200, width: "100%"}} className="mt-3 p-2" />
          <div className='d-flex justify-content-center p-5 pb-0 pt-3'>
            <Form>
              <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>E-Mail</Form.Label>
                <Form.Control
                type="email"
                placeholder="Email adress"
                required
                autoFocus
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
              </Form.Group>
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="form2Example31" required name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="form2Example31" style={{userSelect: "none"}}> Remember me </label>
                  </div>
                </div>
                <div className="col">
                  <button onClick={() => navigate("/auth/test")} className='bg-transparent border-0 text-start text-decoration-none text-primary pointer'>Forgot password?</button>
                </div>
              </div>
              <Button style={{width: "100%"}}>SIGN IN</Button>
              <div className="text-center mt-4">
                <p>Not a member? <a className='text-decoration-none' onClick={() => router.push("/signup")}>Sign up</a></p>
                <p>or sign up with:</p>
                <div className='d-flex justify-content-center w-100'>
                  {Object.values(providers).map(provider => (
                    <FontAwesomeIcon 
                    icon={provider.name === "GitHub" ? faGithub : faGoogle} 
                    key={provider.name} 
                    onClick={() => signIn(provider.id)} 
                    className="mx-2"
                    width={40}
                    style={{cursor: "pointer"}} />
                  ))}
                </div>
              </div>
            </Form>
          </div>
        </div>        
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