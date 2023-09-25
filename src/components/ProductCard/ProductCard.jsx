import React from "react";
import "./productCard.css";

function ProductCard() {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img
            src="http://www.wickedknot.com/image/Category%20images/pants.jpg"
            alt="product"
          />
          <div className="card-product-name">Product Name</div>
        </div>
        <div className="card-footer">
          <div className="card-product-cost">
            <h4>Rs 100</h4>
          </div>
          <div className="card-product-button">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
