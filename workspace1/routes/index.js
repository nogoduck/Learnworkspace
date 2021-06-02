const express = require("express");
const router = express.Router();
const fs = require("fs");

let filename = "";
fs.readdir("./img/", function (error, filelist) {
  filename = filelist;
  console.log(filelist);
});

router.get("/", async (req, res, next) => {
  console.log("filename: ", filename);
  res.render("index", {
    filename: filename,
  });
});

module.exports = router;
