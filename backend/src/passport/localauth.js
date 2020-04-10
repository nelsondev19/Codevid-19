const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose  = require('mongoose')
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  
  passReqToCallback: true
}, async (req, email, password, done) => {
  console.log("email",email);
  
  console.log("local-auth", email);
  
   const user = await User.findOne({'email': email})
    console.log(user)
   if(user) {
     return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
    } else {
     const newUser = new User();
     newUser.email = email;
     newUser.password = newUser.encryptPassword(password);
     newUser._id = new mongoose.Types.ObjectId(); //genera el de mongodb
   console.log(newUser)
     await newUser.save();
   done(null, newUser);
   }
 }));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({email: email});
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'No User Found'));
  }
  if(!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
  }
  return done(null, user);
}));