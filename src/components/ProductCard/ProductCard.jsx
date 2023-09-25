import React from "react";
import "./productCard.css";
import { render } from "@testing-library/react";

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
                {(() => {
                  if (item.quantity === 0 && !cartItemIds.includes(item.id)) {
                    return (
                      <button className="disabled-btn">Out of Stock</button>
                    );
                  } else if (
                    item.quantity !== 0 &&
                    !cartItemIds.includes(item.id)
                  ) {
                    return (
                      <button
                        className="active-btn"
                        onClick={() => {
                          console.log(cartItemIds);
                          handleAddCart(item.id);
                          setCartItemIds([...cartItemIds, item.id]);
                          render();
                        }}
                      >
                        Add to Cart
                      </button>
                    );
                  } else if (cartItemIds.includes(item.id)) {
                    return (
                      <>
                        <button
                          className="interactive-btn"
                          onClick={() => {
                            let index = cartItemIds.indexOf(item.id);
                            console.log(index);
                            let temp = [...cartItemIds];
                            temp = temp
                              .slice(0, index)
                              .concat(temp.slice(index + 1));
                            console.log(temp);
                            setCartItemIds([...temp]);
                            handleRemoveCart(item.id);
                          }}
                        >
                          -
                        </button>

                        <span className="interactive-value">
                          {cartItemIds.filter((id) => id === item.id).length}
                        </span>

                        {item.quantity > 0 && (
                          <button
                            className="interactive-btn"
                            onClick={() => {
                              handleAddCart(item.id);
                              setCartItemIds([...cartItemIds, item.id]);
                              console.log(cartItemIds);
                              render();
                            }}
                          >
                            +
                          </button>
                        )}
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
