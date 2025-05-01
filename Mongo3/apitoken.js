const express = require("express");
const app = express();

const checkTOken = (req,res,next) =>{
    let {token} = req.query;
    if(token ==="giveaccess"){
        next();
    }
    
    req.send("ACCESS DENIED");
    };
    
app.get("/api",(req,res,next)=>{
    res.send("Data");
});

app.listen(3000,(req,res)=>{
console.log("Listining on port 3000");
});