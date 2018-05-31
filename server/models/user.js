const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  created: {type: Date, default: Date.now()},
  passHash: String,
  email: String
})

/**
 * Generates hash and saves the document.
 * @param password
 * @returns {Promise<any>}
 */
userSchema.methods.setPassword = function (password) {
  return new Promise(function (resolve, reject) {
    bcrypt.genSalt(10).then((salt) => { // 10 remains the default hash difficulty
      return bcrypt.hash(password, salt)
    }).then((hashed) => {
      this.passHash = hashed

      return this.save()
    })
  })
}

/**
 * Compares a given password with one in the database.
 * @param passwordAttempt
 * @returns {Promise<any}
 */
userSchema.methods.checkPassword = function (passwordAttempt) {
  return bcrypt.compare(passwordAttempt, this.passHash)
}
let User = mongoose.model('User', userSchema)

module.exports = {model: User, schema: userSchema}
