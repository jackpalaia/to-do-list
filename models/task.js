const mongoose = require('mongoose')

mongoose.set('useFindAndModify', true)

const taskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  dateCreated: Date,
  dueDate: Date,
  pinned: Boolean
})

taskSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  }
})

module.exports = mongoose.model('Task', taskSchema)