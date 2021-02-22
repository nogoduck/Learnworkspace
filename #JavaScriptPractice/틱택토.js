let body = document.body;
let table = document.createElement("table");
let line = [];
let arr = [];

//e.target 클릭된 태그
//e.target.parentNode 클릭된 태그의 부모 태그
//e.target.children 클릭된 태그의 자식 태그
const func = (e) => {
  console.log(e.target); //칸 (열) => col(세로)
  console.log(e.target.parentNode); //줄 (행) => row(가로)

  let row = line.indexOf(e.target.parentNode);
  let col = arr[row].indexOf(e.target);
  console.log("행: ", row, "열: ", col);
};
//append와 appendChild의 차이점을 아직 모르겠다.
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
