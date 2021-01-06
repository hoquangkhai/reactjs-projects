import * as types from "../constants/ActionTypes";

let initialState = {
  keyword: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_TASK:
      return { ...state, ...action.keyword };

    default:
      return { ...state };
  }
};

export default myReducer;
