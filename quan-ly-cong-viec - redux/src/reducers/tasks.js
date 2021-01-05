import * as types from "./../constans/ActionTypes";

let data = JSON.parse(localStorage.getItem("tasks"));
console.log(types);
let initialState = data ? data : [];
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_All:
      return state;
      break;

    case types.ADD_TASK:
      console.log(action);
      return state;
      break;

    default:
      return state;
  }
};

export default myReducer;
