const table = document.querySelector("#table");
const score = document.querySelector("#score");
let data = [];

function Default() {
  const fragment = document.createDocumentFragment();
  [1, 2, 3, 4].forEach(() => {
    let yData = [];
    data.push(yData);
    console.log("y, yData: ", yData);
    let tr = document.createElement("tr");
    [1, 2, 3, 4].forEach(() => {
      yData.push(0);
      let td = document.createElement("td");
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
}

function setRandom() {
  voidArr = [];
  data.forEach((yData, i) => {
    yData.forEach((xData, j) => {
      if (!xData) {
        voidArr.push([i, j]);
      }
    });
  });

  console.log(voidArr);

  if (voidArr.length === 0) {
    alert("Game Over, your Score is " + score.textContent);
    Default();
  } else {
    let randomIndex = voidArr[Math.floor(Math.random() * voidArr.length)];
    data[randomIndex[0]][randomIndex[1]] = 2;
    console.log("randomIndex: ", randomIndex);
  }

  Draw();
}
function Draw() {
  data.forEach((yData, i) => {
    yData.forEach((xData, j) => {
      if (xData > 0) {
        table.children[i].children[j].textContent = xData;
      } else {
        table.children[i].children[j].textContent = "";
      }
    });
  });
}
Default();
setRandom();
Draw();

let startClick = false;
let startPoint = [];
let endPoint = [];
let isdrag = false;

// 마우스르 누르고 있을 때 동작
window.addEventListener("mousedown", (e) => {
  startClick = true;
  startPoint = [e.clientX, e.clientY];
  // console.log("mousedown", e);
});
// 마우스의 움직임을 감지
//screenX: 모니터 기준 좌표
//pageX: 페이지(스크롤 포함) 좌표
//clientX: 브라우저 화면 기준 좌표
//offsetX: 이벤트 타겟 기준 좌표
window.addEventListener("mousemove", (e) => {
  if (startClick) {
    // console.log("mousemove", e);
    isdrag = true;
  }
});
// 마우스르 땔 때 동작
window.addEventListener("mouseup", (e) => {
  startClick = false;
  endPoint = [e.clientX, e.clientY];
  // console.log("mouseup", e);

  let direction;
  if (isdrag) {
    let xDiffPoint = endPoint[0] - startPoint[0];
    let yDiffPoint = endPoint[1] - startPoint[1];

    if (xDiffPoint < 0 && Math.abs(xDiffPoint) / Math.abs(yDiffPoint) > 1) {
      direction = "left";
    } else if (
      xDiffPoint > 0 &&
      Math.abs(xDiffPoint) / Math.abs(yDiffPoint) > 1
    ) {
      direction = "right";
    } else if (
      yDiffPoint > 0 &&
      Math.abs(xDiffPoint) / Math.abs(yDiffPoint) < 1
    ) {
      direction = "down";
    } else if (
      yDiffPoint < 0 &&
      Math.abs(xDiffPoint) / Math.abs(yDiffPoint) < 1
    ) {
      direction = "up";
    }
    console.log("xDiff, yDiff", xDiffPoint, yDiffPoint, direction);
  }
  startClick = false;
  isdrag = false;

  switch (direction) {
    case "left":
      let newLeftData = [[], [], [], []];
      data.forEach((yData, i) => {
        yData.forEach((xData, j) => {
          if (xData) {
            newLeftData[i].push([xData]);
          }
        });
      });
      console.log("down: ", newLeftData);

      [1, 2, 3, 4].forEach((yData, i) => {
        [1, 2, 3, 4].forEach((xData, j) => {
          data[i][j] = newLeftData[i][j] || 0;
        });
      });
      break;
    case "right":
      let newRightData = [[], [], [], []];
      data.forEach((yData, i) => {
        yData.forEach((xData, j) => {
          if (xData) {
            newRightData[i].unshift([xData]);
          }
        });
      });
      console.log("down: ", newRightData);

      [1, 2, 3, 4].forEach((yData, i) => {
        [1, 2, 3, 4].forEach((xData, j) => {
          data[i][3 - j] = newRightData[i][j] || 0;
        });
      });
      break;
    case "up":
      let newUpData = [[], [], [], []];
      data.forEach((yData, i) => {
        yData.forEach((xData, j) => {
          if (xData) {
            newUpData[j].push([xData]);
          }
        });
      });
      console.log("newUpData: ", newUpData);

      [1, 2, 3, 4].forEach((yData, i) => {
        [1, 2, 3, 4].forEach((xData, j) => {
          data[j][i] = newUpData[i][j] || 0;
        });
      });
      break;
    case "down":
      let newDownData = [[], [], [], []];
      data.forEach((yData, i) => {
        yData.forEach((xData, j) => {
          if (xData) {
            newDownData[j].unshift([xData]);
          }
        });
      });
      console.log("down: ", newDownData);

      [1, 2, 3, 4].forEach((yData, i) => {
        [1, 2, 3, 4].forEach((xData, j) => {
          data[3 - j][i] = newDownData[i][j] || 0;
        });
      });
      break;
    default:
      console.log("null move");
      break;
  }
  setRandom();
});

//#######################
//.          │[-200, 100].
//           │
//           │
//           │[0,0]
// ──────────┼───────────
//           │        [-100, ]
//           │
//           │
// .         │          .
