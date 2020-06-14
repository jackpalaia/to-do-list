import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import taskService from './services/service'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {(async () => setTasks(await taskService.getAll()))()}, [])

  const handleFormSubmit = async e => {
    e.preventDefault()
    const newTask = {
      content: inputValue,
      pinned: false,
      dateCreated: new Date()
    }
    setTasks(tasks.concat(await taskService.create(newTask)))
    setInputValue('')
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleDelete = id => {
    const task = tasks.find(t => t.id === id)
    taskService.remove(id)
      .then(() => setTasks(tasks.filter(t => t !== task)))
  }

  return (
    <div>
      <Input submit={handleFormSubmit} inputValue={inputValue} inputChange={handleInputChange}/>
      <Tasks taskList={tasks} deleteTask={handleDelete}/>
    </div>
  )
}

export default App