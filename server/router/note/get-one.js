const Note = require('../../models/note')

module.exports = function (req, res, next) {
  Note.findOne({_id: req.params.id}).exec().then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    next(err)
  })
}