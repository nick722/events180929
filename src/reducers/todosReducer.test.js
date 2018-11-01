import todosReducer from "./todosReducer";
import * as types from "../constants/ActionTypes";

describe("todosReducer", () => {
  it("should return the initial state", () => {
    expect(todosReducer(undefined, {})).toEqual([]);
  });

  it("should add tasks to the empty state", () => {
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

  it("should apend tasks to not empty state", () => {
    expect(
      todosReducer(
        [
          {
            task: "Test appending tasks into not empty state",
            isDone: false,
            id: 1
          }
        ],
        {
          type: types.ADD_TODO,
          text: "Append task to not empty state"
        }
      )
    ).toEqual([
      {
        task: "Test appending tasks into not empty state",
        isDone: false,
        id: 1
      },
      {
        task: "Append task to not empty state",
        isDone: false,
        id: 2
      }
    ]);
  });
});
