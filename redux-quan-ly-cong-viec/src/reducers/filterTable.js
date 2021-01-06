import * as types from "../constants/ActionTypes";

let initialState = {
  name: "",
  status: -1,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TABLE:
      //chuyen kieu
      action.filter.status = parseInt(action.filter.status, 10);
      return { ...state, ...action.filter };

    default:
      return { ...state };
  }
};

export default myReducer;
