import { TiShoppingCart } from "react-icons/ti";
import { useSidebar } from "hooks/useSidebar";
import { Container, Content, Logo, Cart } from "./styles";

export function Header() {
  const { handleOpenSidebar } = useSidebar();

  return (
    <Container>
      <Content>
        <Logo>
          <h1>mks</h1>
          <span>sistemas</span>
        </Logo>

        <Cart type="button" onClick={handleOpenSidebar}>
          <TiShoppingCart />0
        </Cart>
      </Content>
    </Container>
  );
}
