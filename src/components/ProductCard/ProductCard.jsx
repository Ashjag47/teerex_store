import React from "react";
import "./productCard.css";

function ProductCard({ data }) {
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
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
