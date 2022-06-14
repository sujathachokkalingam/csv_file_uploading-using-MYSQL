const dbmodel= require("../helper/helper.js");

const Product = dbmodel.Product;
const fs = require("fs");
const csv = require("fast-csv");
const path=require("path")

const upload = function(req, res){
    let flag = false;
    let products = [];
    var __dirname="C:\\Users\\sujatha c\\OneDrive\\Desktop\\csv file"
    
    console.log(req)
    let path =__dirname+"\\upload\\"+ req.file.filename;
  
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        products.push(row);
      })
      .on("end", () => {
        
         
         products.forEach(product => {
          
          flag = dbmodel.testProduct(product);
        })
        if(flag){
          res.status(200).send({message:"Uploaded the file successfully: " + req.file.originalname,});
        }
        else{
          res.status(500).send({message: "Fail to import data into database!",   error: error.message,});
          
        }
         
         
        });
        
    } 
    
  module.exports = {
    upload
  }; 
