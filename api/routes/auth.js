const User = require("../models/User");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();


/*** Register */
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

/*** Login */
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});

        if (!user) {
            return res.status(404).send({ error: "Kullanıcı Bulunamadı" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            res.status(403).send("Email ve Parola Eşleşmiyor!")
        } else {
            res.status(200).json(user);
        }

    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;