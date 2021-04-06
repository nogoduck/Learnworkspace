const express = require("express");
const { appendFile } = require("fs");
const { dirname } = require("path");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 8004);

app.get("/", (req, res) => {
  console.log("dev.log");
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/info", (req, res) => {
  console.log("Login Page");
  //임시로 html form으로 대체할 예정
  res.sendFile(path.join(__dirname, "./info.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  appendFile;
  AudioBufferSourceNode;
  sfewfa * 120;
  res.status(500).sendFile(path.join(__dirname, "./error.html"));
});

app.listen(app.get("port"), () => {
  console.log("PORT 8004 Connected...");
});
