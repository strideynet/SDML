const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('../utils/jwt-wrapper')

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  created: {type: Date, default: Date.now()},
  passHash: String,
  email: {
    type: String,
    lowercase: true
  },
  permissions: [{type: String, lowercase: true}]
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
 * Checks if user can complete action and resolves with true or false. In future will handle group inheritance and other
 * permission features, hence it returning a promise as it might need to hit the DB.
 * @param permission
 * @returns {Promise<Boolean>}
 */
userSchema.methods.checkPermission = function (permission) {
  return new Promise((resolve, reject) => {
    if (this.permissions.indexOf(permission) >= 0) {
      resolve(true)
    } else {
      resolve(false)
    }

    reject(new Error('Placeholder ERR')) // Impossible path but acts as placeholder for DB errors.
  })
}

/**
 * Compares a given password with one in the database. Returns promise that will resolve with bool value.
 * @param passwordAttempt
 * @returns {Promise<any}
 */
userSchema.methods.checkPassword = function (passwordAttempt) {
  return bcrypt.compare(passwordAttempt, this.passHash) // bcrypt returns a promise with bool true/false
}

/**
 * Generates a JWT for providing to client after authentication.
 *
 * @returns {Promise<string>}
 */
userSchema.methods.generateJWT = function () {
  return jwt.sign({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    _id: this._id,
    permissions: this.permissions
  })
}

let User = mongoose.model('User', userSchema)

module.exports = {model: User, schema: userSchema}
