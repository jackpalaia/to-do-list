import React from 'react'
import Task from './Task'

const Tasks = ({ taskList, deleteTask }) => {
  return (
    <div>
      <ul>
        {taskList.map(task => <Task key={task.content} deleteTask={deleteTask} task={task} />)}
      </ul>
    </div>
  )
}

export default Tasks