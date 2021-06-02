const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const resultDummyData = [
    req.query.option1,
    req.query.option2,
    req.query.option3,
    req.query.option4[0],
  ];

  res.render("result", {
    resultDummyData: resultDummyData,
  });
});

module.exports = router;
