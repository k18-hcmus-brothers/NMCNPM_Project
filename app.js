const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("./db/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const memberRouter = require("./routes/member");
const dashboardRouter = require("./routes/dashboard");

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/member", memberRouter);
app.use("/dashboard", dashboardRouter);

module.exports = app;
