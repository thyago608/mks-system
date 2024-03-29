import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(
    -90deg,
    #e5e5e5 0%,
    #FFF,
    50%,
    #e5e5e5 100%
  );

  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  border-radius: 0.4rem;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: -135% 0%;
    }
  }
`;
