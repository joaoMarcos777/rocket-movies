import { IoAdd } from "react-icons/io5";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { MovieNote } from "../../components/movie-note";

import { CardsContainerHeader, CardsContainer, Container } from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <Container>
        <CardsContainerHeader>
          <h1>My Movies</h1>
          <Button title="Add movie" icon={IoAdd} />
        </CardsContainerHeader>

        <CardsContainer>
          <MovieNote />
          <MovieNote />
          <MovieNote />
          <MovieNote />
        </CardsContainer>
      </Container>
    </>
  );
}
