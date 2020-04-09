const express = require('express');
const morgan = require('morgan')
const engine = require('ejs-mate')
const path = require('path')
const passport = require('passport')
const sesion = require('express-session')
const flash = require('connect-flash')
const cors = require('cors');
//initializations
const app = express()
require('./database')
require('./passport/localauth')
require('./passport/facebook-auth')
//settings

app.set('views', path.join(__dirname+ '/views'))
app.engine('ejs', engine)
app.set('view -engine','ejs')
app.set('port' , process.env.PORT || 3000)
//middlewares
app.use(cors())
app.use(sesion({
    secret:'mysecretsesion',
    resave:false,
    saveUninitialized:false
}))

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use((req, res , next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.signinMessage = req.flash('signinMessage');
    next()
})

//routes
app.use('/', require('./routes/routes'));
//server is listenning
app.listen(app.set('port'), () => console.log(`server on port`, app.get('port')))