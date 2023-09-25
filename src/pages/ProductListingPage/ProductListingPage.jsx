import React from "react";
import { Navbar, SearchBar, ProductCard } from "../../components";

function ProductListingPage() {
  return (
    <div>
      <Navbar />
      <div className="search-holder">
        <SearchBar />
      </div>
      <div className="product-card-holder">
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductListingPage;
