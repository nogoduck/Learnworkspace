const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8004);
app.get("/");

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "Port Connected...");
});
