import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { Container, ImageContainer, Description, Buy } from "./styles";

export function Product() {
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
