import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';


const fakeTodos = [
    '18.10.07-10:12 pass props to child, ',
    '18.10.07-10:24 pass an array of todos'
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            listOfTasks: []
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            task: '',
            listOfTasks: [...this.state.listOfTasks, this.state.task]
        });
    }

    onChange = (input) => {
        return this.setState({task: input.target.value});
    };

    render() {
        return (
            <div>
                <h1>YNTodolist</h1>
                <NewTodo
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                <TodoList listOfTasks={this.state.listOfTasks}/>
            </div>
        );
    }
}


export default App;
