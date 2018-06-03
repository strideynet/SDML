const PurchaseOrder = require('../../models/purchase-order')

module.exports = function (req, res, next) {
  PurchaseOrder.findOne({_id: req.params.id}).exec().then((purchaseOrder) => {
    res.status(200).json(purchaseOrder)
  }).catch((err) => {
    next(err)
  })
}