/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const { errors } = require('celebrate')

const User = require('./models/user')

require('./database-connection')
const socketService = require('./socket-service')
// require('livereload').createServer({ usePolling: true })

const clientPromise = mongoose.connection.asPromise().then(connection => connection.getClient())

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const artworksRouter = require('./routes/artworks')
const auctionsRouter = require('./routes/auctions')
const accountsRouter = require('./routes/accounts')
const bidRouter = require('./routes/bid')

const app = express()

app.use(helmet())

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

// if (app.get('env') == 'development') {
/* eslint-disable-next-line */
// app.use(require('connect-livereload')())
/* eslint-disable-next-line */
//  require('livereload')
//    .createServer({ extraExts: ['pug'] })
//    .watch([`${__dirname}/public`, `${__dirname}/views`])
// }

app.set('trust proxy', 1)

app.set('io', socketService)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(mongoSanitize({ replaceWith: '_' }))

app.use(cookieParser())

app.use(
  session({
    secret: ['mysecuresecuresecretsecretsupersecret', 'butthissecretisalsomoresecretsecretsupersecret'],
    store: MongoStore.create({ clientPromise, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // our session expires in 30 day in milliseconds
      path: '/api',
      sameSite: process.env.NODE_ENV == 'production' ? 'none' : 'strict',
      secure: process.env.NODE_ENV == 'production',
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
app.use('/api/bid', bidRouter)

app.use(errors())

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
  res.send({
    status: err.status,
    message: err.message,
    stack: req.app.get('env') == 'development' ? err.stack : '',
  })
})

module.exports = app
