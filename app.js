const express = require('express')
const app = express()
const tasksRouter = require('./controllers/tasksRouter')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const cors = require('cors')

logger.info(`connecting to ${config.MONGODB_URI}`)

try {
  (async () => {
    await mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    logger.info('connected to MongoDB')
  })()
} catch (error) {
  logger.error(`error connecting to mongoDB: ${error}`)
}

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/tasks', tasksRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app