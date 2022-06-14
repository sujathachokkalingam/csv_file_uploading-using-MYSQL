const express = require("express");
const router = express.Router();
const csvController = require("../controller/controller.js");
const upload = require("../middleware/upload.js");

  router.post("/upload", upload.single("product"), function(req, res,next){
    csvController.upload(req,res);
  });
  


module.exports = router;