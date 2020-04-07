const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "sign-up-facebook",
  new FacebookStrategy(
    {
      clientID: 2576357032629107,
      clientSecret: "3af7d2f7630645b43ef779c148e3ce8d",
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["email", "name", "photos"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findById(profile.id);
      if (user) {
        return done(null, false);
      } else {
        console.log(profile);
        const { email, first_name, last_name } = profile._json;
        console.log("perfil json", profile._json);
        const user = new User();
        (user.email = email),
          (user.firstname = first_name),
          (user.last_name = last_name);
        user._id = profile.id;
        await user.save();
        done(null, profile);
      }
    }
  )
);
passport.use(
  "sign-in-facebook",
  new FacebookStrategy(
    {
      clientID: 2576357032629107,
      clientSecret: "3af7d2f7630645b43ef779c148e3ce8d",
      callbackURL: "http://localhost:3000/auth/facebook/signin",
      profileFields: ["email", "name", "photos"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findById(profile.id);
      console.log(user);
      if (user) {
        done(null, user);
      } else {
        return done(null, false);
      }
    }
  )
);
