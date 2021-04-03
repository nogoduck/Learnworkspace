const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const app = express();

app.set("port", process.env.PORT || 8005);

//개발시 dev / 배포시 combined : 조금 더 세세한 정보
app.use(morgan("dev"));
//미들웨어 끼리도 순서가 중요하다
//static은 파일을 찾으면 next를 안해준다
// 다른건 내부적으로 동작함
app.use("/", express.static(path.join(__dirname, "public"))); //정적인 파일을 보내주는 역할
//보안에 좋다, 클라이언트가 서버의 구조를 알 수가 없다
// ex)요청경로, 실제경로
// localhost:3000/test.html => /public/web/test.html
// localhost:3000/test.css => /public/web/test.css
app.use(express.json()); //json 해석
app.use(express.urlencoded({ extended: true })); //문자열 해석, 이미지는 해석할 수 없어서 multer라는 api를사용한다
//static 사용법 : app.use("요청경로", path.join(express.staic("실제경로")))
app.use(cookieParser("parsing"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "parsing",
    cookie: {
      httpOnly: true, //세션을 설정하기 위해 자바스크립트로부터 공격을 안당하기 위해 true 설정
    },
    name: "connect.sid", //기본적으로 설정된 이름 coonect.sid => 서명되있어서 읽을 수 없는 문자열로 되어 있다
  })
);
app.use(multer().array());

// let ban;
//(1)에서 (2)로 데이터를 전송하고 싶을때 전역변수를 사용하면 안된다 보안에 취약함
app.use((req, res, next) => {
  // ban = banana;
  // app.set('hi', 'bye') 이 또한 금지
  // 세션에 넣어준다, 단점 : 세션에 저장되어 있어서 다음요청에도 남아 있다
  // req.session.data; // 불러오기
  //session을 사용하지 않으면 일회성 데이터로 사용 할 수 있다
  // req.data =  'pw'
});

// (2)
app.get("/", (req, res, next) => {
  // req.session.data; // 불러오기
  // req.data; // 불러오기
  // console.log(ban);
  // app.get(hi);
  // req.session.id = "hello"; //사용자에 대한 고유한 세션

  // req.body
  // req.cookies; // {mycookie:'test}
  // req.signedCookies; //서명된 쿠키(암호화)
  // res.cookie("name", encodeURIComponent(name), {
  //   expires: new Date(),
  //   httpOnly: true,
  //   path: "/",
  // });
  // req.clearCookie("name", encodeURIComponent(name), {
  //   httpOnly: true,
  //   path: "/",
  // });

  //body-parser가 express안에 내장되어 있다

  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(app.get("port"), () => {
  console.log("8005port connected...");
});
