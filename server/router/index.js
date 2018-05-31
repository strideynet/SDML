const express = require('express')

let router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json()
})

router.post('/auth/login', require('./auth/login.js'))

module.exports = router
