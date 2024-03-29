import Link from "next/link";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { useSidebar } from "hooks/useSidebar";
import { IState } from "store";
import { ICartItem } from "store/modules/cart/types";
import { Container, Content, Logo, Cart } from "./styles";

export function Header() {
  const { handleOpenSidebar } = useSidebar();
  const products = useSelector<IState, ICartItem[]>(
    (state) => state.cart.items
  );

  return (
    <Container>
      <Content>
        <Link href="/">
          <Logo role="logo">
            <h1>
              mks
              <span>sistemas</span>
            </h1>
          </Logo>
        </Link>
        <Cart type="button" onClick={handleOpenSidebar}>
          <TiShoppingCart />
          {products.length}
        </Cart>
      </Content>
    </Container>
  );
}
