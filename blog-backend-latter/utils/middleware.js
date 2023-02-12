const logger = require("./logger");

const requestLogger = (req, res, next) => {
  logger.info("Method: ", req.method);
  logger.info("Path: ", req.path);
  logger.info("Body: ", res.Body);
  logger.info("-----");
  next();
};
/**
 * It will show up if we hit an endpoint which is not valid or
 * which is not available in the app file. So what we can do
 * is just check if we have added our router in the app.js
 * or if we are hitting in invalid  route
 */
const unknownEndpoint = (req, res) => {
  res.status(404).send({
    error: "unknown endpoint",
  });
};

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return res.status(400).json({
      error: "Malformatted id",
    });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({
      error: error.message,
    });
  }

  next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
