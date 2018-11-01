const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
          task: action.text,
          isDone: false
        }
      ];
    default:
      return state;
  }
};

export default todos;
