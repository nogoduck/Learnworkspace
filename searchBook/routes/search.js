const express = require("express");
const router = express.Router();

const title = "1984";
const writer = "조지 오웰";
const publisher = "민음사";
const date = 2003;

router.get("/", (req, res, next) => {
  res.render("search", {
    title: "TITLE",
    writer: writer,
    publisher: publisher,
    date: date,
  });
});

module.exports = router;
