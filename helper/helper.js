const express=require("express");
const res = require("express/lib/response");
const app=express();
const sequelize = require('sequelize');
const Product= require("../model/models")


  const testProduct = function(product){
    console.log(product)
      return  Product.create({
          Product_Name: product.Product_Name,
          Product_Price: product.Product_Price,
          Purchase_Quantity: product.Purchase_Quantity,
          Purchase_Amount:product.Purchase_Amount
      })
      .then( (product) =>{
          console.log(product);
           return true;
            });
      
  };
  

  module.exports = {
    testProduct
  }; 