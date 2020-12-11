const User = require('../models/user.model')
const bcrypt = require('bcryptjs')

const registrationUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const candidate = await User.findOne({ email })
    if (candidate) {
      res.status(402).json('User wrong')
    }
    await User.create({ email, password })
    res.status(201).json('User created successfully')
  } catch (e) {
    console.log(e)
  }
}

const authenticationUser = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      res.status(400).json('error in email or password')
    }
    const check_password = await bcrypt.compare(password, user.password)
    if (!check_password) {
      res.status(400).json('error in email or password')
    }
    res.status(201).json('success')
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  registrationUser,
  authenticationUser
}
