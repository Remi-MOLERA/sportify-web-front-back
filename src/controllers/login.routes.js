const userRepository = require("../repository/user-repository")
const express = require("express")
const jwt = require("jsonwebtoken")
const {body, validationResult} = require("express-validator");
const router = express.Router()
const bcrypt = require('bcryptjs')


router.post('/',
    body('mail').not().isEmpty(),
    body('password').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const existingUser = await userRepository.getUserByEmail(req.body.email);
        if (!existingUser) {
            res.sendStatus(401)

        } else {
            if (bcrypt.compareSync(req.body.password, existingUser.password)) {
                const token = jwt.sign({id: existingUser.id,mail: existingUser.mail},
                    "codesecretsportify",{ expiresIn: '30d' });
                res.status(200)
                res.send({token})
            }else res.sendStatus(401)
        }
    }
);

exports.initializeRoutes = () => router