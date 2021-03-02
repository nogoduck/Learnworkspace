const table = document.querySelector("#table");
let data = [];
function Default() {
  const fragment = document.createDocumentFragment();
  [1, 2, 3, 4].forEach((y) => {
    let yData = [];
    yData.push(y);
    console.log("y, yData: ", y, yData);
    let tr = document.createElement("tr");
    [1, 2, 3, 4].forEach(() => {
      let xData = [];
      xData.push(0);
      console.log("xD: ", xData);
      let td = document.createElement("td");
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  console.log(fragment);
  table.appendChild(fragment);
}

Default();
