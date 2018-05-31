const User = require('../../../models/user.js')

module.exports = function (req, res, next) {
  if (req.body.email && req.body.password) { // Check fields exist
    User.findOne({email: req.body.email}).exec().then((user) => {
      if (user) return user.checkPassword(req.body.password)

      return Promise.rejection('No user')
    }).then((correct) => {
      if (correct) {
        res.status(200).json('password correct')
      }
    })
  }
}