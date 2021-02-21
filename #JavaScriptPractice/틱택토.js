let body = document.body;
let table = document.createElement("table");

for (let i = 0; i < 3; i++) {
  var tr = document.createElement("tr");
  for (let j = 0; j < 3; j++) {
    let td = document.createElement("td");
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

body.appendChild(table);

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
