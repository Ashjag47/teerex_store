import React from "react";
import { Navbar } from "../../components";

function ShoppingCartPage() {
  return (
    <div>
      <Navbar cartItemIds={[1, 1, 1, 2, 2, 3, 4, 5]} />
    </div>
  );
}

export default ShoppingCartPage;
