const { response } = require("express");
const express=require("express")
const app=express();
require("dotenv/config")
const csvrouter=require("./router/router.js")
const morgan=require("morgan")
const port=process.env.PORT||9000;




    app.use(morgan("dev"))
    app.use(express.json())
    app.use("/api/v1",csvrouter)


    app.listen(port,()=>{
        console.log("server running on the port ${9000}")
    })