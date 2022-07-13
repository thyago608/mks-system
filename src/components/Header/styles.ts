import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);

  width: 100%;

  position: fixed;
  top: 0;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  height: 48px;
  padding: 0 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1440px) {
    height: 100px;
  }
`;

export const Logo = styled.a`
  color: var(--white);
  cursor: pointer;

  h1 {
    height: 45px;
    font-weight: 600;
    font-size: 2rem;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.3125rem;

    span {
      font-weight: 300;
      font-size: 1rem;
      text-transform: capitalize;

      margin-top: 0.5rem;
    }
  }
`;

export const Cart = styled.button`
  height: 25px;
  padding: 0 0.875rem;

  border-radius: 8px;
  border: 0;
  background: var(--white);

  font-weight: 700;
  font-size: 0.75rem;

  display: flex;
  gap: 0.625rem;
  align-items: center;

  @media (min-width: 1440px) {
    height: 45px;

    padding: 0 1.875rem;
    font-size: 1.125rem;
  }
`;
