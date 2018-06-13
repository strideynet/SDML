const Note = require('../../models/note.js').model

module.exports = function (req, res, next) {
  if (req.body) {
    let newNote = new Note(req.body)

    newNote.validate().then(() => {
      return newNote.save()
    }).then((saved) => {
      res.status(200).json(saved)
    }).catch((err) => {
      next(err)
    })
  }
}