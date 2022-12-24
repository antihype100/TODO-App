import React, { Component } from "react"
import "./Task.css"
import { formatDistanceToNow } from "date-fns"

class Task extends Component {

  state = {}


  className = "title"


  render() {
    let taskTime = formatDistanceToNow(this.props.taskTime)
    if (this.props.done) {
      this.className += " completed"
    }
    if (taskTime === "less than a minute") {
      taskTime = "less 30 seconds ago"
    } else if (taskTime.includes("minute")) {
      taskTime = `created ${taskTime.split(" ")[0]} minutes ago`
    } else if (taskTime.includes("hours")) {
      taskTime = `created ${taskTime.split(" ")[0]} hours ago`
    }
    return (

      <div className="view">
        <input className="toggle" type="checkbox" onClick={this.props.doneTask} />
        <label>
          <span className={this.className}>{this.props.taskName}</span>
          <span className="description">
                  <button className="icon icon-play" onClick={this.props.startTimer}></button>
                  <button className="icon icon-pause" onClick={this.props.stopTimer}></button>
            <span>{`${Math.floor(this.props.time / 60).toString().padStart(2, "0")}:${Math.floor(this.props.time % 60).toString().padStart(2, "0")}`}</span>
                </span>
          <span className="created">{taskTime}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={this.props.onDelete}></button>
      </div>


    )
  }


}

export default Task