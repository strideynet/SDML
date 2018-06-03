const PurchaseOrder = require('../../models/purchase-order')

module.exports = function (req, res, next) {
  PurchaseOrder.find({}).exec().then((purchaseOrders) => {
    res.status(200).json(purchaseOrders)
  }).catch((err) => {
    next(err)
  })
}