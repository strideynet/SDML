const mongoose = require('mongoose')

let userSchema = new Schema({
  firstName: String,
  lastName: String,
  created: {type: Date, default: Date.now()},
  passHash: String,
  email: String
})

let User = mongoose.model('User', userSchema )