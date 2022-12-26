import React from "react"

import Task from "../Task/Task"
import "./TaskList.css"

const TaskList = (props) => {

  const { completedTask, todos, filterStatus, activeTask, onDelete, doneTask, stopTimer, startTimer } = props

  const filterFunc = () => {
    if (filterStatus === "Active") {
      return activeTask.map((task) => {
        let { id, ...taskProps } = task

        return (
          <li key={id}>
            <Task {...taskProps}
                  onDelete={() => onDelete(id)}
                  doneTask={() => doneTask(id)}
                  stopTimer={() => stopTimer(id)}
                  startTimer={() => startTimer(id)}

            />
          </li>
        )
      })
    } else if (filterStatus === "All") {
      return todos.map((task) => {
        const { id, ...taskProps } = task

        return (
          <li key={id}>
            <Task {...taskProps}
                  onDelete={() => onDelete(id)}
                  doneTask={() => doneTask(id)}
                  stopTimer={() => stopTimer(id)}
                  startTimer={() => startTimer(id)}

            />
          </li>
        )
      })
    } else {
      return completedTask.map((task) => {
        const { id, ...taskProps } = task

        return (
          <li key={id}>
            <Task {...taskProps}
                  onDelete={() => onDelete(id)}
                  doneTask={() => doneTask(id)}
                  stopTimer={() => stopTimer(id)}
                  startTimer={() => startTimer(id)}

            />
          </li>
        )
      })
    }
  }

  return (
    <ul className="todo-list">
      {filterFunc()}
    </ul>
  )

}

export default TaskList
