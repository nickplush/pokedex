const User = require('../models/user.model');

const getUserName = async (req,res) => {
    const _id = req.userId.id
    const user = await User.findById(_id)
    res.json(user.name)
}

module.exports = {
    getUserName
}