import { combineReducers } from "redux";
import imageList from "./image";
import employeeDetails from "./employee";

export default combineReducers({
  imageList,
  employeeDetails
});
