import { HTMLAttributes} from "react";
import { Container } from "./styles";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement>{
  width: number | string;
  height: number | string;
}

export function Skeleton({ width, height, ...rest }: SkeletonProps) {
  return (
    <Container
      style={{
        width,
        height,
      }}
      {...rest}></Container>
  );
}
