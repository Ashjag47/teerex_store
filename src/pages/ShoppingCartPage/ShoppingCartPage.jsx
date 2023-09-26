import React, { useState } from "react";
import { Navbar } from "../../components";
import "./shoppingCartPage.css";
import { useSelector, useDispatch } from "react-redux";
import processToCartData from "../../utils/processToCartData";
import { deleteCartItem, handleData } from "../../actions";
import searchAndAct from "../../utils/searchAndAct";

function ShoppingCartPage() {
  const cartItemIdsRX = useSelector((state) => state.cartItemIds);
  const dataRX = useSelector((state) => state.data);
  const cartDataVar = processToCartData(dataRX, cartItemIdsRX);
  const [cartItemIds, setCartItemIds] = useState(cartItemIdsRX);
  const [cartData, setCartData] = useState(cartDataVar);
  const [totalAmount, setTotalAmount] = useState(
    cartData.reduce((acc, item) => {
      return acc + item.price * item.purchasedQuantity;
    }, 0)
  );
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const qtyToBeDeleted = cartData.filter((item) => item.id === id)[0]
      .purchasedQuantity;
    setCartItemIds([...cartItemIds.filter((item) => item !== id)]);
    dispatch(deleteCartItem([...cartItemIds.filter((item) => item !== id)]));
    setCartData([...cartData.filter((item) => item.id !== id)]);
    const result = searchAndAct(id, "remove", dataRX, qtyToBeDeleted);
    dispatch(handleData([...result]));
    setTotalAmount(
      cartData
        .filter((item) => item.id !== id)
        .reduce((acc, item) => {
          return acc + item.price * item.purchasedQuantity;
        }, 0)
    );
  };

  return (
    <div>
      <Navbar cartItemIds={cartItemIds} />
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
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-item-total">Total amount: Rs {totalAmount}</div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
