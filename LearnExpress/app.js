//express의 경쟁자도 많다 코아(Koa), 페스티파이, 레스티파이, 하피(Hapi), 익스프레스 위에서 돌아가는 루프백, 아도니스, 스트라픽 등이 있다
//엠버는 SPA(Single Page Application) 1세대이며, 앵귤러 원, 백본이 있다
//지금은 리엑트가 2세대 / 뷰 2.5 /스벨트 3세대인 상태이다

//express는 app이라는 파일명을 선호한다

const express = require("express");
const app = express();

//경로를 확실히 표현해 주기 위해 사용
const path = require("path");

//서버에 속성을 넣는다
app.set("port", process.env.PORT || 8004);

app.get("/", (req, res) => {
  //html을 가져오기 위해선(서빙) express에서는 fs를 사용하지 않고 sendFile을 사용해서 가져올 수 있다
  // res.send("response : helloss express");
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/", (req, res) => {
  res.send("response : hello express");
});

app.get("/about", (req, res) => {
  res.send("response : ABUOT");
});

//app.get에 있는 속성들은 아래와 같이  전역변수 느낌으로 사용할 수 있다
app.listen(app.get("port"), () => {
  console.log("8005port connected...");
});
