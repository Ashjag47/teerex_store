const initialCartItems = [];

const cartItemIds = (state = initialCartItems, action) => {
  switch (action.type) {
    case "DELETE_CART_ITEM":
      return [...action.payload];
    case "ADD_CART_ITEM":
      return [...action.payload];
    case "REDUCE_CART_ITEM":
      return [...action.payload];
    default:
      return state;
  }
};

export default cartItemIds;
