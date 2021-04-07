const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");

// ex)process.env.COOKIE_SECRET 라는 코드가 있으면 들어가지 않는다
//dotenv는 require를 해준 후 제일 위에 작성하는 것이 좋다
//dotenv가 실행되는 순간 process_env에 값이 들어가는데 dotenv 아래의 코드부터 들어간다
dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8004);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use("/", pageRouter);

//모든 라우터 뒤에 나오는 404(찾을 수 없는 페이지)를 처리하는 라우터다
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

//에러처리 미들웨어는 next가 안쓰더라도 무조건 써야한다
app.use((err, req, res, next) => {
  //templete engine에서의 message, error 변수이다
  //error가 개발모드 일때는 (스택 트레이스) 내용을 보여주고 배포모드일 떄는 보여주지 않는다
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};

  res.status(err.status || 500).render("error"); //옆에와 같이 chaning도 가능하고 사용하지 않을 시에는 아래와 같이 따로 뺴주면 된다
  //   res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
