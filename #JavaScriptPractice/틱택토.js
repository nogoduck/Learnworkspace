let body = document.body;
let table = document.createElement("table");
let line = [];
let arr = [];

const func = (e) => {
  console.log(e.target);
};
for (let i = 0; i < 3; i++) {
  var tr = document.createElement("tr");
  line.push(tr);
  arr.push([]);
  for (let j = 0; j < 3; j++) {
    let td = document.createElement("td");
    td.addEventListener("click", func);
    arr[i].push(td);
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

body.appendChild(table);
