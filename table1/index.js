const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8004;

mongoose
  .connect({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("응답");
});

app.post("/register", (req, res) => {});
app.listen(port, () => {
  console.log("port");
});
