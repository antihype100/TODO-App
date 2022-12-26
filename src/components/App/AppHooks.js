import React, { useEffect, useState } from "react"
import "./App.css"
import Header from "../Header/Header"
import TaskList from "../TaskList/TaskList"
import Footer from "../Footer/Footer"
import NewTaskForm from "../NewTaskForm/NewTaskForm"


const App = () => {

  let idx = 100
  const [todoData, setTodoData] = useState(
    [{
      id: 1, taskName: "Completed task", taskTime: new Date(), done: false, time: 200, pause: false
    }, {
      id: 2, taskName: "Active task", taskTime: new Date(), done: false, time: 200, pause: false
    }, {
      id: 3, taskName: "Active task", taskTime: new Date(), done: false, time: 200, pause: false
    }])

  const [activeTask, setActiveTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])
  const [filterStatus, setFilterStatus] = useState("All")

  useEffect(() => {
    this.interval = setInterval(() => {
      const newArr = todoData.map(el => {
        if (el.time === 0) {
          return el
        }
        if (!el.pause) {
          el.time = el.time - 1
        }
        return el
      })
      setTodoData(newArr)

    }, 1000)
    return () => clearInterval(this.interval)
  })

  const deleteTask = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    const todoDataArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(todoDataArr)
  }

  const addTask = (text, time) => {
    const newTask = [{
      id: idx++,
      taskName: text,
      taskTime: new Date(),
      done: false,
      time: time,
      pause: false
    }]
    const newArr = [...todoData, ...newTask]
    setTodoData(newArr)

  }

  const doneTask = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    const newObj = [{ ...todoData[idx], done: !todoData[idx].done }]
    const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)]
    setTodoData(newData)


  }

  const getFilterStatusFromFooter = (status) => {
    if (status === "Active") {
      const newArr = todoData.filter(el => !el.done)
      setFilterStatus(status)
      setActiveTask(newArr)
    } else if (status === "All") {
      setFilterStatus(status)
    } else {
      const newArr = todoData.filter(el => el.done)
      setFilterStatus(status)
      setActiveTask(newArr)
    }

  }

  const clearCompleted = () => {
    const newArr = todoData.filter(el => !el.done)
    setTodoData(newArr)

  }

  const stopTimer = (id) => {
    const idx = todoData.findIndex(el => el.id === id)
    const newObj = [{ ...todoData[idx], pause: true }]
    const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)]
    setTodoData(newData)
  }

  const startTimer = (id) => {
    const idx = todoData.findIndex(el => el.id === id)
    const newObj = [{ ...todoData[idx], pause: false }]
    const newData = [...todoData.slice(0, idx), ...newObj, ...todoData.slice(idx + 1)]
    setTodoData(newData)
  }

  return (
    <section className="todoapp">
      <Header />
      <NewTaskForm addTask={addTask}
      />
      <section className="main">
        <TaskList todos={todoData}
                  activeTask={activeTask}
                  completedTask={completedTask}
                  onDelete={deleteTask}
                  doneTask={doneTask}
                  filterStatus={filterStatus}
                  stopTimer={stopTimer}
                  startTimer={startTimer}
        />
        <Footer getFilterStatusFromFooter={getFilterStatusFromFooter}
                countTask={todoData.length}
                countCompletedTask={completedTask.length}
                countActiveTask={activeTask.length}
                clearCompleted={clearCompleted}
        />
      </section>
    </section>)
}
