import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Todo from './Todo';

class App extends Component {
    state = {todos: []};

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
                <Todo/>
            </div>
        );
    }
}

export default App;
