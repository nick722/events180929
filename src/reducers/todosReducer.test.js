import todosReducer from "./todosReducer";
import * as types from "../constants/ActionTypes";

describe("todosReducer reducer", () => {
  it("should return the initial state", () => {
    expect(todosReducer(undefined, {})).toEqual([]);
  });
});
