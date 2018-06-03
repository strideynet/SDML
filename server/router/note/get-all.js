const Note = require('../../models/note')

module.exports = function (req, res, next) {
  Note.find({}).exec().then((notes) => {
    res.status(200).json(notes)
  }).catch((err) => {
    next(err)
  })
}
