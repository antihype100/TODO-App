import React, { useState } from "react"
import "./NewTaskForm.css"

const NewTaskForm = (props) => {

  const { addTask } = props
  const [min, setMin] = useState("")
  const [sec, setSec] = useState("")
  const [title, setTitle] = useState("")


  const onLabelChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const onLabelChangeMin = (e) => {
    setMin(e.target.value)
  }
  const onLabelChangeSec = (e) => {
    setSec(e.target.value)
  }
  const onSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    if (title === "") {
      return
    }
    addTask(title, min, sec)
    setTitle("")
  }

  const onClickEnter = (e) => {
    if (e.keyCode === 13) {
      if (title !== "" && min !== "" && sec !== "") {
        addTask(title, parseInt(min) * 60 + parseInt(sec))
        setTitle("")
        setMin("")
        setSec("")
      }


    }
  }


  return (

    <form className="new-todo-form" onKeyDown={(e) => onClickEnter(e)}>
      <input placeholder="What needs to be done?"
             autoFocus
             type="text"
             value={title}
             className="new-todo"
             onChange={onLabelChangeTitle}
      />
      <input type="text"
             className="new-todo-form__timer"
             placeholder="Min"
             value={min}
             onChange={onLabelChangeMin}

      />
      <input type="text"
             className="new-todo-form__timer"
             placeholder="Sec"
             value={sec}
             onChange={onLabelChangeSec}

      />

    </form>
  )

}

export default NewTaskForm