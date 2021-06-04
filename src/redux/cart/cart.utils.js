export const addItemToCart = (cartItems, cartItemToAdd) => {

  const cartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === cartItemToAdd.id);
  console.log(cartItemIndex);

  // Does not exist
  if (cartItemIndex === -1) {
    return [...cartItems,
    { ...cartItemToAdd, quantity: 1 }
    ];
  }
  // Does exist
  else {
    return [...cartItems].fill(
      {
        ...cartItemToAdd,
        quantity: cartItems[cartItemIndex].quantity + 1
      },
      cartItemIndex, cartItemIndex + 1
    );
  }
}