import styled from "styled-components";
import { ButtonText } from "../../components/button-text";
import { Button } from "../../components/button";

export const Container = styled.div`
  width: 100%;

  padding: 2.4rem;

  overflow-y: hidden;

  .tags {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_900};

    border-radius: 8px;
  }

  @media (min-width: 800px) {
    padding: 2.4rem 12rem;

    .tags {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const CustomButtonText = styled(ButtonText)`
  color: ${({ theme }) => theme.COLORS.PINK};

  margin-bottom: 2.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  header {
    margin-top: 4rem;
  }

  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media (min-width: 800px) {
    .inputs-wrapper {
      flex-direction: row;
    }
  }
`;

export const CustomButton = styled(Button)`
  margin: 0;
`;
