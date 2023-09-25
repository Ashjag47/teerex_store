import React from "react";
import "./productCard.css";

function ProductCard({
  data,
  handleAddCart,
  cartItemIds,
  setCartItemIds,
  handleRemoveCart,
}) {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.imageURL} alt="product" />
              <div className="card-product-name">{item.name}</div>
            </div>
            <div className="card-footer">
              <div className="card-product-cost">
                <h4>Rs {item.price}</h4>
              </div>
              <div className="card-product-button">
                {item.quantity === 0 && !cartItemIds.includes(item.id) ? (
                  <button className="disabled-btn">Out of Stock</button>
                ) : (
                  <button
                    className="active-btn"
                    onClick={() => {
                      if (!cartItemIds.includes(item.id)) {
                        setCartItemIds([...cartItemIds, item.id]);
                        handleAddCart(item.id);
                      } else {
                        setCartItemIds(
                          cartItemIds.filter((id) => id !== item.id)
                        );
                        handleRemoveCart(item.id);
                      }
                    }}
                  >
                    {cartItemIds.includes(item.id) ? "Remove" : "Add to Cart"}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
