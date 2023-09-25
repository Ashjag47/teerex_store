import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import data from "../../data/catalogue.json";
import "./searchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const onSearch = (searchItem) => {
    setSearchTerm(searchItem);
    setShowDropdown(false);
    console.log(searchItem);
  };

  return (
    <>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          className="search-button"
          onClick={() => {
            onSearch(searchTerm);
          }}
        >
          <SearchOutlinedIcon sx={{ fontSize: 33 }} />
        </button>
      </div>
      {showDropdown && (
        <div className="search-dropdown">
          {data
            .filter((item) => {
              return (
                searchTerm &&
                item.name.toLowerCase() !== searchTerm.toLowerCase() &&
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
            })
            .filter(
              (item, index, self) =>
                index === self.findIndex((t) => t.name === item.name)
            )
            .map((item) => {
              return (
                <div
                  className="search-dropdown-item"
                  key={item.id}
                  onClick={() => onSearch(item.name)}
                >
                  {item.name}
                </div>
              );
            })
            .slice(0, 5)}
        </div>
      )}
    </>
  );
}

export default SearchBar;
