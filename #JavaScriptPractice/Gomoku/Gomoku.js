let body = document.body;
let table = document.createElement("table");
let result = document.createElement("h2");
let line = [];
let arr = [];
let start = ["⚫", "⚪"];
let turn = start[0];
const sizeN = 15;
const sizeM = 15;
let stoneNum = 4;

const dx = [
  [-1, 1],
  [0, 0],
  [-1, 1],
  [-1, 1],
];
const dy = [
  [0, 0],
  [-1, 1],
  [-1, 1],
  [1, -1],
];

isWin = (curX, curY) => {
  const check = Array.from(Array(15), () => Array(15).fill(false));

  console.log("curX: ", curX, "curY: ", curY);
  console.log(sizeN, sizeM, stoneNum);

  stoneColor = arr[curX][curY].textContent;
  console.log("stoneColor: ", stoneColor);

  for (let k = 0; k < 4; k++) {
    let q = [];
    q.push([curX, curY]);
    console.log(q);
    check[curX][curY] = true;
    let cnt = 1;

    while (q.length !== 0) {
      let tmp = q.shift();
      a = tmp[0];
      b = tmp[1];
      for (let i = 0; i < 2; i++) {
        let x = a + dx[k][i];
        let y = b + dy[k][i];
        if (0 <= x && x < sizeN && 0 <= y && y < sizeM) {
          if (arr[x][y].textContent !== stoneColor) {
            continue;
          }
          if (check[x][y] === false) {
            check[x][y] = true;
            cnt += 1;
            q.push([x, y]);
          }
          console.log(cnt);
          if (cnt > stoneNum) {
            console.log(arr[x][y].textContent + " Victory");
            return true;
          }
        }
      }
    }
  }
};

const func = (e) => {
  // console.log(e.target);
  // console.log(e.target.parentNode);

  let x = line.indexOf(e.target.parentNode);
  let y = arr[x].indexOf(e.target);

  if (arr[x][y].textContent !== "") {
  } else {
    arr[x][y].textContent = turn;
  }

  isWin(x, y);

  if (isWin(x, y)) {
    result.textContent = turn + " 돌 승";
    body.append(result);
    turn = start[0];

    arr.forEach(function (x) {
      x.forEach(function (y) {
        y.textContent = "";
      });
    });
  } else {
    if (arr[x][y].textContent === start[0]) {
      turn = start[1];
    } else {
      turn = start[0];
    }
  }
};

for (let i = 0; i < 15; i++) {
  var tr = document.createElement("tr");
  line.push(tr);
  arr.push([]);
  for (let j = 0; j < 15; j++) {
    let td = document.createElement("td");
    td.addEventListener("click", func);
    arr[i].push(td);
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

body.appendChild(table);
