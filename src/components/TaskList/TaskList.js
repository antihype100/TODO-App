import React, { Component } from "react"

import Task from "../Task/Task"
import "./TaskList.css"

class TaskList extends Component {
  filterFunc = function() {
    if (this.props.filterStatus === "Active") {
      return this.props.activeTask.map((task) => {
        const { id, ...taskProps } = task

        return (
          <li key={id}>
            <Task {...taskProps}
                  onDelete={() => this.props.onDelete(id)}
                  doneTask={() => this.props.doneTask(id)}
                  stopTimer={() => this.props.stopTimer(id)}
                  startTimer={() => this.props.startTimer(id)}

            />
          </li>
        )
      })
    } else if (this.props.filterStatus === "All") {
      return this.props.todos.map((task) => {
        const { id, ...taskProps } = task

        return (
          <li key={id}>
            <Task {...taskProps}
                  onDelete={() => this.props.onDelete(id)}
                  doneTask={() => this.props.doneTask(id)}
                  stopTimer={() => this.props.stopTimer(id)}
                  startTimer={() => this.props.startTimer(id)}

            />
          </li>
        )
      })
    } else {
      return this.props.comletedTask.map((task) => {
        const { id, ...taskProps } = task

        return (
          <li key={id}>
            <Task {...taskProps}
                  onDelete={() => this.props.onDelete(id)}
                  doneTask={() => this.props.doneTask(id)}
                  stopTimer={() => this.props.stopTimer(id)}
                  startTimer={() => this.props.startTimer(id)}

            />
          </li>
        )
      })
    }
  }

  render() {
    return <ul className="todo-list">{this.filterFunc()}</ul>
  }
}

export default TaskList
