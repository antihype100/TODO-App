import React from "react"
import "./TasksFilter.css"

const TasksFilter = (props) => {

  const { filterActiveTask, filterAllTask, filterCompletedTask, tabStatus } = props

  let allBtn = ""
  let activeBtn = ""
  let completedBtn = ""
  if (tabStatus === "All") {
    allBtn = "selected"
  } else if (tabStatus === "Active") {
    activeBtn = "selected"
  } else if (tabStatus === "Completed") {
    completedBtn = "selected"
  }

  return (
    <ul className="filters">
      <li>
        <button className={allBtn} onClick={filterAllTask}>All</button>
      </li>
      <li>
        <button className={activeBtn} onClick={filterActiveTask}>Active</button>
      </li>
      <li>
        <button className={completedBtn} onClick={filterCompletedTask}>Completed</button>
      </li>
    </ul>
  )
}

export default TasksFilter