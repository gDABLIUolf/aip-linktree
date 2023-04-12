const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    link: [
        {
            nome: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            tipo: {
                type: String,
                required: true
            }
        }]
}, { timestamps: true })

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel