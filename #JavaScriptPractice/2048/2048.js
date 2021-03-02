const table = document.querySelector("#table");
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
  randomIndex = voidArr[Math.floor(Math.random() * voidArr.length)];
  data[randomIndex[0]][randomIndex[1]] = 2;
  console.log("randomIndex: ", randomIndex);
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
