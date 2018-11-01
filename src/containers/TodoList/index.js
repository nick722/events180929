import React, { Component } from "react";
import { connect } from "react-redux";

import AddTodo from "../AddTodo";
import Todo from "../../components/Todo";

const deleteTodoHandler = () => {
  console.log('button "Delete" clicked');
};

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        text={todo.task}
        deleteTodo={deleteTodoHandler}
        {...todo}
      />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
