const express = require("express");
const app = express();

//dependancies
require("express-async-errors");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");

//imports
const connectDB = require("./connectDB/connectDB");
const eventRouter = require("./routes/eventRoutes");
const errorHandeler = require("./middleware/customErrorHandeler");
const notFound = require("./middleware/notFound");

app.use(morgan("short"));
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 1200 }));

//routes
app.get("/", async (req, res) => {
  res.send("<h1>Event7</h1>");
});
app.use("/api/v1", eventRouter);

app.use(notFound);
app.use(errorHandeler);

//start server
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`the server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
