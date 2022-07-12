import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductSkeleton } from "components/Skeleton/Product";
import { FiShoppingBag } from "react-icons/fi";
import { Container, ImageContainer, Description, Buy } from "./styles";
interface ProductProps {
  data: {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
  };
}

export function Product({ data }: ProductProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return isLoading ? (
    <ProductSkeleton />
  ) : (
    <Container>
      <ImageContainer>
        <Image src={data.photo} alt={data.name} layout="fill" />
      </ImageContainer>
      <Description>
        <div className="heading">
          <h2>{data.name}</h2>
          <span>{data.price}</span>
        </div>
        <p className="text">{data.description}</p>
      </Description>
      <Buy>
        <FiShoppingBag />
        comprar
      </Buy>
    </Container>
  );
}
