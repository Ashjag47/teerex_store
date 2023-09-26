import React from "react";
import { Navbar } from "../../components";
import "./shoppingCartPage.css";
import { useSelector, useDispatch } from "react-redux";
import processToCartData from "../../utils/processToCartData";

function ShoppingCartPage() {
  const cartItemIdsRX = useSelector((state) => state.cartItemIds);
  const dataRX = useSelector((state) => state.data);
  console.log(dataRX);
  const cartData = processToCartData(dataRX, cartItemIdsRX);
  console.log(cartData);

  return (
    <div>
      <Navbar cartItemIds={cartItemIdsRX} />
      <div className="page-title">
        <h3>Shopping Cart</h3>
      </div>

      <div className="cart-item-holder">
        <div className="cart-item-body">
          {cartData.map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.imageURL} alt="product" />
                </div>
                <div className="img-less-detail">
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">Rs {item.price}</div>
                  </div>
                  <div className="cart-item-quantity">
                    Qty: {item.purchasedQuantity}
                  </div>
                  <div className="cart-item-remove">
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-item-total">Total amount: Rs 2000</div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
