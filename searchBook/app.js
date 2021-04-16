const path = require("path");
const express = require("express");
const app = express();

console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "/")));
app.set("port", process.env.PORT || 8004);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/search", (req, res) => {
  res.render("search.html");
});
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "Port Connected...");
});
