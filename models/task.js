const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const taskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  pinned: Boolean,
  dateCreated: Date
})

taskSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  }
})

module.exports = mongoose.model('Task', taskSchema)