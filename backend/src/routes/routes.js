const router = require("express").Router();
const passport = require("passport");
const User = require('../models/user')
//rutas para facebook
router.get("/auth/facebook",passport.authenticate("sign-up-facebook", {
  scope:['email']
  })
);

router.get("/auth/facebook" ,passport.authenticate("sign-up-facebook", {scope:['email'] })
);

router.get("/auth/facebook/callback",passport.authenticate("sign-up-facebook", {session: false}),
function(req,res) {
   res.redirect(`http://localhost:8080/perfil/${req.user.id}`)
}
);

router.get("/auth/facebook/signin", passport.authenticate("sign-in-facebook", ),
function(req,res) {
  res.redirect(`http://localhost:8080/perfil/${req.user.id}`)
}
);

//rutas con usuarios locales  

router.post('/signup',
  passport.authenticate('local-signup', { session: false }),
  function(req, res) {
    console.log(req.user)
    res.redirect(`http://localhost:8080/perfil/${req.user.id}`)
  });

router.get("/signin", (req, res, next) => {
  res.render("signin.ejs");
});
        
router.post("/signin",passport.authenticate("local-signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failureFlash: true,
  })
);

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("http://localhost:8080/");
});

//funcion para validar si el usuario esta autenticado 
function isAuthenticated(req, res, next) {
  console.log(req.isAuthenticated()); //devuleve un boolean
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

//buscar colleccion por id en la base de datos
router.get('/oneUser/:id',async(req,res) => {
  const id = req.params.id
  const OneUser = await User.findOne({_id: id})  
  res.send(OneUser)
  }) 
module.exports = router;

