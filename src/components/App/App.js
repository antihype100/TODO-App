import React, { Component } from "react"
import "./App.css"
import Header from "../Header/Header"
import TaskList from "../TaskList/TaskList"
import Footer from "../Footer/Footer"
import NewTaskForm from "../NewTaskForm/NewTaskForm"

class App extends Component {


  idx = 100
  state = {
    todoData: [{
      id: 1, taskName: "Completed task", taskTime: new Date(), done: false, time: 200, pause: false
    }, {
      id: 2, taskName: "Active task", taskTime: new Date(), done: false, time: 200, pause: false
    }, {
      id: 3, taskName: "Active task", taskTime: new Date(), done: false, time: 200, pause: false
    }],
    activeTask: [],
    completedTask: [],
    filterStatus: "All"
  }

  componentDidMount() {
    this.interval = setInterval(() => {

      this.setState(({ todoData }) => {
        let newArr = todoData.map(el => {
          if (el.time === 0) {
            return el
          }
          if (!el.pause) {
            el.time = el.time - 1
          }
          return el
        })
        return {
          todoData: newArr
        }

      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      console.log(10)
      const idx = todoData.findIndex((el) => el.id === id)
      const todoDataArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: todoDataArr
      }
    })
  }

  addTask = (text, time) => {
    const newTask = [{
      id: this.idx++,
      taskName: text,
      taskTime: new Date(),
      done: false,
      time: time,
      pause: false
    }]
    console.log(newTask[0].id)
    this.setState(({ todoData }) => {
      const newArr = [...todoData, ...newTask]
      return {
        todoData: newArr
      }
    })
  }

  doneTask = (id) => {
    console.log(10)
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newObj = [{ ...todoData[idx], done: !todoData[idx].done }]
      const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)]
      return {
        todoData: newData
      }
    })

  }

  getFilterStatusFromFooter = (status) => {
    if (status === "Active") {
      this.setState(({ todoData }) => {
        const newArr = todoData.filter(el => !el.done)
        return {
          filterStatus: status, activeTask: newArr
        }
      })
    } else if (status === "All") {
      this.setState(({ todoData }) => {
        return {
          filterStatus: status
        }
      })
    } else {
      this.setState(({ todoData }) => {
        const newArr = todoData.filter(el => el.done)
        return {
          filterStatus: status, completedTask: newArr
        }
      })
    }

  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter(el => !el.done)
      return {
        todoData: newArr
      }
    })
  }

  stopTimer = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)
      const newObj = [{ ...todoData[idx], pause: true }]
      const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)]
      return {
        todoData: newData
      }
    })
  }

  startTimer = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)
      const newObj = [{ ...todoData[idx], pause: false }]
      const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)]
      return {
        todoData: newData
      }
    })
  }


  render() {
    return (<section className="todoapp">
      <Header />
      <NewTaskForm addTask={this.addTask}
      />
      <section className="main">
        <TaskList todos={this.state.todoData}
                  activeTask={this.state.activeTask}
                  completedTask={this.state.completedTask}
                  onDelete={this.deleteTask}
                  doneTask={this.doneTask}
                  filterStatus={this.state.filterStatus}
                  stopTimer={this.stopTimer}
                  startTimer={this.startTimer}
        />
        <Footer getFilterStatusFromFooter={this.getFilterStatusFromFooter}
                countTask={this.state.todoData.length}
                countCompletedTask={this.state.completedTask.length}
                countActiveTask={this.state.activeTask.length}
                clearCompleted={this.clearCompleted}
        />
      </section>
    </section>)
  }
}

export default App