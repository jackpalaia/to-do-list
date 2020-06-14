import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import taskService from './services/service'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('')

  console.log(typeof tasks)

  useEffect(() => {
    (async () => setTasks(await taskService.getAll()))()
  }, [])

  console.log(typeof tasks)

  const handleFormSubmit = e => {
    e.preventDefault()
    setTasks(tasks.concat(inputValue))
    setInputValue('')
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <Input submit={handleFormSubmit} inputValue={inputValue} inputChange={handleInputChange}/>
      <Tasks taskList={tasks} />
    </div>
  )
}

export default App;