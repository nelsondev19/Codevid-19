const router = require("express").Router();
const passport = require("passport");

//facebook
router.get(
  "/auth/facebook",
  passport.authenticate("sign-up-facebook", {
    scope: ["read_stream", "publish_actions"],
  })
);

router.get(
  "/auth/facebook",
  passport.authenticate("sign-up-facebook", { scope: "read_stream" })
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("sign-up-facebook", {
    successRedirect: "/profile",
    failureRedirect: "/",
  })
);

router.get(
  "/auth/facebook/signin",
  passport.authenticate("sign-in-facebook", {
    successRedirect: "/profile",
    failureRedirect: "/",
  })
);



//local
router.get("/", (req, res, next) => {
  res.render("index.ejs");
});

router.get("/signup", (req, res, next) => {
  res.render("signup.ejs");
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

router.get("/signin", (req, res, next) => {
  res.render("signin.ejs");
});

router.post(
  "/signin",
  passport.authenticate("local-signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failureFlash: true,
  })
);

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

function isAuthenticated(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

router.get("/profile", isAuthenticated, (req, res, next) => {
  res.render("profile.ejs");
});

module.exports = router;
