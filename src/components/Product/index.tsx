import { useState, useEffect } from "react";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { Skeleton } from "components/Skeleton";
import { Container, ImageContainer, Description, Buy } from "./styles";

export function Product() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return (
      <Container>
        <ImageContainer>
          <Skeleton width={127} height={158} />
        </ImageContainer>
        <Description isLoading>
          <Skeleton width={220} height={38} />
          <Skeleton width={220} height={24} />
        </Description>
        <Skeleton width={250} height={36} />
      </Container>
    );
  }

  return (
    <Container>
      <ImageContainer>
        <Image src="/apple-watch.svg" alt="Produto" layout="fill" />
      </ImageContainer>
      <Description>
        <div className="heading">
          <h2>Apple Watch Series 4 GPS</h2>
          <span>R$399</span>
        </div>
        <p className="text">Redesigned from scratch and completely revised.</p>
      </Description>
      <Buy>
        <FiShoppingBag />
        comprar
      </Buy>
    </Container>
  );
}
