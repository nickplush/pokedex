const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registrationUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const candidate = await User.findOne({ email })
    if (candidate) {
      res.status(402).json('User wrong')
      return
    }
    await User.create({ email, password })
  } catch (e) {
    console.log(e)
  }
}

const authenticationUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      res.status(400).json('error in email or password')
    }
    // eslint-disable-next-line camelcase
    const check_password = await bcrypt.compare(password, user.password)
    if (!check_password) {
      res.status(400).json('error in email or password')
    }
    const token = jwt.sign({ id: user._id }, '!cL)bF9(ZLD/6)y<')
    res.status(201).json({ token, userBase: user.favorites })
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  registrationUser,
  authenticationUser
}
