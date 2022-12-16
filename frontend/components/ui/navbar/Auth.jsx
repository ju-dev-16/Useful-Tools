import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Auth() {
  const { data: session } = useSession();
  const router = useRouter();

  const AuthButton = () => {
    if (session) {
      return (
        <Button onClick={() => {
          signOut();
          router.push("/");
        }}>
          Sign out
        </Button>
      );
    }
    
    return (
      <Button onClick={() => signIn()}>
        Sign in
      </Button>
    );
  }

  return (
    <Container className="d-flex justify-content-center">
      <AuthButton />
    </Container>
  );
}