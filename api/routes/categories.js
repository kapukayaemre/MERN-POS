const Category = require("../models/Category");
const express = require("express");
const router = express.Router();

router.post("/add-category", async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();

        res.status(200).json("Kategori Başarıyla Eklendi")
    } catch (error) {
        res.status(400).json(error)
    }
});



module.exports = router;