import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            </div>
        );
    }
}

export default App;
