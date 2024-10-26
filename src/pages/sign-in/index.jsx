import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Background, Container, Form } from "./styles";

export function SignIn() {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setShowImage(true);
      } else setShowImage(false);
    };

    handleResize();

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <span>Application to keep track of everything you watch.</span>

        <h2>Log in</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Sign in" />

        <Link to="/register">Sign up</Link>
      </Form>

      {showImage ? <Background /> : <></>}
    </Container>
  );
}
