import * as types from "../constants/ActionTypes";

let initialState = {
  by: "sortName",
  value: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT_TASK:
      return { ...state, ...action.sort };

    default:
      return { ...state };
  }
};

export default myReducer;
