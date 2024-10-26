import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Form = styled.div`
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    align-self: flex-start;
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;

    align-self: flex-start;
  }

  > a {
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  @media (min-width: 800px) {
    padding: 0 13.6rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;

  /* max-width: 80rem; */
`;
