//express의 경쟁자도 많다 코아(Koa), 페스티파이, 레스티파이, 하피(Hapi), 익스프레스 위에서 돌아가는 루프백, 아도니스, 스트라픽 등이 있다
//엠버는 SPA(Single Page Application) 1세대이며, 앵귤러 원, 백본이 있다
//지금은 리엑트가 2세대 / 뷰 2.5 /스벨트 3세대인 상태이다

//express는 app이라는 파일명을 선호한다

const express = require("express");
const app = express();

//서버에 속성을 넣는다
app.set("port", process.env.PORT || 8004);

app.get("/", (req, res) => {
  res.send("response : helloss express");
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
