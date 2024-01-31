const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    english: Number,
    science: Number,
    maths: Number,
    social: Number
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel