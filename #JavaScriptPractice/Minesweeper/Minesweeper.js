//210227 bug : 지뢰판의 사이즈가 너무 커지면 지뢰가 화면에 표시되지 않는 버그가 있다, 지뢰를 찾기위해 우클릭을 하면 나타난다
//210227 bug 해결 : mineMap 을 전역변수로 세팅해서 지뢰판을 새로 만들때마다
//기존의 지뢰맵과 중첩되면서 생기는 버그였다 => 클릭할때마다 새로운 데이터맵을 생성하게 변경
//이번 강의는 화면과 데이터차트를 서로 일치 시키기위해 번거로운일이 너무 많았다
//이런걸 편하게 하기위해 프레임워크를 꼭 배워 효율을 높여야겠다
let tbody = document.querySelector("#table tbody");

// console.log("Tbody: ", tbody); //html<tbody>태그 사이에 값을 넣어줘도 null값만 가져온다, 동작 순서를 도저히 모르겠다
document.querySelector("#run").addEventListener("click", () => {
  let mineMap = [];
  //parseInt 정수형 값으로 변환후 리턴
  let tbody = document.querySelector("#table tbody");
  //tbody 내부 초기화
  tbody.innerHTML = "";
  let row = parseInt(document.querySelector("#row").value);
  let col = parseInt(document.querySelector("#col").value);
  let mine = parseInt(document.querySelector("#mine").value);
  // console.log(row, col, mine);

  //지뢰 랜덤 생성

  let numArr = Array(row * col)
    .fill()
    .map((value, index) => {
      return index;
    });

  let numMix = [];
  // console.log(numArr.length);
  for (let i = 0; i < mine; i++) {
    let tmp = numArr.splice(Math.floor(Math.random() * numArr.length), 1)[0];
    numMix.push(tmp);
  }
  console.log(numMix);

  //맵 출력

  tbody = document.querySelector("#table tbody");
  // console.log("TBODY: ", tbody);
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
        // console.log("우클릭");
        //.target은 contetxmenu가 발생하는 태그를 뜻한다 / 현재태그 : <td>
        //.currentTarget과의 차이점은 제일 아래 주석에 있다
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
        let target = e.currentTarget.textContent;
        console.log("X, Y : ", x, y);
        if (target === "" || target === "💣") {
          e.currentTarget.textContent = "⛳";
          // 데이터 맵에는 반영될 필요가 없어보여 제거
          // mineMap[x][y] = "!";
        } else if (target === "⛳") {
          e.currentTarget.textContent = "❓";
          // mineMap[x][y] = "?";
        } else if (target === "❓") {
          if (mineMap[x][y] === 1) {
            e.currentTarget.textContent = "";
          } else if (mineMap[x][y] === "X") {
            e.currentTarget.textContent = "💣";
          }
        }

        //인덱스를 찾는 다른방법 ()
        // let target = e.currentTarget;
        // let col = td.cellIndex;
        // let row = td.parentNode.rowIndex - 1;
        // console.log(target, row, col);
      });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    // console.log(arr);
  }

  //지뢰 심기 💣
  for (let i = 0; i < mine; i++) {
    let mineRow = numMix[i] % row;
    let mineCol = Math.floor(numMix[i] / row);
    console.log(mineCol, mineRow);
    tbody.children[mineCol].children[mineRow].textContent = "💣";
    mineMap[mineCol][mineRow] = "X";
  }
  console.log(mineMap);
});

//+추가내용
//ES5(ECMAScript5)전까지는 var 키워드를 사용했는데 이는 함수 레벨 스코프이고
// 함수 레벨 스코프(Function-level scope)
// 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다.즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.
// 블록 레벨 스코프(Block-level scope)
// 모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등) 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다. 즉, 코드 블록 내부에서 선언한 변수는 지역 변수이다.

// // 뭔짓을 해도 tbody의 값이 들어가질 않는다
// // 추측으로는 만들기 버튼을 누르면서 tbody의 값이 사용되고 사라지는것 같은데
// // 스코프를 이해하지 못하고 있어서 생기는 문제 같기도하고 강의에서는 var를 사용했는데 나는 var을 사용하느데 있어서 오는 차이점으로 안되는걸까 하는 의심이 들기도한다
// tbody = document.querySelector("#table tbody");
// console.log("tbody to : ", tbody);

// // .currentTarget은 내가 이벤트 리스너를 달아준 태그를 가져오고 <tbody></tbody>
// // target은 이벤트 리스너가 발생하는 태그를 가져온다 <td></td>
// tbody.addEventListener("contextmenu", (e) => {
//   console.log("TBODY");
//   console.log(e.currentTarget);
//   console.log(e.target);
// });
