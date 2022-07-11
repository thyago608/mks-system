import styled from "styled-components";

export const Container = styled.aside`
  background: var(--blue);

  width: 85%;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled.div`
  padding: 1.5rem 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    font-size: 27px;
    color: var(--white);
  }

  button {
    background: var(--black);
    border: 0;

    padding: 0.25rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: filter 0.2s ease-in-out;

    svg {
      font-size: 2rem;
      stroke: var(--blue);
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Footer = styled.footer`
  .total {
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    color: var(--white);

    font-weight: 700;
    font-size: 28px;

    span {
      text-transform: capitalize;
    }
  }

  button {
    margin-top:1.5rem;

    border: 0;

    width: 100%;
    height: 65px;

    background: var(--black);
    color: var(--white);

    text-transform: uppercase;
    font-weight: 700;

    transition: filter 0.2s ease-in-out;

    &:hover{
        filter:brightness(0.8);
    }
}
`;
