import React, { useState } from "react";
import { Navbar, SearchBar, ProductCard } from "../../components";
import "./productListingPage.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import mockData from "../../data/catalogue.json";
import searchAndAct from "../../utils/searchAndAct";

function ProductListingPage() {
  const [ShowSide, setShowSide] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(mockData); // data is the original data from catalogue.json
  const [resultData, setResultData] = useState(data);
  const [cartItemIds, setCartItemIds] = useState([]); // cartItemIds is the array of ids of the items in the cart [1, 2, 3

  const onSearch = (searchItem) => {
    setSearchTerm(searchItem);
    setResultData(
      data.filter((item) => {
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
      })
    );
  };

  const handleAddCart = (id) => {
    console.log(`add ${id}`);
    const result = searchAndAct(id, "add", data);
    console.log(result[id - 1]);
    setData(result);
  };

  const handleRemoveCart = (id) => {
    console.log(`remove ${id}`);
    const result = searchAndAct(id, "remove", data);
    console.log(result[id - 1]);
    setData(result);
  };

  return (
    <div>
      <Navbar cartItemIds={cartItemIds} />
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
          <ProductCard
            data={resultData}
            handleAddCart={handleAddCart}
            handleRemoveCart={handleRemoveCart}
            cartItemIds={cartItemIds}
            setCartItemIds={setCartItemIds}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductListingPage;
