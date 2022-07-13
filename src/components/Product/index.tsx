import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { ProductSkeleton } from "components/Skeleton/Product";
import { FiShoppingBag } from "react-icons/fi";
import { addProductToCart } from "store/modules/cart/actions";
import { Container, ImageContainer, Description, Buy } from "./styles";
import {  IProduct } from "store/modules/cart/types";
interface ProductProps {
  data: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    priceNumber:number;
  };
}

export function Product({ data }: ProductProps) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product));
  }, [addProductToCart]);

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
      <Buy type="button" onClick={() => handleAddProductToCart(data)}>
        <FiShoppingBag />
        comprar
      </Buy>
    </Container>
  );
}
