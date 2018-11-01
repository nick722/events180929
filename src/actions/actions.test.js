import * as actions from "./index";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const text = "Add a test for actions";
    const exprectedAction = {
      type: "ADD_TODO",
      id: 1,
      text
    };

    expect(actions.addTodo(text)).toEqual(exprectedAction);
  });
});
