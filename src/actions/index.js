export const deleteCartItem = (cartItems) => {
  // id is the id of the item to be deleted
  return {
    type: "DELETE_CART_ITEM",
    payload: cartItems,
  };
};

export const addCartItem = (cartItems) => {
  return {
    type: "ADD_CART_ITEM",
    payload: cartItems,
  };
};

export const reduceCartItem = (cartItems) => {
  return {
    type: "REDUCE_CART_ITEM",
    payload: cartItems,
  };
};

export const handleData = (currentData) => {
  return {
    type: "HANDLE_DATA",
    payload: currentData,
  };
};
