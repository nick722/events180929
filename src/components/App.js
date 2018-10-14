import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Todo from './Todo';

class App extends Component {
    state = {
        todos: [
            {
                task: '1810141202 Add styles to component',
                isDone: true
            },
            {
                task: '1810141350 Render a list of todos with map',
                isDone: false
            }

        ]
    }

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

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.changeHandler}
                />
                {this.state.todos.map((todo) => (
                    <Todo
                        text={todo.task}
                    />
                ))}
            </div>
        );
    }
}

export default App;
