const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

let individualItemSchema = new mongoose.Schema({
  quantity: Number,
  description: String
})

let purchaseOrderSchema = new mongoose.Schema({
  supplier: {type: mongoose.Schema.Types.ObjectId, ref: 'Supplier'},
  items: [individualItemSchema],
  title: String,
  expectedDelivery: Date,
  number: Number,
  ordered: {type: Date, default: Date.now()},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  workOrder: [{type: mongoose.Schema.Types.ObjectId}]
})

purchaseOrderSchema.plugin(autoIncrement.plugin, {model: 'PurchaseOrder', field: 'number'})

let PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema)

module.exports = {model: PurchaseOrder, schema: purchaseOrderSchema}
