const mongoose = require('mongoose')

let noteSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  created: {type: Date, default: Date.now()},
  content: String
})

module.exports = noteSchema