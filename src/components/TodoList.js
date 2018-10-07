import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ listOfTasks }) => (
    <ul>
        {
            listOfTasks.map((task, index) => <li key={index}>{task}</li>)
        }
    </ul>
)

TodoList.propTypes = {
    listOfTasks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default TodoList;