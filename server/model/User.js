const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetToken: { type: String },
    resetPasswordCodeExpires: { type: Date },
    resetPasswordToken: {type: String}
})

module.exports = mongoose.model("User", UserSchema)