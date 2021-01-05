import * as types from "./../constants/ActionTypes";

/** start function de random id */
const S4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}; //random 1 chuoi

const randomID = () => {
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4()
  );
};
/** end function de random id */

let data = JSON.parse(localStorage.getItem("tasks"));

let initialState = data ? data : [];
console.log(types.LIST_ALL);
console.log(types.ADD_TASK);

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.ADD_TASK:
      var newTask = {
        id: randomID(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
  return state;
};

export default myReducer;
