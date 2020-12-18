const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const authRouter = require('./router/auth.router')
const userRouter = require('./router/user.router')
const isAuth = require('./middleware/isAuth')
const cors = require('cors')

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

app.listen(port, () => console.log('server is running'))