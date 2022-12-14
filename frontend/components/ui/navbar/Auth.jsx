import { useRouter } from "next/router";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Auth () {
  const router = useRouter();

  return (
    <Container className="d-flex justify-content-center">
      <Button className='me-2' onClick={() => router.push("/auth/login")}>
        Login
      </Button>
      <Button className='btn-danger' onClick={() => router.push("/auth/register")}>
        Register
      </Button>
    </Container>
  );
}