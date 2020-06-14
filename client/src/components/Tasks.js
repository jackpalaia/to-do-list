import React from 'react'
import Task from './Task'

const Tasks = ({ taskList }) => {
  return (
    <div>
      <ul>
        {taskList.map((task, i) => <Task key={task + i} task={task.content} />)}
      </ul>
    </div>
  )
}

export default Tasks