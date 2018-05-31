const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

let individualItemSchema = new Schema({
  quantity: Number,
  description: String
})

let noteSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  created
})

let purchaseOrderSchema = new Schema({
  supplier: {type: Schema.Types.ObjectId, ref: 'Supplier'},
  items: [individualItemSchema],
  title: String,
  notes: [noteSchema],
  expectedDelivery: Date,
  ordered: {type: Date, default: Date.now()},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

purchaseOrderSchema.plugin(autoIncrement.plugin, 'PurchaseOrder')

let PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema )