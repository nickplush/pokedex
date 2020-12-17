const mongoose = require('mongoose')
const express = require('express')
// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20')
// const keys = require('./config/keys')
const app = express()
const port = process.env.PORT || 4000
const authRouter = require('./router/auth.router')
const userRouter = require('./router/user.router')
const isAuth = require('./middleware/isAuth')
const cors = require('cors')

// passport.use(new GoogleStrategy(
//   {
//     clientID: keys.googleClientId,
//     clientSecret: keys.googleClientSecret,
//     callbackURL: '/auth/google/callback'
//   }, (accessToken) => {
//     console.log('LOOOG', accessToken)
//   }
// ))
//
// app.use('/auth', authRouter)
// app.use('/user', isAuth, userRouter)

app.use(cors())

let db_url = 'mongodb://localhost:27017/users'
if (process.env && process.env.APP_CONFIG) {
  db_url = 'mongodb://550f685ba2708717b1611319d42cda99:poke2020@11a.mongo.evennode.com:27018,11b.mongo.evennode.com:27018/550f685ba2708717b1611319d42cda99?replicaSet=eu-11'
}

mongoose.connect(db_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
app.use(express.json())

app.use('/auth', authRouter)
app.use('/user', isAuth, userRouter)

// app.use(express.static(path.join(__dirname, 'build')))
// app.use(express.static('public'))

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.listen(port, () => console.log('server is running'))
