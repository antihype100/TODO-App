import React from 'react';
import './TasksFilter.css'
const TasksFilter = ({filterActiveTask, filterAllTask, filterCompletedTask}) => {
    return (
        <ul className="filters">
            <li>
                <button className="selected" onClick={filterAllTask}>All</button>
            </li>
            <li>
                <button onClick={filterActiveTask}>Active</button>
            </li>
            <li>
                <button onClick={filterCompletedTask}>Completed</button>
            </li>
        </ul>
    )
}

export default TasksFilter