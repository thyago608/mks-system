import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

export function removeProductToCart(product: IProduct) {
  return {
    type: "REMOVE_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

export function removeProductFromCartForced(product:IProduct){
  return{
    type:"REMOVE_PRODUCT_FROM_CART_FORCED",
    payload:{
      product,
    }
  }
}

export function removeAllProductsToCart(){
  return{
    type:"REMOVE_ALL_PRODUCTS_TO_CART"
  }
}