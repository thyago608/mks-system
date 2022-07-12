import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  width: 240px;
  padding: 1.125rem 1rem;

  @media (min-width: 1024px) {
    width: 85%;
    height: 95px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
  }
`;

export const Heading = styled.div`
  .container-image {
    position: relative;

    width: 80px;
    height: 95px;

    margin: 0 25%;
  }

  button {
    display: none;
  }

  @media (min-width: 1024px) {
    margin-right: 20px;

    .container-image {
      width: 46px;
      height: 57px;
      margin: 0;
    }

    button {
      display: flex;

      position: absolute;
      top: -7px;
      right: -7px;
    }
  }
`;

export const Content = styled.div`
  .text {
    margin: 13px 0 10px 0;
  }

  .quantityAndValue {
    display: flex;
    justify-content: space-between;

    .quantity {
      width: 100px;
      padding: 0.225rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-radius: 4px;
      border: 1px solid rgba(191, 191, 191, 0.4);

      span{
        display: none;
      }

      button {
        background: var(--white);
        width: 35%;

        &:first-of-type {
          border-right: 1px solid rgba(191, 191, 191, 0.4);
        }

        &:last-of-type {
          border-left: 1px solid rgba(191, 191, 191, 0.4);
        }
      }

      svg {
        font-size: 1.1rem;
        stroke: var(--black);
      }
    }

    .value {
      height: 34px;
      line-height: 34px;

      font-weight: 700;
      color: var(--white);
      background: var(--gray-dark);
      font-size: 15px;

      padding: 0 0.77rem;
      border-radius: 5px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    .text {
      margin: 0;
    }

    .quantityAndValue {
      align-items: center;
      gap: 20px;

      .quantity {
        width: 70px;

        position: relative;

        span{
          display: inline-block;

          position: absolute;
          top: -15px;
          left: 0;

          text-transform: capitalize;
        }

        font-size: 8px;
        color: var(--black);

        svg {
          font-size: 8px;
        }
      }

      .value {
        background: none;
        color: var(--black);
        font-size: 14px;
      }
    }
  }
`;