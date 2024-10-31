import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  padding: 2.4rem;

  overflow-y: hidden;

  @media (min-width: 800px) {
    padding: 2.4rem 12rem;
  }
`;

export const CardsContainerHeader = styled.div`
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 14rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 4rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  @media (min-width: 800px) {
    max-height: 60rem;
    overflow-y: auto;
  }
`;
