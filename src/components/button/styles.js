import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BLACK_800};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 2.4rem;
  border-radius: 1rem;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.COLORS.BLACK_800};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
