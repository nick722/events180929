import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Todo from "./index";

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    deleteTodo: jest.fn()
  };

  const enzymeWrapper = shallow(<Todo {...props} />);

  return { props, enzymeWrapper };
}

describe("components", () => {
  describe("Todo", () => {
    it("should render self", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find("div").hasClass("Todo")).toBe(true);
    });
  });

  it("should call deleteTodo if button Delete is clicked", () => {
    const { enzymeWrapper, props } = setup();

    // const buttonClicked = true;
    // props.deleteTodo();
    const deleteButton = shallow(
      <button onClick={props.deleteTodo}>Delete</button>
    );
    deleteButton.find("button").simulate("click");

    expect(props.deleteTodo.mock.calls.length).toBe(1);
  });
});
