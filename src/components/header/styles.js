import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  padding: 2.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: 700;
  }

  @media (min-width: 800px) {
    flex-direction: row;

    padding: 2.4rem 12rem;

    > h1 {
      margin-right: 6.4rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  gap: 0.8rem;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    object-fit: cover;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong,
    span {
      font-size: 1.4rem;
      font-weight: 700;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  @media (min-width: 800px) {
    min-width: 20rem;
  }
`;
