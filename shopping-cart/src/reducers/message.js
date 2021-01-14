import * as Types from "../constants/Actiontype";
import * as Message from "./../constants/Message";

let innitialSate = Message.MSG_WELCOME;
const message = (state = innitialSate, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default message;
