import styled from "styled-components";

export const Container = styled.aside`
  background: var(--blue);

  position: fixed;
  top: 0;
  right: -5px;
  bottom: 0;

  z-index: 2;

  display: flex;
  flex-direction: column;

  width: 275px;

  @media(min-width: 768px){
    width: 360px;
  }

  @media(min-width: 1024px){
    width: 486px;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1rem 1rem 2rem;

  h2 {
    font-size: 27px;
    color: var(--white);
  }

  @media(min-width: 1024px){
    padding: 2.2rem;
  }
`;

export const ProductList = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar{
    appearance: none;
  }

  .list {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;

  .total {
    margin: 20px 0 28px 0;
    padding: 0 1.7rem;

    display: flex;
    justify-content: space-between;
    gap: 50px;
    transform: scale(0.7);
    color: var(--white);

    font-weight: 700;
    font-size: 28px;

    span {
      text-transform: capitalize;
    }
  }

  button {
    border: 0;

    width: 100%;
    height: 65px;

    background: var(--black);
    color: var(--white);

    text-transform: uppercase;
    font-weight: 700;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
