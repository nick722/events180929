import React, {Component} from 'react';

import Todo from '../../components/Todo';

class TodoList extends Component {
    todoId = 0

    state = {
        todos: []
    };

    createTodoHandler = (event) => {
        if (event.which !== 13) return;


        this.setState({
            todos: [...this.state.todos,
                {
                    id: ++this.todoId,
                    task: event.target.value,
                    isDone: false
                }]
        })
    };

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
            <div>
                <input
                    type="text"
                    onKeyPress={this.createTodoHandler}
                />
                {this.state.todos.map((todo, index) => (
                    <Todo
                        text={todo.task}
                        changeTodo={(event) => this.changeTodoHandler(event, todo.id)}
                        deleteTodo={() => this.deleteTodoHandler(index)}
                        key={todo.id}
                    />
                ))}
            </div>
        );
    }
}

export default TodoList;
