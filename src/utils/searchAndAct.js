const searchAndAct = (id, action, data) => {
  if (action === "add") {
    return [
      ...data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
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
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    ];
  }
};

export default searchAndAct;
