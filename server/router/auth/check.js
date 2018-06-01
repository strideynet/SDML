module.exports = function (req, res, next) {
  res.status(200).json({}) // 200 is sent if JWT is good. 401 is sent if JWT is bad by middleware.
}