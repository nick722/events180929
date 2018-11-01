export function fetchTodoList() {
  return dispatch => {
    dispatch(fetchTodoListBegin());
    return fetch("/");
  };
}
