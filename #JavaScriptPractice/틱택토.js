let body = document.body;
let table = document.createElement("table");
let line = [];
let arr = [];
let start = ["X", "O"];
let turn = start[0];
//e.target 클릭된 태그
//e.target.parentNode 클릭된 태그의 부모 태그
//e.target.children 클릭된 태그의 자식 태그
const func = (e) => {
  console.log(e.target); //칸 (열) => col(세로)
  console.log(e.target.parentNode); //줄 (행) => row(가로)

  let x = line.indexOf(e.target.parentNode); //행 인덱스
  let y = arr[x].indexOf(e.target); // 열 인덱스
  console.log("행: ", x, "열: ", y);

  //칸이 채워져있는가 체크
  //해당칸이 비워져있지 않으면 무시 그렇지 않으면 값 삽입
  //.value는 input에서 쓰고 대부분 textContent를 사용한다
  if (arr[x][y].textContent !== "") {
    console.log("빈칸X");
  } else {
    console.log("빈칸O");
    arr[x][y].textContent = turn;
    if (arr[x][y].textContent === start[0]) {
      turn = start[1];
    } else {
      turn = start[0];
    }
  }
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
