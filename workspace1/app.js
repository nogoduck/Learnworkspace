const nunjucks = require("nunjucks");
const express = require("express");
const path = require("path");
const app = express();

const indexRouter = require("./routes/index");
const resultRouter = require("./routes/result");

app.use(express.static(path.join(__dirname, "/"))); // 정적인 파일(CSS) 을 사용하기 위한 정적폴더 지정
app.set("port", process.env.PORT || 8004); // port라는 변수를 사용하는데 PORT관련 환경변수가 설정되어 있지 않다면 8005 포트 사용
app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use("/", indexRouter);
app.use("/result", resultRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "Port Connected...");
});
