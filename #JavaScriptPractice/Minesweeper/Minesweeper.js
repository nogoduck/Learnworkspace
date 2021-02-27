//이번 강의는 화면과 데이터차트를 서로 일치 시키기위해 번거로운일이 너무 많았다
//이런걸 편하게 하기위해 프레임워크를 꼭 배워 효율을 높여야겠다

let tbody = document.querySelector("#table tbody");
let mineMap = [];
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
      //우클릭 깃발 꼽기 ⛳
      //표를 하나하나 만들자마자 마우스 우클릭 이벤트(contextmenu)를 달아준다
      td.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log("우클릭");
        //.target은 contetxmenu가 발생하는 태그를 뜻한다 / 현재태그 : <td>
        //.currentTarget과의 차이점은
        let trParent = e.currentTarget.parentNode;
        let tbodyParent = e.currentTarget.parentNode.parentNode;
        //trParent의 children은 <td>들이다
        //<td>들 중에서 현재 클릭한 위치의 인덱스를 찾을려고 한다 indexOf는 배열에만 사용가능함
        // children은 유사배열이여서 indexOf를 사용할 수 없다

        //let x = tbodyParent.children.indexOf(tr);
        //위의 코드에서 Array.prototype.indexOf.call을 사용하면 강제로 indexOf를 사용할 수 있다
        let y = Array.prototype.indexOf.call(
          trParent.children,
          e.currentTarget
        );
        let x = Array.prototype.indexOf.call(tbodyParent.children, tr);

        console.log(x, y);
        e.currentTarget.textContent = "⛳";

        //인덱스를 찾는 다른방법 ()
        // let target = e.currentTarget;
        // let col = td.cellIndex;
        // let row = td.parentNode.rowIndex - 1;
        // console.log(target, row, col);
      });
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

//우클릭 두번 물음표 꼽기 ❓
