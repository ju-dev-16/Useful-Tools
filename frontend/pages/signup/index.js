import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


export default function SignUpPage() { 
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    hasAgreedTerms: false
  });

  function handleChange(event) {
    const { name, value, checked } = event.target;

    setFormData({
      ...formData, 
      [name] : name === "hasAgreedTerms" ? checked : value
    });
  }

  return (
    <div>
      <Head>
        <title>Useful-Tools | Sign up</title>
        <meta name="description" content="A plattform to find and post useful tools. For a better online experience!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/images/register.svg" alt="Register img with icon" style={{height: 200, width: "100%"}} className="mt-5 p-2" />
        <div className='d-flex justify-content-center p-5 pb-0'>
          <Form>
            <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control
              type="text"
              placeholder="Username"
              required
              autoFocus
              name="username"
              value={formData.username}
              onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
              type="email"
              placeholder="Email adress"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
            className="mb-3"
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
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked={formData.hasAgreedTerms}
                required
                name="hasAgreedTerms"
                onChange={handleChange}
                aria-describedby="registerCheckHelpText" />
              <label className="form-check-label" htmlFor="registerCheck" style={{userSelect: "none"}}>
                I have read and agree to the terms
              </label>
            </div>
            <Button style={{width: "100%"}}>SIGN UP</Button>
            <div className="text-center mt-4">
              <p>Already a member? <button onClick={() => router.push("/signin")} className='bg-transparent border-0 text-decoration-none text-primary pointer'>Sign in</button></p>
            </div>
          </Form>
        </div>
      </main>
    </div>
  )
}