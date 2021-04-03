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
app.use(cookieParser("parsing"));
app.use(express.json()); //json 해석
app.use(express.urlencoded({ extended: true })); //문자열 해석, 이미지는 해석할 수 없어서 multer라는 api를사용한다
//static 사용법 : app.use("요청경로", path.join(express.staic("실제경로")))
app.use(session());
app.use(multer().array());

app.get("/", (req, res, next) => {
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
