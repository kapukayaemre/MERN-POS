const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 6000;

/*** Routes */
const categoryRoute = require("./routes/categories");

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Bağlantısı Başarılı")
    } catch (error) {
        throw error
    }
}

/*** Middlewares */
app.use(express.json());
app.use(cors());
app.use("/api/categories", categoryRoute);

app.listen(port, () => {
    connect();
    console.log(`Sunucu ${port} üzerinde çalışıyor...`)
})