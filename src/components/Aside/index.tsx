import { useState, useEffect } from "react";
import { useSidebar } from "hooks/useSidebar";
import { Skeleton } from "components/Skeleton";
import { CloseButton } from "components/ButtonClose";
import { MiniCardProduct } from "components/MiniCardProduct";
import { Container, Heading, ProductList, Footer } from "./styles";

export function Aside() {
  const { isOpenSidebar, handleCloseSidebar } = useSidebar();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const TotalShimmer = <Skeleton width={275} height={34} />;

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
        {isLoading ? (
          TotalShimmer
        ) : (
          <div className="total">
            <span>total:</span>
            <strong>R$798</strong>
          </div>
        )}
        <button type="button">finalizar compra</button>
      </Footer>
    </Container>
  ) : null;
}
