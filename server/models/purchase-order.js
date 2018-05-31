const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
const noteSchema = require('./schemas/note')

let individualItemSchema = new mongoose.Schema({
  quantity: Number,
  description: String
})

let purchaseOrderSchema = new mongoose.Schema({
  supplier: {type: mongoose.Schema.Types.ObjectId, ref: 'Supplier'},
  items: [individualItemSchema],
  title: String,
  notes: [noteSchema],
  expectedDelivery: Date,
  ordered: {type: Date, default: Date.now()},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

purchaseOrderSchema.plugin(autoIncrement.plugin, 'PurchaseOrder')

let PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema )