import * as constants from "../constants/ActionTypes";

export function addTodo(text) {
  return {
    type: constants.ADD_TODO,
    text
  };
}
