//컴퓨터가 임의로 4자리 숫자를 낸다 (겹치지 않게)
//이를 사용자가 맞추는데 자리와 숫자가 같이 맞으면 "스트라이크", 자리는 틀렸지만 숫자는 맞지만 "볼"을 준다
//ex) 3912 :
//    3184 => 1스트라이크 1볼 (3 / 1)
//    2934 => 1스트라이크 2볼 (9 / 2, 3)

let problem = document.createElement("h1");
problem.textContent = "Enter a 4-digit number";
document.body.append(problem);

let form = document.createElement("form");
document.body.append(form);

let inpArea = document.createElement("input");
inpArea.setAttribute("placeholder", "Please enter a value !");
inpArea.maxLength = 4;
form.append(inpArea);

let = inpButton = document.createElement("button");
inpButton.textContent = "INPUT";
form.append(inpButton);

let answer = document.createElement("div");
document.body.append(answer);

let numlist;
let numarr;

function randomNumber() {
  numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numarr = [];
  for (let i = 0; i < 4; i++) {
    //   console.log(rdindex);
    // pop(마지막 배열부터 하나씩 빼낸다), shift(앞에서부터 빼낸다)
    // push(앞에서부터 하나씩 넣어준다), unshift(뒤에서부터 넣어준다)
    // splice(특정 인덱스에서 값을 빼준다) => splice 특성상 배열 상태로 뽑히기떄문에 인덱스를 추가로 지정해서 값만 뽑아줘야한다 [0]
    // ex )splice(4, 3) 4번쨰 인덱스로부터 뒤로 3가지 숫자를 뽑는다

    //.length 또는 -i 사용
    //   let k = Math.floor(Math.random() * numlist.length);
    let k = Math.floor(Math.random() * (9 - i));
    // console.log(k);
    let tmp = numlist.splice(k, 1)[0];

    numarr.push(tmp);
    // console.log(tmp);
    // console.log(numarr);
  }
}

randomNumber();

// 배열 합치기 예시 (배열 => 문자)
// String(a[0]) + String(a[1]) + String(a[2]) + String(a[3]);
// a.join("") => " " 사이의 값은 연결자 사이의 구분자이다 입력하지 않으면 배열의 값끼리 이어서 합쳐진다.
//반대의 경우 예시 (문자 => 배열)
//b.split("") => " " 사이는 구분자

let cnt = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = inpArea.value;
  console.log(val, numarr, val === numarr.join(""));

  if (cnt < 10) {
    answer.textContent = "Number of remaining: " + (10 - cnt);
    if (Number(val) === Number(numarr.join(""))) {
      problem.textContent = "Home run ⚾";
      inpArea.value = "";
      inpArea.focus();
      cnt = 0;
      answer.textContent = "";
      randomNumber();
    } else {
      cnt++;
      // a.indexOf(v)
      // => a배열의 v의 값이 어느 인덱스에 있는지 찾아준다 값이없으면 -1 반환
      let valarr = val.split("");
      let strike = 0;
      let ball = 0;
      console.log(numarr, valarr);
      //JavaScript는 기본적으로 입력한값을 배열로 바꿔줄때도 String 상태로 들어간다
      //그리하여 Number() 를 사용하여 값이 호출될때마다 바꿔줘야한다
      // 또는 입력할때 숫자로 넣어도 될것같은데 방법을 아직 찾지 못했다

      for (let i = 0; i < 4; i++) {
        if (numarr[i] === Number(valarr[i])) {
          strike++;
          // console.log(strike);
        } else if (numarr.indexOf(Number(valarr[i])) > -1) {
          ball++;
          // console.log(ball);
        }
      }
      problem.textContent = strike + "strike, " + ball + "ball";
    }
  } else {
    inpArea.focus();
    inpArea.value = "";
    answer.innerHTML =
      "Failed💥<br/>The answer is " +
      numarr.join("") +
      "<br/>Enter a try again ↩";
    cnt = 0;
    randomNumber();
  }
});
