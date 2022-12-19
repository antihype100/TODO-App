import React, {Component} from 'react';
import './Task.css';

const Task = ({ done, doneTask, taskName, taskTime, onDelete}) => {
    let className = 'view'
    if (done) {
        className += ' completed'
    }
    return (
        <div className={className}>
            <input className="toggle" type="checkbox" onClick={doneTask}/>
            <label>
                <span className='description'>{ taskName }</span>
                <span className="created">{ taskTime }</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
    );
}

export default Task;