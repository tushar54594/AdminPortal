const mongoose = require("mongoose")

// const URI = "mongodb://localhost:27017/mern_admin";

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        mongoose.connect(URI);
        console.log("DB connected");
    } catch (error) {
        console.log("connection failed");
        process.exit(0);
    }
}

module.exports = connectDB;