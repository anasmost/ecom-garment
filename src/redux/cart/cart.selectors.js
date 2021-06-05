import { memoize, pipe } from "../../utils/utils";

const selectCart = state => state.cart;

export const selectCartItems = pipe(
  selectCart,
  memoize(cart => cart.cartItems)
);

export const selectCartHidden = pipe(
  selectCart,
  cart => cart.hidden//primitive
);

export const selectItemCount = pipe(
  selectCartItems,
  memoize(cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
  ));

export const selectTotalPrice = pipe(
  selectCartItems,
  memoize(cartItems => cartItems.reduce((acc, { price }) => acc + price, 0))
);