import cartItemIds from "./cartItemIds";
import data from "./data";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartItemIds,
  data,
});

export default rootReducer;
