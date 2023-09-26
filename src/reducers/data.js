import mockData from "../data/catalogue.json";
const initialData = mockData;

const data = (state = initialData, action) => {
  switch (action.type) {
    case "HANDLE_DATA":
      return [...action.payload];
    default:
      return state;
  }
};

export default data;
