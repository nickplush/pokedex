const User = require('../models/user.model')

const addFavorite = async (req, res) => {
  try {
    const poke_id = req.body.pokeId
    const _id = req.userId.id
    await User.findByIdAndUpdate({ _id }, { $push: { favorites: poke_id } })
    res.status(201).json('add favorite')
  } catch (e) {
    console.log(e)
  }
}
const removeFavorite = async (req, res) => {
  try {
    const poke_id = req.body.pokeId
    const _id = req.userId.id
    await User.findByIdAndUpdate({ _id }, { $pull: { favorites: poke_id } })
    res.status(201).json('add favorite')
  } catch (e) {
    console.log(e)
  }
}

const getFavorite = async (req, res) => {
  try {
    const _id = req.userId.id
    const user = await User.findById({ _id })
    res.status(201).json(user.favorites)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  addFavorite,
  removeFavorite,
  getFavorite
}
