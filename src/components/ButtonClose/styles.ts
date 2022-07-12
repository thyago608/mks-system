import styled from "styled-components";

export const Button = styled.button`
  background: var(--black);
  border: 0;

  padding: 0.25rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s ease-in-out;

  svg {
    stroke: var(--blue);
  }

  &:hover {
    filter: brightness(0.8);
  }

  @media(min-width: 1024px){
    svg{
      stroke: var(--white);
    }
  }
`;
