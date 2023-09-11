const Product = require("../models/Product");
const express = require("express");
const router = express.Router();

/*** Get Categories */
router.get("/get-all", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json(error);
    }
});

/*** Create Product */
router.post("/add-product", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();

        res.status(200).json("Ürün Başarıyla Eklendi")
    } catch (error) {
        res.status(400).json(error)
    }
});

/*** Update Product */
router.put("/update-product", async (req, res) => {
    try {
        await Product.findOneAndUpdate({ _id: req.body.productID }, req.body)
        res.status(200).json("Ürün Başarıyla Güncellendi!");
    } catch (error) {
        res.status(404).json(error);
    }
});

/*** Delete Product */
router.delete("/delete-product", async (req, res) => {
    try {
        await Product.findOneAndDelete({ _id: req.body.productID })
        res.status(200).json("Ürün Başarıyla Silindi!");
    } catch (error) {
        res.status(404).json(error);
    }
});


module.exports = router;