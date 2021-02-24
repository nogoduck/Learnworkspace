let body = document.body;
let table = document.createElement("table");
let result = document.createElement("h2");
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
  }

  //모든 경우의 수를 대입하여 검사
  let isComplete = false;
  console.log(arr[x][y].textContent, turn);
  //가로줄 검사
  if (
    arr[x][0].textContent === turn &&
    arr[x][1].textContent === turn &&
    arr[x][2].textContent === turn
  ) {
    console.log("가로줄을 검사했습니다.");
    isComplete = true;
  }

  //세로줄 검사
  if (
    arr[0][y].textContent === turn &&
    arr[1][y].textContent === turn &&
    arr[2][y].textContent === turn
  ) {
    console.log("세로줄을 검사했습니다.");
    isComplete = true;
  }

  // 대각선 검사
  if (x - y === 0 || Math.abs(x - y) === 2) {
    if (
      arr[0][0].textContent === turn &&
      arr[1][1].textContent === turn &&
      arr[2][2].textContent === turn
    ) {
      isComplete = true;
    } else if (
      arr[0][2].textContent === turn &&
      arr[1][1].textContent === turn &&
      arr[2][0].textContent === turn
    ) {
      isComplete = true;
    }
  }

  //승리 판별
  if (isComplete) {
    result.textContent = turn + " 님이 승리하셨습니다";
    body.append(result);
    //초기화
    turn = start[0];
    //forEach => for를 대체하여 배열을 인덱스할 때 쓰기 편할걸로 보인다
    arr.forEach(function (x) {
      // console.log(x);
      x.forEach(function (y) {
        // console.log(y);
        y.textContent = "";
      });
    });
  } else {
    //턴 전환 O <=> X
    if (arr[x][y].textContent === start[0]) {
      turn = start[1];
    } else {
      turn = start[0];
    }
  }
};
//append와 appendChild의 차이점을 아직 모르겠다.
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
