import * as types from "../constants/ActionTypes";

let initialState = {
  // id: "",
  // name: "",
  // status: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      return { ...state, ...action.task };

    default:
      return { ...state };
  }
};

export default myReducer;
