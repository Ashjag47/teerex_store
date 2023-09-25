import React, { useState } from "react";
import { Navbar, SearchBar, ProductCard } from "../../components";
import "./productListingPage.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import data from "../../data/catalogue.json";

function ProductListingPage() {
  const [ShowSide, setShowSide] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [resultData, setResultData] = useState(data);

  const onSearch = (searchItem) => {
    setSearchTerm(searchItem);
    setResultData(
      data.filter((item) => {
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
      })
    );
  };

  return (
    <div>
      <Navbar />
      <div className="search-holder">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={data}
          onSearch={onSearch}
        />
      </div>
      <div className="filter-card-holder">
        <div className="show-sidebar" onClick={() => setShowSide(!ShowSide)}>
          <FilterAltIcon sx={{ color: "#6e58ff", fontSize: 40 }} />
        </div>

        <div
          className="filter-pipeline-holder"
          id={ShowSide ? "sidebar-active" : "sidebar"}
        >
          <div className="filter-pipeline">Filter Pipeline</div>
        </div>

        <div className="product-card-holder">
          <ProductCard data={resultData} />
        </div>
      </div>
    </div>
  );
}

export default ProductListingPage;
