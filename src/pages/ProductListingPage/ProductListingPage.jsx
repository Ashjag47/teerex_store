import React from "react";
import { Navbar, SearchBar } from "../../components";

function ProductListingPage() {
  return (
    <div>
      <Navbar />
      <div className="search-holder">
        <SearchBar />
      </div>
    </div>
  );
}

export default ProductListingPage;
