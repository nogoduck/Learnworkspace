const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(__dirname);

router.post("/login", (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  res.send(req.body);
});
app.use(express.static(path.join(__dirname, "./css")));

app.set("port", process.env.PORT || 8004);

app.get("/", (req, res) => {
  console.log("dev.log");
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/login", (req, res) => {
  console.log("Login ---- >>>");
  console.log();
  console.log(req.body);
  res.send("check");
});

app.get("/info", (req, res) => {
  console.log("Login Page");
  //임시로 html form으로 대체할 예정
  res.sendFile(path.join(__dirname, "./info.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  // appendFile;
  // AudioBufferSourceNode;
  // sfewfa * 120;
  res.status(500).sendFile(path.join(__dirname, "./error.html"));
});

app.listen(app.get("port"), () => {
  console.log("PORT 8004 Connected...");
});
