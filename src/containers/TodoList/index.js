import React, {Component} from 'react';

import AddTodo from '../AddTodo';

class TodoList extends Component {

    deleteTodoHandler = (todoIndex) => {
        const todos = [...this.state.todos];
        todos.splice(todoIndex, 1);
        this.setState({todos});
    };

    changeTodoHandler = (event, id) => {
        const todoIndex = this.state.todos.findIndex(t => t.id === id);

        const todo = {...this.state.todos[todoIndex]};

        todo.task = event.target.value;

        const todos = [...this.state.todos];
        todos[todoIndex] = todo;

        this.setState({todos});
    };

    render() {
        return (
            <AddTodo/>
        );
    }
}

export default TodoList;
