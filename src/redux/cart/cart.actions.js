import { cartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item
});

export const decreaseQuantity = item => ({
  type: cartActionTypes.DECREASE_QUANTITY,
  payload: item
});