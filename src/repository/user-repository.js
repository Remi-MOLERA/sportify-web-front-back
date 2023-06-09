const users = require("../models/utilisateur")
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(12)

exports.getAllUsers = async () => await users.findAll()

exports.getUserByEmail = async (mail) => {
    return await users.findOne({where: mail})
}

exports.createUser = async (body) => {
    const hashedPassword = bcrypt.hashSync(body.password, salt)
    let user = {}
    user.name = body.name
    user.firstname = body.firstname
    user.mail = body.mail
    user.password = hashedPassword
    await users.create(user)
}

