import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Footer from "../Footer/Footer";

class App extends Component{

    x = 1000

    state = {
        todoData: [
            {id: 1, taskName: 'Completed task', taskTime: 'created 17 seconds ago', important: false},
            {id: 2, taskName: 'Active task', taskTime: 'created 17 seconds ago', important: false},
            {id: 3, taskName: 'Active task', taskTime: 'created 17 seconds ago', important: false}
        ]
    }



    deleteTask = (id) => {

        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            console.log(todoData);
            const newState = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

            return {
                todoData: newState
            };
        });
    };

    render() {
        return (
            <section className="todoapp">
                <Header/>
                <section className="main">
                    <TaskList todos={this.state.todoData} onDelete={this.deleteTask} />
                    <Footer/>
                </section>
            </section>
        );
    }
}

export default App