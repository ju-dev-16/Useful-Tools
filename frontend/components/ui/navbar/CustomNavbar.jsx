import { useRouter } from 'next/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Auth from './Auth';

export default function CustomNavbar() {
  const router = useRouter();

  return (
    <>
      <Navbar 
        expand="lg"
        className='border-bottom'
      >
        <Navbar.Brand className='ms-3' onClick={() => router.push("/")} style={{cursor: "pointer"}}>
          Useful Tools
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='me-3' />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="px-3 mb-md-0 mb-3" navbarScroll>
            <Nav.Link onClick={() => router.push("/tools")}>Tools</Nav.Link>
            <Nav.Link onClick={() => router.push("/profile")}>Profile</Nav.Link>
            <Nav.Link onClick={() => router.push("/docs")}>API</Nav.Link>
          </Nav>
          <Nav className='ms-auto' navbarScroll>
            <Auth />
            {/* <div className="form-check form-switch ms-4 me-3 mt-md-0 mt-3">
              <label className="form-check-label ms-3" htmlFor="lightSwitch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  className="bi bi-brightness-high"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                  />
                </svg>
              </label>
              <input id="lightSwitch" className="form-check-input" type="checkbox" onChange={(e => {
                e.persist();
                // isSwitched(e.currentTarget.checked);
              })} />
            </div>  */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}