import { Input } from "../../components/input";

import { Container, Profile } from "./styles";

import profileImg from "../../assets/foto.jpeg";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Search by title" />

      <Profile>
        <img src={profileImg} />

        <div>
          <strong>João Marcos</strong>
          <span>Log out</span>
        </div>
      </Profile>
    </Container>
  );
}
