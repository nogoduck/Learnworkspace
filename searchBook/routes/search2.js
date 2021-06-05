const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const { PythonShell } = require("python-shell");

let option1;
let option2;
let option3;
let option4;

const reset = () => {};

const putData = (data, index) => {
  let dataindex = index % 10;

  switch (dataindex) {
    case 0:
      title.push(data);
      break;
    case 1:
      writer.push(data);
      break;
    case 2:
      publisher.push(data);
      break;
    case 3:
      publishYear.push(data);
      break;

      defualt: break;
  }
};

const draw = (res) => {
  res.render("search", {
    cookcount: {
      value: cookcount,
    },
  });
};

const distribute = (total, current) => {
  const pagingCnt = 9;
  const half = Math.floor(pagingCnt / 2);
  const arr = [];
  current = parseInt(current);
  let L = current - half;
  let R = current + half;

  if (L < 1) {
    R += Math.abs(L) + 1;
    L = 1;
  }

  if (R > total) {
    L -= R - total;
    R = total;
  }

  L = L < 1 ? 1 : L;

  for (let i = L; i <= R; i++) {
    arr.push(i);
  }

  return arr;
};

router.get("/", async (req, res, next) => {
  const option = {
    mode: "text",
    pythonPath: "",
    pythonOption: ["-u"],
    scriptPath: "",
    args: [INPUT, CONVERTTYPE, PAGES],
  };

  PythonShell.run(path.join(__dirname, "../run.py"), option, (err, res) => {
    if (err) throw err;
    bookcount = 0;
    let i = 0;
    let j = 0;
    if (res[0] !== "NULL") {
      try {
        while (res[i] !== undefined) {
          bookcount += 1;
          for (j = i; j < i + 10; j++) {
            putData(res[j], j);
          }
          i = j;
        }
      } catch (error) {
        console.error(error);
      }
    }

    pagingArr = distribute(totalPages, PAGES);

    return draw(routerResponse);
  });
  const routerResponse = res;
});

module.exports = router;
