const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8004);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "Port Connected...");
});
