const express = require('express')
const app = express()
const tasksRouter = require('./controllers/tasks')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const cors = require('cors')

logger.info(`connecting to ${config.MONGODB_URI}`)

try {
  await mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  logger.info('connected to MongoDB')
} catch (error) {
  logger.error(`error connecting to mongoDB: ${error}`)
}

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(express.midd)

app.use('/api/tasks', tasksRouter)