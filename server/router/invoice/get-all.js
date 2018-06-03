const Invoice = require('../../models/supplier-invoice')

module.exports = function (req, res, next) {
  Invoice.find({}).exec().then((invoices) => {
    res.status(200).json(invoices)
  }).catch((err) => {
    next(err)
  })
}