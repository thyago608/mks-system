import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FiMinus, FiPlus } from "react-icons/fi";
import Image from "next/image";
import {
  addProductToCart,
  removeProductToCart,
  removeProductFromCartForced,
} from "store/modules/cart/actions";
import { Container, Heading, Content } from "./styles";
import { CloseButton } from "components/ButtonClose";
import { ICartItem, IProduct } from "store/modules/cart/types";
interface MiniCardProductProps {
  data: ICartItem;
}

export function MiniCardProduct({ data }: MiniCardProductProps) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [addProductToCart]
  );

  const handleRemoveProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(removeProductToCart(product));
    },
    [removeProductToCart]
  );

  const handleRemoveProductFromCartForced = useCallback(
    (product: IProduct) => {
      dispatch(removeProductFromCartForced(product));
    },
    [removeProductFromCartForced]
  );

  return (
    <Container>
      <Heading>
        <div className="container-image">
          <Image
            src={data.product.photo}
            alt={data.product.name}
            layout="fill"
          />
        </div>
        <CloseButton handleClose={() => handleRemoveProductFromCartForced(data.product)}
        />
      </Heading>
      <Content>
        <p className="text">{data.product.name}</p>
        <div className="quantityAndValue">
          <div className="quantity">
            <span>qtd</span>
            <button
              type="button"
              onClick={() => handleRemoveProductToCart(data.product)}
            >
              <FiMinus />
            </button>
            {data.quantity}
            <button
              type="button"
              onClick={() => handleAddProductToCart(data.product)}
            >
              <FiPlus />
            </button>
          </div>
          <span className="value">{data.product.price}</span>
        </div>
      </Content>
    </Container>
  );
}
