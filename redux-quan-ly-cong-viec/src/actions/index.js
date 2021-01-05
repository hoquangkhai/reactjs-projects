import * as types from "./../constants/ActionTypes";

console.log(types.LIST_ALL);
console.log(types.ADD_TASK);

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task: task,
  };
};
