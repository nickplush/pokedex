const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = 4000;
const userRouter = require('./router/user.router')
const authRouter = require('./router/auth.router')
const isAuth = require('./middleware/isAuth')
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
app.use('/',isAuth, userRouter)

app.listen(port, () => console.log('server is running'))
