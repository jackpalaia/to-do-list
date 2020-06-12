const tasksRouter = require('express').Router()
const Task = require('../models/task')

tasksRouter.get('/', async (req, res) => {
  const tasks = await Task.find({})
  res.send(tasks.map(task => task.toJSON()))
})

tasksRouter.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (task) {
      res.send(task.toJSON())
    } else {
      res.status(404).end()
    }
  } catch (error) {
    next(error)
  }
})

tasksRouter.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

tasksRouter.post('/', async (req, res) => {
  const body = req.body
  const task = new Task({
    content: body.content,
    pinned: body.pinned || false,
    dateCreated: new Date(),
  })
  try {
    const savedTask = await task.save()
    res.send(savedTask.toJSON())
  } catch (error) {
    next(error)
  }
})

tasksRouter.put('/:id', async (req, res) => {
  const body = req.body
  const task = {
    content: body.content,
    dueDate: body.dueDate,
    pinned: body.pinned,
  }
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, task, { new: true })
    res.send(updatedTask.toJSON())
  } catch (error) {
    next(error)
  }
})

module.exports = tasksRouter