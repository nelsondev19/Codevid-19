const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user");
const Grupo = require("../models/grupo.js");
const mongoose  = require('mongoose')

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

router.post("/signup", function (req, res, next) {
  passport.authenticate("local-signup", function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect(`http://localhost:8080/registro-local/err`);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect(`http://localhost:8080/perfil/${user.id}`);
    });
  })(req, res, next);
});

router.post("/signin", function (req, res, next) {
  passport.authenticate("local-signin", function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect(`http://localhost:8080/login-err`);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect(`http://localhost:8080/perfil/${user.id}`);
    });
  })(req, res, next);
});

router.put("/changePhoto", async (req, res) => {
  console.log(req.body.image);
  const id = req.body.id;
  console.log(id);
  await User.findByIdAndUpdate(id, {
    urlimage: req.body.image,
  });
  res.send("actualizado correctamente");
});

router.post("/createGrupo", async (req, res) => {
   await  User.findByIdAndUpdate(req.body.idCreador, {
    incluido: true,
    idGrupo:req.body.idCreador
  });
  
  const user = await User.findOne({ _id: req.body.idCreador });

  const grupo = new Grupo();
  grupo.nombreGrupo = req.body.nombreGrupo;
  grupo.fechaCreacionGrupo = req.body.fechaCreacionGrupo;
  grupo.creador = [user];
  grupo._id = user._id
  await grupo.save();
  console.log(grupo);
  res.status(200).send('recibido correctamente')
});

router.get("/logout", (req, res, next) => {
  req.logout(); //el  true de la sesion lo hace un false pero siempre se mantiene en false
  console.log(req.isAuthenticated());
  res.redirect("http://localhost:8080/");
  next();
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
router.get("/getUsers", async (req, res, next) => {
  const usuarios = await User.find();
  res.send(usuarios);
});

router.get("/getGrupo/:id", async (req,res)=>{
     const id = req.params.id
    const grupo =  await Grupo.findById({_id: id})
    if (grupo == null) {
      res.status(404).json({ "incluido": false})  
    }else{
      res.status(200).json({ "incluido": true})  
    }
})

//esta ruta introduce al usuario en el array familia
router.post('/setUsersGroup/', async(req,res)=> {
  const NewUser = await User.findByIdAndUpdate({_id: req.body.idNewUser},{idGrupo:req.body.idCreador ,incluido:true},  {new: true})
  
 const grupo =  await  Grupo.update({_id: req.body.idCreador}, {$push: {"familiares": NewUser} })
  res.json({"saludo":"hola"})

})

router.get('/getFamily/:idgrupo', async(req,res)=> {
   const idGrupo = req.params.idgrupo
  const grupo = await Grupo.findOne({_id: idGrupo})
  res.json(grupo)
})

module.exports = router;
