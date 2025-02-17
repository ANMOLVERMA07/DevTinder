const express = require("express");
const connectDB = require("./config/database.js");

const app = express();

app.post("/signup",(req,res) => {
    
})

connectDB()
.then(() => {
    console.log("MONGODB CONNECTED SUCCESSFULLY")
    app.listen(3000, () => {
        console.log("Server is successfully listening on port 3000");
    });
})
.catch((err) => console.log("Database cannot be connected",err));