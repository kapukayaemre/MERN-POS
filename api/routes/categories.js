const Category = require("../models/Category");
const express = require("express");
const router = express.Router();

/*** Get Categories */
router.get("/get-all", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json(error);
    }
});

/*** Create Category */
router.post("/add-category", async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();

        res.status(200).json("Kategori Başarıyla Eklendi")
    } catch (error) {
        res.status(400).json(error)
    }
});

/*** Update Category */
router.put("/update-category", async (req, res) => {
    try {
        await Category.findOneAndUpdate({ _id: req.body.categoryID }, req.body)
        res.status(200).json("Kategori Başarıyla Güncellendi!");
    } catch (error) {
        res.status(404).json(error);
    }
});

/*** Delete Category */
router.delete("/delete-category", async (req, res) => {
    try {
        await Category.findOneAndDelete({ _id: req.body.categoryID })
        res.status(200).json("Kategori Başarıyla Silindi!");
    } catch (error) {
        res.status(404).json(error);
    }
});


module.exports = router;