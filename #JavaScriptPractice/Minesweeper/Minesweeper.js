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
  // console.log(numMix);

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
        // console.log("X, Y : ", x, y);
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

      //클릭했을 떄 주변의 지뢰 갯수 카운트
      td.addEventListener("click", (e) => {
        // // parent, child관계 확인용 => children은 자식 태그가 하나도 없기때문에 결과값이 나오지 않음
        // console.log("target : ", e.currentTarget);
        // console.log(
        //   "parent1, parent2, parent3 : ",
        //   e.currentTarget.parentNode,
        //   e.currentTarget.parentNode.parentNode,
        //   e.currentTarget.parentNode.parentNode.parentNode
        // );
        // console.log(
        //   "children1, children2, children3 : ",
        //   e.currentTarget.children,
        //   e.currentTarget.children.children,
        //   e.currentTarget.children.children.children
        // );
        // e = <td></td> / e.parent = <tr></tr> / e.parent.parent = <tbody></tbody>
        let trParent = e.currentTarget.parentNode;
        let tbodyParent = e.currentTarget.parentNode.parentNode;
        let y = Array.prototype.indexOf.call(
          trParent.children,
          e.currentTarget
        );
        let x = Array.prototype.indexOf.call(tbodyParent.children, tr);
        // console.log(x, y);
        if (mineMap[x][y] === "X") {
          e.currentTarget.textContent = "💥";
        } else {
          //filter 배열내에서 지정된 값을 찾아서 리턴해준다 // 2차원으로 잘 감싸야 에러가 안난다
          let mineIndex = [mineMap[x][y - 1], mineMap[x][y + 1]];
          //나는 큐를 사용해서 8칸을 비교후 테이블을 벗어나면 무시하게 알고리즘을 설계하려고 했으나
          //강사분이 if문만 써서 구현하는걸 보고 몇번을 보고있지만 아직도 이해가 너무너무너무 안된다

          //x좌표는 없으면 에러가 나지만 y는 처리하지 않아도 에러가 나지않고 undifined가 되기 떄문에 따로 처리를 안했다고 한다
          // console.log(mineIndex);

          if (mineMap[x - 1]) {
            //concat은 배열과 배열을 합친다, push를 써서 합칠려면 하나씩 써야한다

            mineIndex = mineIndex.concat([
              mineMap[x - 1][y - 1],
              mineMap[x - 1][y],
              mineMap[x - 1][y + 1],
            ]);
          }
          if (mineMap[x + 1]) {
            mineIndex = mineIndex.concat([
              mineMap[x + 1][y - 1],
              mineMap[x + 1][y],
              mineMap[x + 1][y + 1],
            ]);
          }
          // console.log(mineIndex);
          e.currentTarget.textContent = mineIndex.filter((v) => {
            return v === "X";
          }).length;
        }
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
    // console.log(mineCol, mineRow);
    tbody.children[mineCol].children[mineRow].textContent = "💣";
    mineMap[mineCol][mineRow] = "X";
  }
  // console.log(mineMap);
});

// // ######################################################################################################
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

// // ######################################################################################################
// // #스코프

// let x = "Global";
// function ex() {
//   //이름이 같더라도 선언하지 않으면 전역변수값을 가져온다
//   //안에 선안된 변수가 없으면 바깥을 나가서 찾아보는데 거기에도 없으면(제일 바깥)에러가 나타난다
// 실제로 해보니까 어디에도 선언을 안한 상테에서는 에러가 나타나지 않고 값만 비어있다 그러나
// 함수 아래쪽에 선언을 하면 오류가 확실히 뜬다

//   //var은 선언된 함수 내부에서만 존재한다 요즘엔 쓰이지 않는다
//   //let은 {}블록 안에서만 존재한다 이를 스코프라고 한다
//   x = "Local";
//   x = "change";
// }

// ex();
// alert(x);

// //var 기준 / const랑은 완전히 성질이 다르다
// //#스코프 체인
// // 함수를 기준으로 한 블록씩 이동
// // 스코프 간의 상하관계를 스코프 체인이라고 한다
// let name = "Banana";
// // let enemy;
// let outer = () => {
//   //작동방식 : outer함수 내에서 name을 찾는다 => 없다 => 한 단계 밖에서 찾아서 값이 있으면 가져온다
//   console.log("외부", name); //외부 name을 가져온다
//   let inner = () => {
//     // 바깥을 두번 나가서 탐색
//     let enemy = "Feed";
//     console.log("내부", name);
//   };
//   inner();
// };
// outer();
// console.log("inner : ", enemy);

// // ######################################################################################################
// // # 코드가 적히는 순간 스코프는 정해지고 이를 렉시컬 스코프(정적 스코프)라고 한다
// // 자바스크립트 언어자체는 다이나믹하지만 스코프만은 정적으로 동작한다

// // # 동적 스코프 : 함수의 실행 순서에 따라 스코프가 바뀌면 동적 스코프라고 한다
// //만약에 다른언어가 동적으로 동작한다면
// // warpper에 var name이라 선언한 상태로 log를 호출한다면 가장 최근에 실행됬던 함수의 스코프를 따른다

// let name = "Good";

// log = () => {
//   console.log(name);
// };

// wrapper = () => {
//   name = "bad"; // 실행결과 : bad
//   // var name = "bad"; // 실행결과 : Good
//   //변수나 함수나 스코프를 찾아서 실행하는것은 똑같다
//   log();
// };

// wrapper();

// // ######################################################################################################
// 클로저를 이해하기 위한 함수와 함수가 접근할 수 있는 스코프가 클로저 관계를 맺는다
// ! 반복문과 비동기 함수가 만날 때 클로저 문제가 자주 발생한다

// for (var i = 0; i < 100; i++) {
//   setTimeout(function () {
//     //함수 안의 변수는  실행 될 때 값을 찾는다
//     // 그래서 setTimeout의 함수가 실행되는 순간 i를 찾는데 i는 이미
//     // 100으로 연산이 끝난상태인 값을 가져오는 것이다
//     console.log(i);
//   }, i * 1000);

//   // setTimeout(() => {
//   //   console.log(i);
//   // }, i * 1000);
// }

//solution1 : var에서 let으로 i의 타입을 변경하면 클로저 문제가 해결되는것으로 보인다 (확실하진 않음 이것저거 바꿔보다 얻어걸림)
//solution2 : 클로저의 특성을 활용한 해결법

for (var i = 0; i < 100; i++) {
  (function closure(j) {
    setTimeout(function () {
      console.log(j);
    }, i * 1000);
  })(i); //괄호로 감싸면 즉시실행 함수
}
