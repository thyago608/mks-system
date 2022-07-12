import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  width: 250px;
  padding-top: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 127px;
  height: 158px;

  margin: 0 auto;
`;

export const Description = styled.div`
  margin-top: 1rem;
  padding: 0 0.9375rem;

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
      font-weight: 400;
      font-size: 1rem;
      width: 50%;
    }

    span {
      background: var(--gray-semi-dark);
      color: var(--white);
      font-weight: 700;

      padding: 0.3125rem 0.6875rem;
      border-radius: 5px;
    }
  }

  .text {
    font-weight: 300;
    font-size: 0.625rem;
    line-height: 0.75rem;

    margin-top: 0.5625rem;
  }
`;

export const Buy = styled.button`
  margin-top: 0.8125rem;

  border: 0;
  border-radius: 0 0 5px 5px;

  background: var(--blue);
  color: var(--white);

  width: 100%;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  text-transform: uppercase;
  font-weight: 600;

  transition: filter 0.2s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;
