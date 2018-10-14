import React from 'react';
import './Todo.css';

const Todo = ({text, deleteTodo}) => (
    <div className="Todo">
        <p>{text}</p>
        <button
            onClick={deleteTodo}
        >Delete</button>
    </div>
);

export default Todo;