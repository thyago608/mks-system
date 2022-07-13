import { useState } from "react";
import { useSidebar } from "hooks/useSidebar";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "store";
import { removeAllProductsToCart } from "store/modules/cart/actions";
import { CloseButton } from "components/ButtonClose";
import { MiniCardProduct } from "components/MiniCardProduct";
import { AnimatedCart } from "components/AnimatedCart";
import { Container, Heading, ProductList, Footer, Button } from "./styles";
import { ICartItem } from "store/modules/cart/types";

export function Aside() {
  const { isOpenSidebar, handleCloseSidebar } = useSidebar();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  
  const products = useSelector<IState, ICartItem[]>(
    (state) => state.cart.items
  );

  const total = products.reduce(
    (acumulator, currentValue) => acumulator + currentValue.subtotal,
    0
  );

  const totalFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  function handleFinalizePurchase(){
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      handleCloseSidebar();
      
      dispatch(removeAllProductsToCart())
    }, 2000);
  }

  return isOpenSidebar ? (
    <Container>
      <Heading>
        <h2>Carrinho de Compras</h2>
        <CloseButton size={32} handleClose={handleCloseSidebar} />
      </Heading>

      <ProductList>
        <div className="list">
          {products.map((item) => (
            <MiniCardProduct key={item.product.id} data={item} />
          ))}
        </div>
      </ProductList>

      <Footer>
        <div className="total">
          <span>total:</span>
          <strong>{totalFormatted}</strong>
        </div>
        <Button
          type="button"
          onClick={handleFinalizePurchase}
        >
           {isLoading ? <AnimatedCart /> : "finalizar compra"}
          </Button>
      </Footer>
    </Container>
  ) : null;
}
