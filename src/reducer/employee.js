import { act } from "react-dom/test-utils";


const initialState = {
  empId: "",
  firstName: "",
  lastName: "",
  balance: "",
  empObjList: []
};

const employeeDetails = (state = initialState, action) => {
  switch (action.type) {
    case "FIELD_VALUE_CHANGED":
      let { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };

      case "ADD_NEW_EMPLOYEE" :
        const emp = [...state.empObjList]
        const result = emp.reverse().concat(action.payload.nameOBJ).reverse()
        return {
          ...state,
          empObjList : result
        }

    default:
      return state;
  }
};

export default employeeDetails;
