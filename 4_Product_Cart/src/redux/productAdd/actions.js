import {
  ADD_PRODUCT,
  ADD_TO_CART,
  DECREMENT_CART_ITEM,
  DELETE_CART_PRODUCT,
  INCREMENT_CART_ITEM,
} from "./actionTypes";

export const addProduct = (productDetails) => {
  return {
    type: ADD_PRODUCT,
    payload: productDetails,
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      ...item,
      productQuantity: 1,
    },
  };
};

export const incrementCartItem = (id) => {
  return {
    type: INCREMENT_CART_ITEM,
    payload: id,
  };
};

export const decrementCartItem = (id) => {
  return {
    type: DECREMENT_CART_ITEM,
    payload: id,
  };
};

export const deleteCartItem = (id) => {
  return {
    type: DELETE_CART_PRODUCT,
    payload: id,
  };
};
