import * as constants from "../constants";

export function addTodo(text) {
  return {
    type: constants.ADD_TODO,
    text
  };
}
