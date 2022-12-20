import React, {Component} from 'react';
import './Task.css';
import {formatDistanceToNow} from 'date-fns';

const Task = ({ done, doneTask, taskName, taskTime, onDelete}) => {



    taskTime = formatDistanceToNow(taskTime)
    let className = 'view'
    if (done) {
        className += ' completed'
    }
    if (taskTime === 'less than a minute')  {
        taskTime = 'created less 30 seconds ago'
    } else if (taskTime.includes('minute')) {
        taskTime = `created ${taskTime.split(' ')[0]} minutes ago`
    } else if (taskTime.includes('hours')) {
        taskTime = `created ${taskTime.split(' ')[0]} hours ago`
    }
    return (
        <div className={className}>
            <input className="toggle" type="checkbox" onClick={doneTask}/>
            <label>
                <span className='description'>{ taskName }</span>
                <span className="created">{ taskTime}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
    );
}

export default Task;