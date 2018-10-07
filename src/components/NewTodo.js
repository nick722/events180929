import React, {Component} from 'react';



const NewTodo = (props) => (
    <form onSubmit={props.onSubmit}>
        <input
            onChange={props.onChange}
            className="new-todo"
            placeholder="Create a task..."
            autoFocus={true}/>
        <button>Submit</button>
    </form>
);


export default NewTodo;
