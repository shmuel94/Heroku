const express = require("express");
require("dotenv").config();
const app = express();

app.get("/*", (req,res)=>{
    res.send("hello there");
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(PORT);
});