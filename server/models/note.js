const mongoose = require('mongoose')

let noteSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, //TODO: Check user is valid as part of validator
  created: {type: Date, default: Date.now()},
  content: {type: String, required: true},
  about: {type: mongoose.Schema.Types.ObjectId, refPath: 'aboutType', required: true}, //TODO: Check ref is valid as part of validator
  aboutType: {
    type: String,
    required: true,
    validate: {
      isAsync: true,
      validator: function (v, cb) {
        if (mongoose.modelNames().indexOf(v) >= 0) {
          return cb(true)
        }

        cb(false, 'Referenced type does not exist!')
      }
    }} // Type of object i.e 'PurchaseOrder', 'User', 'Supplier
})

let Note = mongoose.model('Note', noteSchema)

module.exports = {model: Note, schema: noteSchema}
