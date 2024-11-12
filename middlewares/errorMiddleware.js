// a very simple error handler, needs to be completed
const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500
  const errMsg = err.message

  res.status(status).json({ message: errMsg })
}

module.exports = errorHandler
