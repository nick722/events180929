import todosReducer from "./todosReducer";
import * as types from "../constants/ActionTypes";

describe("todosReducer", () => {
  it("should return the initial state", () => {
    expect(todosReducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO action", () => {
    expect(
      todosReducer([], {
        type: types.ADD_TODO,
        text: "Add tests for reducers"
      })
    ).toEqual([
      {
        isDone: false,
        task: "Add tests for reducers",
        id: 1
      }
    ]);
  });
});
