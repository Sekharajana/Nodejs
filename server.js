//import express
const express = require(express);

//creat rest services
const app = express();

//creat get request
app.get("/demo",(req,res)=>{
    res.send({"message":Wlcm});

});

//assign to port
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server Started...!!!");
});