const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://hianmolvermatech:anmolverma@cluster0.m4tus.mongodb.net/");
}

module.exports = connectDB;