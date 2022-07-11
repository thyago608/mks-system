import { FiX } from "react-icons/fi";
import { useSidebar } from "hooks/useSidebar";
import { Container, Heading, Footer } from "./styles";

export function Aside() {
  const { isOpenSidebar, handleCloseSidebar } = useSidebar();

  return isOpenSidebar ? (
    <Container>
      <Heading>
        <h2>Carrinho de Compras</h2>
        <button type="button" onClick={handleCloseSidebar}>
          <FiX />
        </button>
      </Heading>

      <section className="products-list"></section>

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
