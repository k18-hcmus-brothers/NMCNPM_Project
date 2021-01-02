/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
// import bcrypt from 'bcrypt';

const BCRYPT_SALT_ROUNDS = 12;
// eslint-disable-next-line prefer-destructuring

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const memberModel = require('../models/member.model');

// implement register later
// passport.use(
//   'register',
//   new LocalStrategy(
//     {
//       usernameField: 'username',
//       passwordField: 'password',
//       passReqToCallback: true,
//       session: false,
//     },
//     (req, username, password, done) => {
//       console.log(username);

//       try {
//         User.findOne({
//           where: {
//             [Op.or]: [
//               {
//                 username,
//               },
//               { email: req.body.email },
//             ],
//           },
//         }).then(user => {
//           if (user != null) {
//             console.log('username or email already taken');
//             return done(null, false, {
//               message: 'username or email already taken',
//             });
//           }
//           bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
//             User.create({
//               username,
//               password: hashedPassword,
//               email: req.body.email,
//             }).then(user => {
//               console.log('user created');
//               return done(null, user);
//             });
//           });
//         });
//       } catch (err) {
//         return done(err);
//       }
//     },
//   ),
// );

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false,
        },
        async (username, password, done) => {
            try {
                let userData = await memberModel.findUserByUserName(username);
                if (userData.length === 0) {
                    return done(null, false, { message: 'bad username' });
                }
                userData = userData[0];
                // check password
                if (userData.MatKhau !== password) {
                    console.log(userData.MatKhau);
                    console.log(password);
                    return done(null, false, { message: 'passwords do not match' });
                }
                else {
                    console.log('user found & authenticated');
                    return done(null, userData);
                }
            } catch (err) {
                done(err);
            }
        },
    ),
);

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: "jwtSecret.secret"
};

passport.use(
    'jwt',
    new JWTstrategy(opts, async (jwt_payload, done) => {
        try {
            const userData = await memberModel.findUserByUserName(jwt_payload.TenDangNhap);
            const user = userData[0];
            if (user) {
                console.log('user found in db in passport');
                done(null, user);
            }
            else {
                console.log('user not found in db');
                done(null, false);
            }
        }
        catch (err) {
            done(err);
        }
    })
);

passport.serializeUser(function (user, done) {
    done(null, user.TenDangNhap);
});

passport.deserializeUser(function (username, done) {
    memberModel.findUserByUserName(username).then(user => {
        done(null, user);
    })
});

module.exports = passport;