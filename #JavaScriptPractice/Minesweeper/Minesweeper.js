//이번 강의는 화면과 데이터차트를 서로 일치 시키기위해 번거로운일이 너무 많았다
//이런걸 편하게 하기위해 프레임워크를 꼭 배워 효율을 높여야겠다

var tbody = document.querySelector("#table tbody");
var mineMap = [];
// console.log("Tbody: ", tbody); //html<tbody>태그 사이에 값을 넣어줘도 null값만 가져온다, 동작 순서를 도저히 모르겠다
document.querySelector("#run").addEventListener("click", () => {
  //parseInt 정수형 값으로 변환후 리턴
  var row = parseInt(document.querySelector("#row").value);
  var col = parseInt(document.querySelector("#col").value);
  var mine = parseInt(document.querySelector("#mine").value);
  console.log(row, col, mine);

  //지뢰 랜덤 생성

  var numArr = Array(row * col)
    .fill()
    .map((value, index) => {
      return index;
    });

  var numMix = [];
  console.log(numArr.length);
  for (var i = 0; i < mine; i++) {
    var tmp = numArr.splice(Math.floor(Math.random() * numArr.length), 1)[0];
    numMix.push(tmp);
  }
  console.log(numMix);

  //맵 출력

  tbody = document.querySelector("#table tbody");
  console.log("TBODY: ", tbody);
  //tr(세로)를 먼저 만들어야 그 안에 가로를 넣을 수 있다
  for (var i = 0; i < col; i++) {
    //화면에 출력하는 값과 배열을 서로 시물레이션 하기 위해 매칭해준다
    var arr = [];
    var tr = document.createElement("tr");
    mineMap.push(arr);
    for (var j = 0; j < row; j++) {
      arr.push(1);
      var td = document.createElement("td");
      //우클릭 깃발 꼽기 ⛳
      //표를 하나하나 만들자마자 마우스 우클릭 이벤트(contextmenu)를 달아준다
      td.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log("우클릭");
        //.target은 contetxmenu가 발생하는 태그를 뜻한다 / 현재태그 : <td>
        //.currentTarget과의 차이점은 제일 아래 주석에 있다
        var trParent = e.currentTarget.parentNode;
        var tbodyParent = e.currentTarget.parentNode.parentNode;
        //trParent의 children은 <td>들이다
        //<td>들 중에서 현재 클릭한 위치의 인덱스를 찾을려고 한다 indexOf는 배열에만 사용가능함
        // children은 유사배열이여서 indexOf를 사용할 수 없다

        //var x = tbodyParent.children.indexOf(tr);
        //위의 코드에서 Array.prototype.indexOf.call을 사용하면 강제로 indexOf를 사용할 수 있다
        var y = Array.prototype.indexOf.call(
          trParent.children,
          e.currentTarget
        );
        var x = Array.prototype.indexOf.call(tbodyParent.children, tr);

        console.log(x, y);
        e.currentTarget.textContent = "⛳";
        mineMap[x][y] = "!";

        //인덱스를 찾는 다른방법 ()
        // var target = e.currentTarget;
        // var col = td.cellIndex;
        // var row = td.parentNode.rowIndex - 1;
        // console.log(target, row, col);
      });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    console.log(arr);
  }

  //지뢰 심기 💣
  for (var i = 0; i < mine; i++) {
    var mineRow = numMix[i] % col;
    var mineCol = Math.floor(numMix[i] / row);
    console.log(mineCol, mineRow);
    tbody.children[mineCol].children[mineRow].textContent = "💣";
    mineMap[mineCol][mineRow] = "X";
  }
  console.log(mineMap);
});
//우클릭 두번 물음표 꼽기 ❓

//뭔짓을 해도 tbody의 값이 들어가질 않는다
//추측으로는 만들기 버튼을 누르면서 tbody의 값이 사용되고 사라지는것 같은데
//스코프를 이해하지 못하고 있어서 생기는 문제 같기도하고 강의에서는 var를 사용했는데 나는 var을 사용하느데 있어서 오는 차이점으로 안되는걸까 하는 의심이 들기도한다
// tbody = document.querySelector("#table tbody");
// console.log("tbody to : ", tbody);

//.currentTarget은 내가 이벤트 리스너를 달아준 태그를 가져오고 <tbody></tbody>
//target은 이벤트 리스너가 발생하는 태그를 가져온다 <td></td>
// tbody.addEventListener("contextmenu", (e) => {
//   console.log("TBODY");
//   console.log(e.currentTarget);
//   console.log(e.target);
// });
