/**
 Initialises the database and root user on first run.
 */

module.exports = function () {
  const User = require('../models/user').model

  User.find({}).exec().then((docs) => {
    if (docs.length === 0) {
      console.log('No existing users found. Creating root user!')

      let root = new User({
        firstName: 'Root',
        lastName: 'User',
        email: 'root@org'
      })

      let password = Math.random().toString(36).substring(7)
      console.log('Password for root: ' + password)
      console.warn('Change this immediately!')

      return root.setPassword(password) // This command implicitly saves, so will also save the user.
    }
  }).then(() => {
    console.log('Root password saved successfully!')
  }).catch((err) => {
    console.error(err)

    process.exit(1)
  })
}
