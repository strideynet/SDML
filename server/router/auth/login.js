const User = require('../../models/user').model

/**
 * Handles logging in, handling a non existent user, incorrect password and any other errors.
 * @param req
 * @param res
 * @param next
 */
module.exports = function (req, res, next) {
  if (req.body.email && req.body.password) { // Check fields exist
    User.findOne({email: req.body.email.toLowerCase()}).exec().then((user) => { // Retrieve user from DB, will be null if no user.
      if (user) return user.checkPassword(req.body.password)

      return Promise.reject(new Error('No user found'))
    }).then((correct) => {
      if (correct) {
        return User.generateJWT()
      }

      return Promise.reject(new Error('Password incorrect'))
    }).then((jwt) => {
      res.status(200).json({jwt})
    }).catch((err) => {
      next(err)
    })
  }
}
