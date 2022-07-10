import { TiShoppingCart } from "react-icons/ti";
import { Container, Content, Logo, Cart } from "./styles";

export function Header(){
    return(
        <Container>
            <Content>
                <Logo>
                    <h1>mks</h1>
                    <span>sistemas</span>
                </Logo>

                <Cart>
                    <TiShoppingCart/>
                    0
                </Cart>
            </Content>
        </Container>
    );
}