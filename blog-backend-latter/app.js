/**
 * Importing environment variables @as config
 */
const config = require("./utils/config");
/**
 * Importing actual express
 */
const express = require("express");
/**
 * calling the actual express function
 */
const app = express();
/**
 * Addinf cors policy to run frontend withoutany issues
 */
const cors = require("cors");

/**
 * Importing blogsRouter
 */
const blogsRouter = require("./controllers/blogs");

/**
 * Importing usersRouter
 */
const usersRouter = require("./controllers/user");

/**
 * Importing loginRouter
 */
const loginRouter = require("./controllers/login");

/**
 * importing our custom made middleware
 * where we added three middlewares
 */
const middleware = require("./utils/middleware");

/**
 * importing logger
 */
const logger = require("./utils/logger");

/**
 * importing mongoose
 */
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

logger.info(`Connecting to `, config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to mongodb ");
  })
  .catch((error) => logger.error("error connected to mongodb", error.message));

/**
 * Starting using middlewares
 */
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
