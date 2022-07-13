import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 34px;

  position: fixed;
  bottom:0;

  background: var(--gray-light);

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.75rem;
    color: var(--black);
  }
`;
