const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 4000
const authRouter = require('./router/auth.router')
const cors = require('cors')

app.use(cors())

mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

app.use(express.json())

app.use('/', authRouter)

app.listen(port, () => console.log('server is running'))
