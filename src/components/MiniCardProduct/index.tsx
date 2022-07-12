import { FiMinus, FiPlus } from "react-icons/fi";
import Image from "next/image";
import { Container, Heading, Content } from "./styles";
import { CloseButton } from "components/ButtonClose";

export function MiniCardProduct() {
  return (
    <Container>
      <Heading>
        <div className="container-image">
          <Image src="/apple-watch.svg" alt="Product" layout="fill" />
        </div>
        <CloseButton size={10} handleClose={() => {}}/>
      </Heading>
      <Content>
        <p className="text">Apple Watch Series 4 GPS</p>
        <div className="quantityAndValue">
          <div className="quantity">
            <span>qtd</span>
            <button type="button">
              <FiMinus />
            </button>
            2
            <button type="button">
              <FiPlus />
            </button>
          </div>
          <span className="value">R$399</span>
        </div>
      </Content>
    </Container>
  );
}
