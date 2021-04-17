const path = require("path");
const morgan = require("morgan");
const express = require("express");
const app = express();
const router = express.Router();

const indexRouter = require("./routes/index");
const searchRouter = require("./routes/search");

console.log(path.join(__dirname, "public"));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/")));
app.set("port", process.env.PORT || 8004);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

router.get("/", (req, res, next) => {
  res.render("index", { title: "ddd2" });
});

// app.use("/", indexRouter);
// app.use("/search", searchRouter);
// app.get("/", (req, res) => {
//   res.render("index.html");
// });

// app.get("/search", (req, res) => {
//   res.render("search.html");
// });
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "Port Connected...");
});
