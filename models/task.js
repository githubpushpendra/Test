const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  task: {
    type: String
    //required: true
  },
  time: {
    type: Date,
    //required: true,
    //default: Date.now
  },
  category: {
    type: String
    //required: true
  }
})

module.exports = mongoose.model('Task', taskSchema)