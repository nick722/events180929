import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddTodo from '../AddTodo';
import Todo from '../../components/Todo';

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <Todo
                key={todo.id}
                text={todo.task}
                {...todo}
            />
        ))}
    </ul>
)

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect (
    mapStateToProps
)(TodoList);
