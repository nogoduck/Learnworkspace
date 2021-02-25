document.querySelector("#run").addEventListener("click", () => {
  //parseInt 정수형 값으로 변환후 리턴
  let row = parseInt(document.querySelector("#row").value);
  let col = parseInt(document.querySelector("#col").value);
  let mine = parseInt(document.querySelector("#mine").value);
  console.log(row, col, mine);

  let tbody = document.querySelector("#table tbody");
  //tr(세로)를 먼저 만들어야 그 안에 가로를 넣을 수 있다
  for (let i = 0; i < col; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < row; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    tbody.appendchild(tr);
  }
});
