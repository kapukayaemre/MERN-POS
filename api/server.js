const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 6000;

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Bağlantısı Başarılı")
    } catch (error) {
        throw error
    }
}

app.listen(port, () => {
    connect();
    console.log(`Sunucu ${port} üzerinde çalışıyor...`)
})