/**
 * Wraps JWT with Promises and handles the the secret in a single location.
 */
let jsonwebtoken = require('jsonwebtoken')
let exports = {}

let secret = require('config').get('secret')

exports.verify = function (jwt) {
  return new Promise((resolve, reject) => {
    jsonwebtoken.verify(jwt, secret, (err, decoded) => {
      if (err) {
        return reject(err)
      }

      resolve(decoded)
    })
  })
}

exports.sign = function (payload) {
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
exports.middleware = function (req, res, next) {
  if (req.headers.jwt) {
    exports.verify(req.headers.jwt).then((decoded) => {
      req.user = decoded

      next()
    }).catch((err) => {
      next(err)
    })
  } else {
    next(new Error('No token provided.'))
  }
}

module.exports = exports
