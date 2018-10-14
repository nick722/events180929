import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Todo from './Todo';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                task: '1810141202 Add styles to component',
                isDone: true
            },
            {
                id: 2,
                task: '1810141350 Render a list of todos with map',
                isDone: false
            }

        ]
    };

    changeHandler = (event) => {
        this.setState({
            todos: [...this.state.todos,
                {
                    todo: event.target.value,
                    isDone: false
                }
            ]
        });
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
                    onChange={this.changeHandler}
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

export default App;
