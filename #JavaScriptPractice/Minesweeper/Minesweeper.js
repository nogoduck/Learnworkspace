document.querySelector("#run").addEventListener("click", () => {
  //parseInt 정수형 값으로 변환후 리턴
  let row = parseInt(document.querySelector("#row").value);
  let col = parseInt(document.querySelector("#col").value);
  let mine = parseInt(document.querySelector("#mine").value);
  console.log(row, col, mine);

  let mineMap = [];
  let tbody = document.querySelector("#table tbody");
  console.log(tbody);
  //tr(세로)를 먼저 만들어야 그 안에 가로를 넣을 수 있다
  for (let i = 0; i < col; i++) {
    //화면에 출력하는 값과 배열을 서로 시물레이션 하기 위해 매칭해준다
    let arr = [];
    let tr = document.createElement("tr");
    mineMap.push(arr);
    for (let j = 0; j < row; j++) {
      arr.push(1);
      let td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = "O";
    }
    tbody.appendChild(tr);
    console.log(arr);
  }
});
