const { Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: String,
    password: String,
    favorites: Array
})

userSchema.pre('save', function (next) {
    const pass = bcrypt.hashSync(this.password, 10);
    this.password = pass;
    next()
})

module.exports = model('User', userSchema);
