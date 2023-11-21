const express =require('express');
const port = 3000;
const app = express();

app.get("/", (req,res)=>{
    res.send("Welcome to my Arianne's backend application");
});

app.get("/arianne", (req,res)=>{
    res.send("Hello arianne");
});

app.listen(port, () => console.log("Listening"));

module.exports = app;