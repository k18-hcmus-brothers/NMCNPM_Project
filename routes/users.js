var express = require('express');
var router = express.Router();
const memberModel = require('../models/member.model');
const passport = require('../authentication/passport');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
  console.log(req.body);
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      console.log("ERROR" + err);
    }
    if (info) {
      console.log("INFO" + info.message);
      if (info.message === 'bad username') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    }
    else {
      req.logIn(user, () => {
        console.log(user);
        const token = jwt.sign({ TenDangNhap: user.TenDangNhap }, "jwtSecret.secret");
        console.log("user found & logged in");
        res.status(200).send({
          auth: true,
          token,
          message: 'user found & logged in'
        });
      });

    }
  })(req, res, next);
  
});


module.exports = router;
