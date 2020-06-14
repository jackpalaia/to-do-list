import React from 'react'

const Task = ({ task, deleteTask }) => {
  return (
    <div>
      <li>{task.content}<button onClick={() => deleteTask(task.id)}>delete</button></li>
    </div>
  )
}

export default Task