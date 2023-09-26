import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./filterPipeline.css";

function FilterPipeline({
  data,
  setResultData,
  searchTerm,
  selectedColor,
  setSelectedColor,
  selectedType,
  setSelectedType,
  selectedGender,
  setSelectedGender,
  selectedPrice,
  setSelectedPrice,
}) {
  const [color, setColor] = React.useState([
    { id: 1, name: "Blue", checked: false },
    { id: 2, name: "Red", checked: false },
    { id: 3, name: "Green", checked: false },
  ]);

  const [type, setType] = React.useState([
    { id: 1, name: "Polo", checked: false },
    { id: 2, name: "Hoodie", checked: false },
    { id: 3, name: "Basic", checked: false },
  ]);

  const [gender, setGender] = React.useState([
    { id: 1, name: "Men", checked: false },
    { id: 2, name: "Women", checked: false },
  ]);

  const [price, setPrice] = React.useState([
    { id: 1, name: "0-250Rs", checked: false, min: 0, max: 250 },
    { id: 2, name: "251Rs-Rs450", checked: false, min: 251, max: 450 },
    { id: 3, name: "Rs450+", checked: false, min: 450, max: 1000000 },
  ]);

  const handleChange = (event, id, category) => {
    let tempColor = [...selectedColor];
    let tempType = [...selectedType];
    let tempGender = [...selectedGender];
    let tempPrice = [...selectedPrice];

    switch (category) {
      case "color":
        {
          let temp = [...color];
          temp = temp.map((item) => {
            if (item.id === id) {
              item.checked = !item.checked;
              if (item.checked) {
                tempColor = [...selectedColor, item.name];
                setSelectedColor([...selectedColor, item.name]);
              } else {
                tempColor = [
                  ...selectedColor.filter(
                    (innerItem) => innerItem !== item.name
                  ),
                ];
                setSelectedColor([
                  ...selectedColor.filter(
                    (innerItem) => innerItem !== item.name
                  ),
                ]);
              }
            }
            return item;
          });
          console.log("***", temp);
          setColor([...temp]);
        }
        break;
      case "type":
        {
          let temp = [...type];
          temp = temp.map((item) => {
            if (item.id === id) {
              item.checked = !item.checked;
              if (item.checked) {
                tempType = [...selectedType, item.name];
                setSelectedType([...selectedType, item.name]);
              } else {
                tempType = [
                  ...selectedType.filter(
                    (innerItem) => innerItem !== item.name
                  ),
                ];
                setSelectedType([
                  ...selectedType.filter(
                    (innerItem) => innerItem !== item.name
                  ),
                ]);
              }
            }
            return item;
          });
          console.log("***", temp);
          setType([...temp]);
        }
        break;
      case "gender":
        {
          let temp = [...gender];
          temp = temp.map((item) => {
            if (item.id === id) {
              item.checked = !item.checked;
              if (item.checked) {
                tempGender = [...selectedGender, item.name];
                setSelectedGender([...selectedGender, item.name]);
              } else {
                tempGender = [
                  ...selectedGender.filter(
                    (innerItem) => innerItem !== item.name
                  ),
                ];
                setSelectedGender([
                  ...selectedGender.filter(
                    (innerItem) => innerItem !== item.name
                  ),
                ]);
              }
            }
            return item;
          });
          console.log("***", temp);
          setGender([...temp]);
        }
        break;
      case "price":
        {
          let temp = [...price];
          temp = temp.map((item) => {
            if (item.id === id) {
              item.checked = !item.checked;
              if (item.checked) {
                tempPrice = [...selectedPrice, [item.min, item.max]];
                setSelectedPrice([...selectedPrice, [item.min, item.max]]);
              } else {
                tempPrice = [
                  ...selectedPrice.filter(
                    (innerItem) =>
                      innerItem[0] !== item.min && innerItem[1] !== item.max
                  ),
                ];
                setSelectedPrice([
                  ...selectedPrice.filter(
                    (innerItem) =>
                      innerItem[0] !== item.min && innerItem[1] !== item.max
                  ),
                ]);
              }
            }
            return item;
          });
          console.log("***", tempPrice);
          setPrice([...temp]);
        }
        break;
      default:
        break;
    }

    setResultData(
      data.filter((item) => {
        return (
          (tempColor.length !== 0 ? tempColor.includes(item.color) : true) &&
          (tempGender.length !== 0 ? tempGender.includes(item.gender) : true) &&
          (tempType.length !== 0 ? tempType.includes(item.type) : true) &&
          (tempPrice.length !== 0
            ? tempPrice.some((range) => {
                return item.price >= range[0] && item.price <= range[1];
              })
            : true) &&
          (searchTerm
            ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
            : true)
        );
      })
    );
  };

  return (
    <div>
      <div className="filter-category">
        <div className="filter-pipeline-title">Color</div>
        {color.map((item) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={(event) => handleChange(event, item.id, "color")}
                />
              }
              label={item.name}
            />
          );
        })}
      </div>

      <div className="filter-category">
        <div className="filter-pipeline-title">Gender</div>
        {gender.map((item) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={(event) => handleChange(event, item.id, "gender")}
                />
              }
              label={item.name}
            />
          );
        })}
      </div>

      <div className="filter-category">
        <div className="filter-pipeline-title">Type</div>
        {type.map((item) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={(event) => handleChange(event, item.id, "type")}
                />
              }
              label={item.name}
            />
          );
        })}
      </div>

      <div className="filter-category">
        <div className="filter-pipeline-title">Price</div>
        {price.map((item) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={(event) => handleChange(event, item.id, "price")}
                />
              }
              label={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FilterPipeline;
