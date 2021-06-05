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
};

export const decreaseQuantity = (cartItems, targetItem) => {

  if (targetItem.quantity === 1) return cartItems;

  return cartItems.map(item => (
    item.id === targetItem.id ?
      {
        ...item,
        quantity: item.quantity - 1
      } :
      item
  ));

};