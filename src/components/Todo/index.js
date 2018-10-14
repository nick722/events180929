import React from 'react';
import './Todo.css';

const Todo = ({text, changeTodo, deleteTodo}) => (
    <div className="Todo">
        <p>{text}</p>
        <input
            type="text"
            onChange={changeTodo}
            value={text}
        />
        <button
            onClick={deleteTodo}
        >Delete</button>
    </div>
);

export default Todo;