const searchAndAct = (id, action, data, qty = 1) => {
  if (action === "add") {
    return [
      ...data.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - qty,
          };
        }
        return item;
      }),
    ];
  } else if (action === "remove") {
    return [
      ...data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + qty,
          };
        }
        return item;
      }),
    ];
  }
};

export default searchAndAct;
