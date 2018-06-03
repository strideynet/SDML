const Note = require('../../models/note')

module.exports = function (req, res, next) {
  Note.find({about: req.params.id}).exec().then((notes) => {
    res.status(200).json(notes)
  }).catch((err) => {
    next(err)
  })
}