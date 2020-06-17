const tasksRouter = require('express').Router()
const Task = require('../models/task')

tasksRouter.get('/', async (req, res) => {
  const tasks = await Task.find({})
  res.send(tasks.map(task => task.toJSON()))
})

tasksRouter.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id)
  if (task) {
    res.send(task.toJSON())
  } else {
    res.status(404).end()
  }
})

tasksRouter.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id)
  res.status(204).end()
})

tasksRouter.post('/', async (req, res) => {
  const task = new Task(req.body)
  const savedTask = await task.save()
  res.send(savedTask.toJSON())
})

tasksRouter.put('/:id', async (req, res) => {
  const task = req.body
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, task, { new: true })
  res.send(updatedTask.toJSON())
})

module.exports = tasksRouter