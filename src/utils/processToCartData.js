const processToCartData = (data, cartItemIds) => {
  const setCartItems = new Set(cartItemIds);
  const cartData = data
    .filter((item) => setCartItems.has(item.id))
    .map((item) => {
      const { id, name, price, imageURL } = item;
      return {
        id,
        name,
        price,
        imageURL,
        purchasedQuantity: cartItemIds.filter(
          (cartItemId) => cartItemId === item.id
        ).length,
      };
    });
  return cartData;
};

export default processToCartData;
