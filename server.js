const express =require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Welcome to my Arianne's backend application");
});

app.get("/arianne", (req,res)=>{
    res.send("arianne");
});

app.listen(3000,()=>{
    console.log("Listening");
});