import React, {Component} from 'react';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = (props) => {

    const element = props.todos.map((task) => {
        const {id, ...taskProps} = task;

        return (
            <li key={id}>
                <Task {...taskProps} onDelete={() => props.onDelete(id)}/>
            </li>
        );

    });


    return (
        <ul className="todo-list">
            {element}
        </ul>
    );

};

export default TaskList;