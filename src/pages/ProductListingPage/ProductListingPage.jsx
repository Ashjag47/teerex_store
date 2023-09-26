import React, { useState } from "react";
import {
  Navbar,
  SearchBar,
  ProductCard,
  FilterPipeline,
} from "../../components";
import "./productListingPage.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import searchAndAct from "../../utils/searchAndAct";
import { useSelector, useDispatch } from "react-redux";
import { handleData } from "../../actions";

function ProductListingPage() {
  const cartItemIdsRX = useSelector((state) => state.cartItemIds);
  const dataRX = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [ShowSide, setShowSide] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(dataRX); // data is the original data from catalogue.json
  const [resultData, setResultData] = useState(dataRX);
  const [cartItemIds, setCartItemIds] = useState(cartItemIdsRX); // cartItemIds is the array of ids of the items in the cart [1, 2, 3

  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  const onSearch = (searchItem) => {
    setSearchTerm(searchItem);
    setResultData(
      data.filter((item) => {
        return (
          (selectedColor.length !== 0
            ? selectedColor.includes(item.color)
            : true) &&
          (selectedGender.length !== 0
            ? selectedGender.includes(item.gender)
            : true) &&
          (selectedType.length !== 0
            ? selectedType.includes(item.type)
            : true) &&
          (selectedPrice.length !== 0
            ? selectedPrice.reduce((acc, range) => {
                return (
                  acc || (item.price >= range[0] && item.price <= range[1])
                );
              }, true)
            : true) &&
          (searchTerm
            ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
            : true)
        );
      })
    );
  };

  const handleAddCart = (id) => {
    console.log(`add ${id}`);
    let result = searchAndAct(id, "add", data);
    console.log(result[id - 1]);
    dispatch(handleData([...result]));
    setData(result);
    result = searchAndAct(id, "add", resultData);
    console.log(result[id - 1]);
    setResultData(result);
  };

  const handleRemoveCart = (id) => {
    console.log(`remove ${id}`);
    let result = searchAndAct(id, "remove", data);
    console.log(result[id - 1]);
    dispatch(handleData([...result]));
    setData(result);
    result = searchAndAct(id, "remove", data);
    console.log(result[id - 1]);
    setResultData(result);
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
          <div className="filter-pipeline">
            <FilterPipeline
              data={data}
              setResultData={setResultData}
              searchTerm={searchTerm}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
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
