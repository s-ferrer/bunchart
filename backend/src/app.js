/* eslint-disable no-plusplus */
/* eslint-disable func-names */
require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const cors = require('cors')

const User = require('./models/user')

const mongooseConnection = require('./database-connection')

const clientPromise = Promise.resolve(mongooseConnection.getClient())

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const artworksRouter = require('./routes/artworks')
const auctionsRouter = require('./routes/auctions')
const accountsRouter = require('./routes/accounts')

const app = express()

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

app.set('trust proxy', 1)

// app.set('io', socketService)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
  session({
    secret: [process.env.SECRET_ONE, process.env.SECRET_TWO],
    store: MongoStore.create({ clientPromise, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/api',
      sameSite: 'none',
      secure: true,
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  req.session.viewCount++
  next()
})

app.use('/api/', indexRouter)
app.use('/api/account', accountsRouter)
app.use('/api/users', usersRouter)
app.use('/api/artworks', artworksRouter)
app.use('/api/auctions', auctionsRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
