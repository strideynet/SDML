const express = require('express')

let router = express.Router()

/**
 * Simple healthcheck endpoint
 */
router.get('/', (req, res) => {
  res.status(200).json()
})

let checkJWT = require('../utils/jwt-wrapper.js').middleware

router.post('/auth/login', require('./auth/login.js'))
router.get('/auth/check', checkJWT, require('./auth/check.js'))

router.get('/po', checkJWT, require('./po/get-all.js'))
router.get('/po/:id', checkJWT, require('./po/get-one.js'))

router.get('/sinvoice', checkJWT, require('./invoice/get-all.js'))
router.get('/sinvoice/:id', checkJWT, require('./invoice/get-one.js'))

router.get('/note', checkJWT, require('./note/get-all.js'))
router.get('/note/:id', checkJWT, require('./note/get-one.js'))
router.get('/note/ref/:id', checkJWT, require('./note/get-ref.js'))

module.exports = router
