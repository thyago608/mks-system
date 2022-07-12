import { Reducer } from "redux";
import produce from "immer";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART":
        {
          const { product } = action.payload;

          const productInCartIndex = draft.items.findIndex(
            (item) => item.product.id === product.id
          );

          if (productInCartIndex >= 0) {
            draft.items[productInCartIndex].quantity++;
            draft.items[productInCartIndex].subtotal += Number(
              product.priceNumber
            );
          } else {
            draft.items.push({
              product,
              quantity: 1,
              subtotal: Number(product.priceNumber),
            });
          }
        }
        break;

      case "REMOVE_PRODUCT_TO_CART":
        {
          const { product } = action.payload;

          const productInCartIndex = draft.items.findIndex(
            (item) => item.product.id === product.id
          );

          const quantity = draft.items[productInCartIndex].quantity;

          if (quantity > 1) {
            draft.items[productInCartIndex].quantity--;
            draft.items[productInCartIndex].subtotal -= Number(
              product.priceNumber
            );
          } else {
            draft.items.splice(productInCartIndex, 1);
          }
        }
        break;

      case "REMOVE_PRODUCT_FROM_CART_FORCED":
        {
          const { product } = action.payload;

          const productInCartIndex = draft.items.findIndex(
            (item) => item.product.id === product.id
          );

          if (productInCartIndex >= 0) {
            draft.items.splice(productInCartIndex, 1);
          }
        }
        break;

      default:
        return draft;
    }
  });
};

export default cart;
