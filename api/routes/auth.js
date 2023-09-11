const User = require("../models/User");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();


/*** Create User */
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(200).json("Kullanıcı Başarıyla Eklendi")
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;