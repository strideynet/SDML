const mongoose = require('mongoose')

let supplierInvoiceSchema = new mongoose.Schema({
  supplier: {ref: 'Supplier', type: mongoose.Schema.Types.ObjectId},
  received: {type: Date, default: Date.now()},
  paid: {type: Date, default: null}, // null for unpaid value
  created: {type: Date, default: Date.now()},
  purchaseOrders: [{ref: 'PurchaseOrder', type: mongoose.Schema.Types.ObjectId}],
  value: {type: Number, required: false} // Optional field
})

let SupplierInvoice = mongoose.model('SupplierInvoice', supplierInvoiceSchema)

module.exports = {model: SupplierInvoice, schema: supplierInvoiceSchema}
