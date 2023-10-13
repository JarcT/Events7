const formatError = require("mongoose-error-formatter");
const { StatusCodes } = require("http-status-codes");

const errorHandeler = (err, req, res, next) => {
  console.log(err.name);
  console.log(err);

  if (err.name === "ValidationError") {
    console.log(formatError(err));
    res.status(StatusCodes.BAD_REQUEST).json({ message: formatError(err) });
  }
  if (err.name === "TypeError") {
    console.log(err);
  }
  throw new Error(err);
};

module.exports = errorHandeler;
