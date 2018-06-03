const mongoose = require('mongoose')
const noteSchema = require('./schemas/note')

let contactSchema = new mongoose.Schema({
  name: String,
  description: String,
  email: String,
  telephone: String,
  address: {
    firstLine: String,
    secondLine: String,
    postCode: String
  },
  notes: [noteSchema]
})

let supplierSchema = new mongoose.Schema({
  companyName: String,
  type: String,
  created: {type: Date, default: Date.now()},
  passHash: String,
  email: String,
  notes: [noteSchema],
  contacts: [contactSchema]
})

let Supplier = mongoose.model('Supplier', supplierSchema)

module.exports = {model: Supplier, schema: supplierSchema}
