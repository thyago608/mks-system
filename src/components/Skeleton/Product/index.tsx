import { Skeleton } from "components/Skeleton";
import { Container } from "./styles";

export function ProductSkeleton() {
  return (
    <Container>
      <Skeleton width={127} height={158} />
      <Skeleton width={240} height={25} />
      <Skeleton width={240} height={25} />
      <Skeleton width={240} height={30} />
    </Container>
  );
}
