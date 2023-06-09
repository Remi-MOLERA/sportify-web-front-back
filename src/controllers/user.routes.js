const userRepository = require("../repository/user-repository")
const express = require("express")

const router = express.Router()

router.get("/", async (req, res) => {
    res.send(await userRepository.getAllUsers())
})

router.post("/create", async (req, res) =>{
    console.log(req.body)
    await userRepository.createUser(req.body)
    res.sendStatus(201)
})

exports.initializeRoutes = () => router