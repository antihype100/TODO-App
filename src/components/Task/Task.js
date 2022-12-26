import React, { Component } from "react"
import "./Task.css"
import { formatDistanceToNow } from "date-fns"

const Task = (props) => {

  const { taskTime, done, doneTask, taskName, startTimer, stopTimer, time, onDelete } = props

  let className = "title"


  let taskTimeFormat = formatDistanceToNow(taskTime)
  if (done) {
    className += " completed"
  }
  if (taskTimeFormat === "less than a minute") {

    taskTimeFormat = "less 30 seconds ago"
  } else if (taskTimeFormat.includes("minute")) {
    taskTimeFormat = `created ${taskTimeFormat.split(" ")[0]} minutes ago`
  } else if (taskTimeFormat.includes("hours")) {
    taskTimeFormat = `created ${taskTimeFormat.split(" ")[0]} hours ago`
  }
  return (

    <div className="view">
      <input className="toggle" type="checkbox" onClick={doneTask} />
      <label>
        <span className={className}>{taskName}</span>
        <span className="description">
                  <button className="icon icon-play" onClick={startTimer}></button>
                  <button className="icon icon-pause" onClick={stopTimer}></button>
            <span>{`${Math.floor(time / 60).toString().padStart(2, "0")}:${Math.floor(time % 60).toString().padStart(2, "0")}`}</span>
                </span>
        <span className="created">{taskTimeFormat}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={onDelete}></button>
    </div>


  )


}

export default Task