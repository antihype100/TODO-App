import React, {Component} from 'react';
import './NewTaskForm.css'
class NewTaskForm extends Component {

    state = {
        label: ''
    }

    onLabelChage = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.label === '') {
            return
        }
        this.props.addTask(this.state.label, new Date().toDateString())
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input placeholder='What needs to be done?'
                       autoFocus
                       type='text'
                       className='new-todo'
                       value={this.state.label}
                       onChange={this.onLabelChage}
                />
            </form>
        )
    }

}

export default NewTaskForm