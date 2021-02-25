let tbody = document.querySelector("#table tbody");

document.querySelector("#run").addEventListener("click", () => {
  //parseInt 정수형 값으로 변환후 리턴
  let row = parseInt(document.querySelector("#row").value);
  let col = parseInt(document.querySelector("#col").value);
  let mine = parseInt(document.querySelector("#mine").value);
  console.log(row, col, mine);

  //지뢰 랜덤 생성

  let numArr = Array(row * col)
    .fill()
    .map((value, index) => {
      return index;
    });

  let numMix = [];
  console.log(numArr.length);
  for (let i = 0; i < mine; i++) {
    let tmp = numArr.splice(Math.floor(Math.random() * numArr.length), 1)[0];
    numMix.push(tmp);
  }
  console.log(numMix);

  //맵 출력
  let mineMap = [];
  tbody = document.querySelector("#table tbody");
  console.log("TBODY: ", tbody);
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

  //지뢰 심기 💣
  for (let i = 0; i < mine; i++) {
    let mineRow = numMix[i] % col;
    let mineCol = Math.floor(numMix[i] / row);
    console.log(mineCol, mineRow);
    tbody.children[mineCol].children[mineRow].textContent = "💣";
    mineMap[mineCol][mineRow] = "X";
  }
  console.log(mineMap);
});

//contextmenu는 마우스 우클릭 이벤트입니다
tbody.querySelectorAll("td").forEach((td) => {
  td.addEventListener("contextmenu", () => {
    console.log("오른쪽클릭");
  });
});

//우클릭 깃발 꼽기 ⛳

//우클릭 두번 물음표 꼽기 ❓
