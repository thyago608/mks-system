import { useSidebar } from "hooks/useSidebar";
import { CloseButton } from "components/ButtonClose";
import { MiniCardProduct } from "components/MiniCardProduct";
import { Container, Heading, ProductList, Footer } from "./styles";

const Zoom = require("react-reveal/Zoom");

export function Aside() {
  const { isOpenSidebar, handleCloseSidebar } = useSidebar();

  return isOpenSidebar ? (
    <Container>
        <Heading>
          <h2>Carrinho de Compras</h2>
          <CloseButton size={32} handleClose={handleCloseSidebar} />
        </Heading>

        <ProductList>
          <div className="list">
            <MiniCardProduct />
            <MiniCardProduct />
            <MiniCardProduct />
            <MiniCardProduct />
            <MiniCardProduct />
            <MiniCardProduct />
          </div>
        </ProductList>
        
        <Footer>
          <div className="total">
            <span>total:</span>
            <strong>R$798</strong>
          </div>
          <button type="button">finalizar compra</button>
        </Footer>
      </Container>
  ) : null;
}
