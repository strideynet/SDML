/**
 * Wraps JWT with Promises and handles the the secret in a single location.
 */
let jsonwebtoken = require('jsonwebtoken')
let User = require('../models/user').model
let exp = {}

let secret = require('config').get('secret')

exp.verify = function (jwt) {
  return new Promise((resolve, reject) => {
    jsonwebtoken.verify(jwt, secret, (err, decoded) => {
      if (err) {
        return reject(err)
      }

      resolve(decoded)
    })
  })
}

exp.sign = function (payload) {
  return new Promise((resolve, reject) => {
    jsonwebtoken.sign(payload, secret, (err, jwt) => {
      if (err) {
        return reject(err)
      }

      resolve(jwt)
    })
  })
}

/**
 * Middleware that checks and verifies a JWT. Decodes to req.user
 * @param req
 * @param res
 * @param next
 */
exp.middleware = function (req, res, next) {
  if (req.headers.jwt) {
    exp.verify(req.headers.jwt).then((decoded) => {
      if (decoded._id) {
        return User.findOne({_id: decoded._id}).exec()
      } else {
        return Promise.reject(new Error('Malformed JWT'))
      }
    }).then((user) => {
      req.user = user
      next()
    }).catch((err) => {
      next(err)
    })
  } else {
    next(new Error('No token provided.'))
  }
}

module.exports = exp
