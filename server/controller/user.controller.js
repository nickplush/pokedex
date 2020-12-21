const User = require('../models/user.model')

module.exports = (app) => {
  app.post('/api/favorite', async (req, res) => {
    const { userId, pokeId } = req.body
    await User.findByIdAndUpdate({ _id: userId }, { $push: { favorites: pokeId } })
    res.status(201).json('add')
  })

    app.patch('/api/favorite', async (req, res) => {
        const { userId, pokeId } = req.body
        await User.findByIdAndUpdate({ _id: userId }, { $pull: { favorites: pokeId } })
        res.status(201).json('remove')
      }
    )
  }
