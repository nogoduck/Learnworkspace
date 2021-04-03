//express의 경쟁자도 많다 코아(Koa), 페스티파이, 레스티파이, 하피(Hapi), 익스프레스 위에서 돌아가는 루프백, 아도니스, 스트라픽 등이 있다
//엠버는 SPA(Single Page Application) 1세대이며, 앵귤러 원, 백본이 있다
//지금은 리엑트가 2세대 / 뷰 2.5 /스벨트 3세대인 상태이다

//express는 app이라는 파일명을 선호한다

const express = require("express");
const app = express();

//경로를 확실히 표현해 주기 위해 사용
const path = require("path");

//서버에 속성을 넣는다
app.set("port", process.env.PORT || 8005);

// 모든 요청에 응답해준다
// 미들웨어(안에서 사용하는 함수를 의미함), app.use가 미들웨어가 아님
// 요청에 응답을 해준후 next라는 매개변수를 입력해주어야 다음 라우터에
// 해당하는 요청으로 이동한다

//라우터와 미들웨어의 차이점으로는 next를 사용해야만 다음으로 넘어간다는 것이다 express는 기본적으로 위에서 아래로 이동한다

app.use(
  (req, res, next) => {
    console.log("모든 요청에 응답한다");
    // res.send("<h3>All Response</h3>");
    next();
  },
  (req, res, next) => {
    //익스프레스에서 에러를 처리해서 어디에 발생했는지 알려주긴하는데 웹 사용자가 이를 알 필요는 없고 경로가 유출된다
    // throw new Error("Oops");

    // try {
    //   console.log(nothingerror);
    // } catch (error) {
    //   //next에 인수가 들어 있으면 바로 에러처리 미들웨어로 넘어간다
    //   next(error);
    // }

    console.log("MIDDLE WARE1");
    next();
  },
  (req, res, next) => {
    console.log("MIDDLE WARE2");
    next();
  }
);

//about에서 실행되고 아래 about를 하나더 실행함
// app.use("about", (req, res, next) => {
//   console.log("모든 요청에 응답한다");
//   // res.send("<h3>ABOUT</h3>");
//   next();
// });

//매서드와 주소가 있는 형식을 하나하나 라우터라고 붙인다
app.get("/", (req, res) => {
  //html을 가져오기 위해선(서빙) express에서는 fs를 사용하지 않고 sendFile을 사용해서 가져올 수 있다
  // res.send("response : helloss express");
  //그때 그때 HTML 파일을 읽어서 가져온다
  //require를 한 파일은 노드몬에서 계속 캐시에 올려 사용하기 때문에 서버를 껏다키지 않는한 바뀌지 않는다
  res.sendFile(path.join(__dirname, "./index.html"));
  //자주하는 실수 : sendFile, send ,json등 다 응답을 보내는 것이기 때문에 한번만 작성해준다
  //요청1에 응답1을 보내야한다, writehead도 응답을 보낸 후에 사용 X
  // res.send('failed')
  // res.json({ error: "not found" });
});

//순서가 와일드카드보다 위에있어야 동작한다
app.get("/category/think", (req, res) => {
  res.send("CANNOT THINK");
});

//라우트 매개변수(route paramter >> req.params)
// 와일드 카드를 사용하면 변수명에 지정해둔 값을 사용할 수 있다
app.get("/category/:name", (req, res) => {
  //보통 res.send를 쓰면 거기서 끝내야한다
  // 다음으로 보내면 보통 에러를 발생시킨다
  res.send(`res : ${req.params.name}`);
});

app.post("/", (req, res) => {
  res.send("response : hello POST express");
});

app.get("/about", (req, res) => {
  res.send("response : ABUOT");
});

// #######################################
// 일반 라우터와 에러처리 라우터 사이에 넣으면
// 페이지를 찾을 수 없을 때 최종적으로 아래 코드를 실행한다
//status를 사용하여 에러코드를 표시할 수 있다
//하지만 코드가 해커에겐 힌트가 될 수있어서
//200을 자주쓰고 401~40?으로 세세히 하는것보다 404로 퉁치는 경우가 많다
app.use((req, res, next) => {
  res.status(200).send("404 에러를 대체합니다");
});
// #######################################

//모든 페이지에 실행하기 때문에 무조건 아래 있어야한다
//아스터링크와 같이 실행범위가 넓은 아이들은 하단에 배치한다
app.get("*", (req, res) => {
  res.send("[CAN NOT FOUND PAGE]");
});

//ERROR : 라우터의 위치는 마지막에 배치하는것이 좋고 err 매개변수가 앞에 온다
//다른 라우터에서는 next 매개변수를 생략해도 상관없었지만 에러 미들웨어는
//반드시 4개의 매개변수가 다 들어가야 한다
//JavaScript에서는 갯수가 다른 함수를 다르게 취급한다 > 아래코드 참고 [?]
// const a = (err, req, res, next) => {
//   console.error(err);
// };
// const b = (err, req, res) => {
//   console.error(err);
// };
// console.log(a.length, b.length);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("에러를 숨깁니다");
});

//app.get에 있는 속성들은 아래와 같이  전역변수 느낌으로 사용할 수 있다
app.listen(app.get("port"), () => {
  console.log("8005port connected...");
});
