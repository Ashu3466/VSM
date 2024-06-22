const mongoose = require('mongoose');

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI = "mongodb+srv://sainiprashant314:fGfTb102LtkSyrvP@cluster0.tbchort.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0"


const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection is successfully");
    } catch (error) {
        console.log("connection is failed");
    }
}

module.exports = connectDB;