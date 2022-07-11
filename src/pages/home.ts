import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  justify-items: center;
  gap: 1.125rem;

  margin: 4.125rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 250px);

    row-gap: 1.375rem;
    margin: 10.25rem auto 12.8125rem;
    width: max-content;
  }
`;
