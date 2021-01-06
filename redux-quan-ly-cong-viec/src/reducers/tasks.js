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

const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

let data = JSON.parse(localStorage.getItem("tasks"));

let initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
  let index;
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.SAVE_TASK:
      let newTask = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status === true ? true : false,
      };

      if (!newTask.id) {
        newTask.id = randomID();
        state.push(newTask);
      } else {
        index = findIndex(state, newTask.id);
        state[index] = newTask;
      }

      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case types.UPDATE_STATUS_TASK:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          status: !state[index].status,
        };
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];

    case types.DELETE_TASK:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];

    default:
      return state;
  }
};

export default myReducer;
