import * as types from "./../constants/ActionTypes";

let initialState = false;
console.log(types.TOGGLE_FORM);
console.log(types.CLOSE_FORM);
console.log(types.OPEN_FORM);

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return !state;

    case types.CLOSE_FORM:
      return false;

    case types.OPEN_FORM:
      return true;

    default:
      return state;
  }
};

export default myReducer;
