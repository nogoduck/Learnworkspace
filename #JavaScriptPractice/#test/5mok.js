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
  console.log(curX, curY);
  console.log(sizeN, sizeM, stoneNum);
  stoneNum -= 1;

  stoneColor = Map[curX][curY];
  console.log(stoneColor);

  for (let k = 0; k < 4; k++) {
    let q = [];
    q.push([curX, curY]);
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
          if (Map[x][y] !== stoneColor) {
            continue;
          }
          if (check[x][y] === false) {
            check[x][y] = true;
            cnt += 1;
            q.push([x, y]);
          }
          if (cnt > stoneNum) {
            return Map[x][y] + " Victory";
          }
        }
      }
    }
  }
};

const check = Array.from(Array(15), () => Array(15).fill(false));
const sizeN = 15;
const sizeM = 15;
let stoneNum = 5;
const Map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
  [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0], //2
  [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 7, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0], //4
  [0, 0, 0, 7, 4, 4, 7, 0, 7, 4, 0, 0, 0, 0, 0], //5
  [0, 0, 4, 0, 4, 4, 4, 7, 7, 4, 0, 0, 0, 0, 0], //6
  [0, 0, 0, 0, 0, 4, 7, 4, 7, 4, 0, 0, 0, 0, 0], //7
  [0, 0, 0, 0, 0, 7, 0, 0, 7, 7, 0, 0, 0, 0, 0], //8
  [0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 7, 0, 0, 0, 0], //9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //11
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //12
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //13
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //14
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
];

console.log(isWin(8, 9));
