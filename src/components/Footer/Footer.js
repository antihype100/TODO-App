import React, {Component} from 'react';
import './Footer.css'
import TasksFilter from '../TasksFilter/TasksFilter';
import PropTypes from 'prop-types';

class Footer extends Component{

    static defaultProps = {
        filterStatus: 'All',
        countTask: 0
    }

    static propTypes = {
        filterStatus: PropTypes.string,
        countTask: PropTypes.number
    }

    state = {
        filter: 'All'
    }

    filterCompletedTask = () => {

        this.setState({
            filter: 'Completed'
        })
        this.props.getFilterStatusFromFooter('Completed')


    }

    filterAllTask = () => {

        this.setState({
            filter: 'All'
        })
        this.props.getFilterStatusFromFooter('All')
    }

    filterActiveTask = () => {

        this.setState({
            filter: 'Active'
        })
        this.props.getFilterStatusFromFooter('Active')
    }


    render() {
        let countTask = this.props.countTask
        if (this.state.filter === 'Active') {
            countTask = this.props.countActiveTask
        } else if (this.state.filter === 'Completed') {
            countTask = this.props.countCompletedTask
        }
        return (
            <footer className="footer">
                <span className="todo-count">{countTask} items left</span>
                <TasksFilter filter={this.state.filter}
                             tabStatus={this.state.filter}
                             filterAllTask={this.filterAllTask}
                             filterCompletedTask={this.filterCompletedTask}
                             filterActiveTask={this.filterActiveTask}
                />
                <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
            </footer>
        );
    }
};

export default Footer;