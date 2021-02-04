const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://ad:1114@boilerdb.wyuia.mongodb.net/boilerdb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB가 연결되었습니다"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello~"));
app.listen(port, () =>
  console.log(`Express로 ${port} 포트 서버를 활성화 시켰습니다`)
);
