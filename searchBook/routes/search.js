const express = require("express");
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const result_cnt = 2;
const title = "1984";
const date = 2003;
const writer = "조지 오웰";
const publisher = "민음사";
const location = "2층 소설";
const state = "대출 불가";
const file = '{"title":"미운오리(2010)","author":"미상"}';

let b = JSON.parse(file);
console.log("b", b);
console.log("b", b.title);
router.get("/", (req, res, next) => {
  const previous_keyword = req.query.keyword;
  console.log(previous_keyword);

  res.render("search", {
    title: title,
    date: date,
    writer: writer,
    publisher: publisher,
    location: location,
    state: state,
    previous_keyword: previous_keyword,
    result_cnt: {
      val: result_cnt,
    },
  });
});

module.exports = router;
