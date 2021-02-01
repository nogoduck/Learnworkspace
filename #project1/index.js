const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("GET 테스트1");
});
app.post("/", (req, res) => {
  res.send("POST 테스트1");
});

app.listen(port, () => {
  console.log(`http://localhost:${port} 에 연결되었습니다`);
});
