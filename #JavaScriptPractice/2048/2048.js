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

function setRandom() {}
function Draw() {}
Default();
setRandom();
Draw();
