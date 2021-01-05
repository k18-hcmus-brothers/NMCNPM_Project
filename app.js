const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('./authentication/passport');
const session = require('express-session');
const authenticate = require ('./authentication/authenticate');

require("./db/db");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const memberRouter = require('./routes/member.route');
const serviceRouter = require('./routes/service');
const dashboardRouter = require("./routes/dashboard");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/member', memberRouter);
app.use('/service',serviceRouter);
app.use("/dashboard", dashboardRouter);

module.exports = app;
