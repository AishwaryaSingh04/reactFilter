import axios from "axios";
import constant from "../contants/Constants";

export function fetchImages() {
  return dispatch => {
    return GetImages()
      .then(json => {
        dispatch(fetchUserImages(json.data));
        return json.data;
      })
      .catch(error => dispatch(fetchImageFailure(error)));
  };
}

export const FETCH_USER_IMAGES = "FETCH_USER_IMAGES";
export const FETCH_IMAGE_FAILURE = "FETCH_IMAGE_FAILURE";
export const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE";

function GetImages() {
  return axios
    .get(constant.GET_PHOTOS)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
}

export const fetchUserImages = products => ({
  type: FETCH_USER_IMAGES,
  payload: { products }
});

export const fetchImageFailure = error => ({
  type: FETCH_IMAGE_FAILURE,
  payload: { error }
});

export const fieldValueChanged = response => ({
  type: "FIELD_VALUE_CHANGED",
  payload: response
});

export const searchImage = userInput =>({
  type:userInput.type,
  payload: userInput.text
})

export const employeeAdded = employee => ({
  type: ADD_NEW_EMPLOYEE,
  payload: employee
});

