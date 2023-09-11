const Bill = require("../models/Bill");
const express = require("express");
const router = express.Router();

/*** Get Bills */
router.get("/get-all", async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);
    } catch (error) {
        res.status(404).json(error);
    }
});

/*** Create Bill */
router.post("/add-bill", async (req, res) => {
    try {
        const newBill = new Bill(req.body);
        await newBill.save();

        res.status(200).json("Fatura Başarıyla Eklendi")
    } catch (error) {
        res.status(400).json(error)
    }
});

/*** Update Bill */
router.put("/update-bill", async (req, res) => {
    try {
        await Bill.findOneAndUpdate({ _id: req.body.billID }, req.body)
        res.status(200).json("Fatura Başarıyla Güncellendi!");
    } catch (error) {
        res.status(404).json(error);
    }
});

/*** Delete Bill */
router.delete("/delete-bill", async (req, res) => {
    try {
        await Bill.findOneAndDelete({ _id: req.body.billID })
        res.status(200).json("Fatura Başarıyla Silindi!");
    } catch (error) {
        res.status(404).json(error);
    }
});


module.exports = router;