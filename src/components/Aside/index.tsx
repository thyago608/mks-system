import { useSidebar } from "hooks/useSidebar";
import { useSelector } from "react-redux";
import { IState } from "store";
import { CloseButton } from "components/ButtonClose";
import { MiniCardProduct } from "components/MiniCardProduct";
import { Container, Heading, ProductList, Footer } from "./styles";
import { ICartItem } from "store/modules/cart/types";

export function Aside() {
  const { isOpenSidebar, handleCloseSidebar } = useSidebar();
  const products = useSelector<IState, ICartItem[]>(state => state.cart.items);

  const total = products.reduce((acumulator, currentValue) => acumulator + currentValue.subtotal, 0);

  const totalFormatted = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL'
  }).format(total)

  return isOpenSidebar ? (
    <Container>
        <Heading>
          <h2>Carrinho de Compras</h2>
          <CloseButton size={32} handleClose={handleCloseSidebar} />
        </Heading>

        <ProductList>
          <div className="list">
              {products.map(item => (
                <MiniCardProduct key={item.product.id} data={item}/>
              ))}
          </div>
        </ProductList>
        
        <Footer>
          <div className="total">
            <span>total:</span>
            <strong>{totalFormatted}</strong>
          </div>
          <button type="button">finalizar compra</button>
        </Footer>
      </Container>
  ) : null;
}
