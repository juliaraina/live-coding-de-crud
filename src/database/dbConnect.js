//TODO: Inserir configurações para integrar o MongoDB

const mongoose = require("mongoose")
require('dotenv').config()

const connect = async () => {
    try {
        mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Database connected")

    } catch (error) {
        console.log(error);
    }
}
module.exports = { connect }