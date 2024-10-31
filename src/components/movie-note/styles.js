import styled from "styled-components";
import { Rating } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  padding: 3.2rem;

  border-radius: 16px;
  background: rgba(255, 133, 155, 0.05);

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const StyledRating = styled(Rating)`
  color: ${({ theme }) => theme.COLORS.PINK} !important;

  & .MuiRating-iconEmpty {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const DescContainer = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
  text-overflow: ellipsis;

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1.6rem;
    font-weight: 400;
  }

  @media (min-width: 800px) {
    -webkit-line-clamp: 2;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  margin-top: 1.6rem;

  > div {
    background: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    padding: 0.6rem 1.6rem;
    border-radius: 8px;
  }
`;
