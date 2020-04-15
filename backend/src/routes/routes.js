const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user");
let valor = null;

//rutas para facebook
router.get(
  "/auth/facebook",
  passport.authenticate("sign-up-facebook", {
    scope: ["email"],
  })
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("sign-up-facebook", { session: true }),
  function (req, res) {
    if (req.user) {
      res.redirect(`http://localhost:8080/perfil/${req.user.id}`);
    } else {
      failureRedirect: `http://localhost:8080/registro-local/err`;
    }
  }
);

router.get(
  "/auth/facebook/signin",
  passport.authenticate("sign-in-facebook", { session: true }),
  function (req, res) {
    if (req.user) {
      res.redirect(`http://localhost:8080/perfil/${req.user.id}`);
    } else {
      failureRedirect: `http://localhost:8080/`;
    }
  }
);

router.post('/signup', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user) {
    if (err) { return next(err); }
    if (!user) { return res.redirect(`http://localhost:8080/registro-local/err`); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect(`http://localhost:8080/perfil/${user.id}`);
    });
  })(req, res, next);
});


// router.post(
//   "/signin",
//   passport.authenticate('local', function (err, user, info) {
//     if (err) { return next(err); }

//     if (!user) { return res.redirect('/login'); }
//     if (err) { return next(err); }
//     return res.redirect('/users/' + user.username);

//   }));

  router.post('/signin', function(req, res, next) {
    passport.authenticate('local-signin', function(err, user) {
      if (err) { return next(err); }
      if (!user) { return res.redirect(`http://localhost:8080/login-err`); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect(`http://localhost:8080/perfil/${user.id}`);
      });
    })(req, res, next);
  });


router.put('/changePhoto', async(req, res )=> {
  console.log(req.body.image)
  const  id = req.body.id 
  console.log(id)
await   User.findOneAndUpdate(req.params.id ,{
        urlimage:req.body.image
    })
   res.send('actualizado correctamente')
})


// async (req, res) => {
//   const { title, content, author } = req.body;
//   console.log(req.params.id, req.body);
//   await Notes.findOneAndUpdate(req.params.id ,{
//       title: title,
//       content: content,
//       author: author
//   })


router.get("/logout", (req, res, next) => {
  req.logout(); //el  true de la sesion lo hace un false pero siempre se mantiene en false
  console.log(req.isAuthenticated());
  res.redirect("http://localhost:8080/");
  next()
});

function isAuthenticated(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("http://localhost:8080/");
}
//necesitas un true par acceder
router.get("/profile", isAuthenticated, (req, res, next) => {
  res.send("hola");
});

router.get("/oneUser/:id", async (req, res) => {
  const id = req.params.id;
  const OneUser = await User.findOne({ _id: id });
  res.send(OneUser);
});

//trayendo collecion de todos los usuarios
router.get("/getUsers",async(req, res, next) => {
  const usuarios = await User.find();
  res.send(usuarios);
});
module.exports = router;
