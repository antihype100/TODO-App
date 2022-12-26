import React, { Component, useState } from "react"
import "./Footer.css"
import TasksFilter from "../TasksFilter/TasksFilter"
import PropTypes from "prop-types"

const Footer = (props) => {

  const [filter, setFilter] = useState("All")
  const {
    getFilterStatusFromFooter,
    countTask,
    filterInApp,
    countActiveTask,
    countCompletedTask,
    clearCompleted
  } = props
  const defaultProps = {
    filterStatus: "All",
    countTask: 0
  }

  const propTypes = {
    filterStatus: PropTypes.string,
    countTask: PropTypes.number
  }


  const filterCompletedTask = () => {
    setFilter("Completed")
    getFilterStatusFromFooter("Completed")
  }

  const filterAllTask = () => {

    setFilter("All")
    getFilterStatusFromFooter("All")
  }

  const filterActiveTask = () => {

    setFilter("Active")
    getFilterStatusFromFooter("Active")
  }


  let countTaskHandler = countTask
  if (filter === "Active") {
    countTaskHandler = countActiveTask
  } else if (filter === "Completed") {
    countTaskHandler = countCompletedTask
  }

  return (
    <footer className="footer">
      <span className="todo-count">{countTaskHandler} items left</span>
      <TasksFilter filter={filter}
                   tabStatus={filter}
                   filterAllTask={filterAllTask}
                   filterCompletedTask={filterCompletedTask}
                   filterActiveTask={filterActiveTask}
      />
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  )

}

export default Footer