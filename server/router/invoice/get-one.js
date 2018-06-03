const Invoice = require('../../models/supplier-invoice')

module.exports = function (req, res, next) {
  Invoice.findOne({_id: req.params.id}).exec().then((invoice) => {
    res.status(200).json(invoice)
  }).catch((err) => {
    next(err)
  })
}