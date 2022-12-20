import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import NewTaskForm from '../NewTaskForm/NewTaskForm';


class App extends Component {


    idx = 100;
    state = {
        todoData: [
            {id: 1,
                taskName: 'Completed task',
                taskTime: new Date(),
                done: false
            },
            {id: 2,
                taskName: 'Active task',
                taskTime: new Date(),
                done: false
            },
            {id: 3,
                taskName: 'Active task',
                taskTime: new Date(),
                done: false
            }
        ],
        activeTask: [],
        completedTask: [],
        filterStatus: 'All'
    };

    deleteTask = (id) => {
        this.setState(({todoData}) => {

            const idx = todoData.findIndex((el) => el.id === id);
            const todoDataArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: todoDataArr,
            };
        });
    };

    addTask = (text) => {
        const newTask = [{
            id: this.idx++,
            taskName: text,
            taskTime: new Date(),
            done: false
        }];
        this.setState(({todoData}) => {
            const newArr = [...todoData, ...newTask];
            return {
                todoData: newArr
            };
        });
    };

    doneTask = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newObj = [{...todoData[idx], done: !todoData[idx].done}];
            const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)];
            return {
                todoData: newData,
            };
        });

    };

    getFilterStatusFromFooter = (status) => {
        if (status === 'Active') {
            this.setState(({todoData}) => {
                const newArr = todoData.filter(el => !el.done)
                return {
                    filterStatus: status,
                    activeTask: newArr
                }
            })
        } else if (status === 'All') {
            this.setState(({todoData}) => {
                return {
                    filterStatus: status
                }
            })
        } else {
            this.setState(({todoData}) => {
                const newArr = todoData.filter(el => el.done)
                return {
                    filterStatus: status,
                    completedTask: newArr
                }
            })
        }

    };

    clearCompleted = () => {
        this.setState(({todoData}) => {
            const newArr = todoData.filter(el => !el.done)
            return {
                todoData: newArr
            }
        })
    }

    render() {
        return (
            <section className="todoapp">
                <Header/>
                <NewTaskForm addTask={this.addTask}
                />
                <section className="main">
                    <TaskList todos={this.state.todoData}
                              activeTask={this.state.activeTask}
                              comletedTask={this.state.completedTask}
                              onDelete={this.deleteTask}
                              doneTask={this.doneTask}
                              filterStatus={this.state.filterStatus}
                    />
                    <Footer getFilterStatusFromFooter={this.getFilterStatusFromFooter}
                            countTask={this.state.todoData.length}
                            countCompletedTask={this.state.completedTask.length}
                            countActiveTask={this.state.activeTask.length}
                            clearCompleted={this.clearCompleted}
                    />
                </section>
            </section>
        );
    }
}

export default App;