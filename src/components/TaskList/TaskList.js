import React, {Component} from 'react';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = (props) => {

    const filterFunc = function() {
        if (props.filterStatus === 'Active') {
            return props.activeTask.map((task) => {
                const {id, ...taskProps} = task;

                return (
                    <li key={id}>
                        <Task {...taskProps}
                              onDelete={() => props.onDelete(id)}
                              doneTask={() => props.doneTask(id)}
                        />
                    </li>
                );

            });
        } else if (props.filterStatus === 'All') {
            return props.todos.map((task) => {
                const {id, ...taskProps} = task;

                return (
                    <li key={id}>
                        <Task {...taskProps}
                              onDelete={() => props.onDelete(id)}
                              doneTask={() => props.doneTask(id)}
                        />
                    </li>
                );

            });
        } else {
            return props.comletedTask.map((task) => {
                const {id, ...taskProps} = task;

                return (
                    <li key={id}>
                        <Task {...taskProps}
                              onDelete={() => props.onDelete(id)}
                              doneTask={() => props.doneTask(id)}
                        />
                    </li>
                );

            });
        }
    }


    return (
        <ul className="todo-list">
            {filterFunc()}
        </ul>
    );

};

export default TaskList;