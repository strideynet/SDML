const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('../utils/jwt-wrapper')

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  created: {type: Date, default: Date.now()},
  passHash: String,
  email: String
})

/**
 * Generates hash and saves the document. Returns a promise with the saved document.
 * @param password
 * @returns {Promise<any>}
 */
userSchema.methods.setPassword = function (password) {
  return bcrypt.genSalt(10).then((salt) => { // 10 remains the default hash difficulty
    return bcrypt.hash(password, salt)
  }).then((hashed) => {
    this.passHash = hashed

    return this.save()
  })
}

/**
 * Compares a given password with one in the database. Returns promise that will resolve with bool value.
 * @param passwordAttempt
 * @returns {Promise<any}
 */
userSchema.methods.checkPassword = function (passwordAttempt) {
  return bcrypt.compare(passwordAttempt, this.passHash)
}

/**
 * Generates a JWT for providing to client after authentication.
 *
 * TODO: Strip down the object to just relevant information.
 * @returns {Promise<string>}
 */
userSchema.methods.generateJWT = function () {
  return jwt.sign(this.toObject())
}

let User = mongoose.model('User', userSchema)

module.exports = {model: User, schema: userSchema}
