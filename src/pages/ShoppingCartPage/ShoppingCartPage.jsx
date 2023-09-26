import React from "react";
import { Navbar } from "../../components";
import "./shoppingCartPage.css";

function ShoppingCartPage() {
  return (
    <div>
      <Navbar cartItemIds={[1, 1, 1, 2, 2, 3, 4, 5]} />
      <div className="page-title">
        <h3>Shopping Cart</h3>
      </div>

      <div className="cart-item-holder">
        <div className="cart-item-body">
          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://picsum.photos/200/300" alt="product" />
            </div>
            <div className="img-less-detail">
              <div className="cart-item-details">
                <div className="cart-item-name">Product Name</div>
                <div className="cart-item-price">Rs 200</div>
              </div>
              <div className="cart-item-quantity">Qty: 1</div>
              <div className="cart-item-remove">
                <button>Delete</button>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://picsum.photos/200/300" alt="product" />
            </div>
            <div className="img-less-detail">
              <div className="cart-item-details">
                <div className="cart-item-name">Product Name</div>
                <div className="cart-item-price">Rs 200</div>
              </div>
              <div className="cart-item-quantity">Qty: 1</div>
              <div className="cart-item-remove">
                <button>Delete</button>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://picsum.photos/200/300" alt="product" />
            </div>
            <div className="img-less-detail">
              <div className="cart-item-details">
                <div className="cart-item-name">Product Name</div>
                <div className="cart-item-price">Rs 200</div>
              </div>
              <div className="cart-item-quantity">Qty: 1</div>
              <div className="cart-item-remove">
                <button>Delete</button>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://picsum.photos/200/300" alt="product" />
            </div>
            <div className="img-less-detail">
              <div className="cart-item-details">
                <div className="cart-item-name">Product Name</div>
                <div className="cart-item-price">Rs 200</div>
              </div>
              <div className="cart-item-quantity">Qty: 1</div>
              <div className="cart-item-remove">
                <button>Delete</button>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://picsum.photos/200/300" alt="product" />
            </div>
            <div className="img-less-detail">
              <div className="cart-item-details">
                <div className="cart-item-name">Product Name</div>
                <div className="cart-item-price">Rs 200</div>
              </div>
              <div className="cart-item-quantity">Qty: 1</div>
              <div className="cart-item-remove">
                <button>Delete</button>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://picsum.photos/200/300" alt="product" />
            </div>
            <div className="img-less-detail">
              <div className="cart-item-details">
                <div className="cart-item-name">Product Name</div>
                <div className="cart-item-price">Rs 200</div>
              </div>
              <div className="cart-item-quantity">Qty: 1</div>
              <div className="cart-item-remove">
                <button>Delete</button>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://picsum.photos/200/300" alt="product" />
            </div>
            <div className="img-less-detail">
              <div className="cart-item-details">
                <div className="cart-item-name">Product Name</div>
                <div className="cart-item-price">Rs 200</div>
              </div>
              <div className="cart-item-quantity">Qty: 1</div>
              <div className="cart-item-remove">
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-item-total">Total amount: Rs 2000</div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
