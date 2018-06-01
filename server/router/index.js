const express = require('express')

let router = express.Router()

/**
 * Simple healthcheck endpoint
 */
router.get('/', (req, res) => {
  res.status(200).json()
})

let checkJWT = require('../utils/check-JWT.js')

router.post('/auth/login', require('./auth/login.js'))
router.get('/auth/check', checkJWT, require('./auth/check.js'))

module.exports = router
