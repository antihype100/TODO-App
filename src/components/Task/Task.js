import React, {Component} from 'react';
import './Task.css';

class Task extends Component {

    state = {
        done: false,
        important: false
    }

    completeTask = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }


    render() {

        let className = 'view'
        if (this.state.done) {
            className += ' completed'
        }
        return (
            <div className={className}>
                <input className="toggle" type="checkbox" onClick={this.completeTask}/>
                <label>
                    <span className='description'>{ this.props.taskName }</span>
                    <span className="created">{ this.props.taskTime }</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={this.props.onDelete}></button>
            </div>
        );
    }
}

export default Task;