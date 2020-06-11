import React from 'react'
import Task from '../components/Task'

const Tasks = ({ taskList }) => (
  <div>
    <ul>
      {taskList.map((task, i) => <Task key={i} task={task} />)}
    </ul>
  </div>
)

export default Tasks