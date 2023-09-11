const User = require("../models/User");
const express = require("express");
const router = express.Router();

/*** Get Users */
router.get("/get-all", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json(error);
    }
});

/*** Get a Users */
router.get("/", async (req, res) => {
    const userID = req.body.userID;
    try {
        const user = await User.findById(userID);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(error);
    }
});


module.exports = router;