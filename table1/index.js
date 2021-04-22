const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8004;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { User } = require("./models/User");
const config = require("./config/key");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
mongoose
  .connect(config.mongoURI, {
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
  res.send("response");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    console.log("USER: ", user);
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "이메일에 해당하는 유저가 없습니다.",
      });
    }

    user.isTruePassword(req.body.password, (err, isTrue) => {
      if (!isTrue) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 일치하지 않습니다.",
        });
      }

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
