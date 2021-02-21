//컴퓨터가 임의로 4자리 숫자를 낸다 (겹치지 않게)
//이를 사용자가 맞추는데 자리와 숫자가 같이 맞으면 "스트라이크", 자리는 틀렸지만 숫자는 맞지만 "볼"을 준다
//ex) 3912 :
//    3184 => 1스트라이크 1볼 (3 / 1)
//    2934 => 1스트라이크 2볼 (9 / 2, 3)

let problem = document.createElement("div");
problem.textContent = "맞춘거없음";
document.body.append(problem);

let form = document.createElement("form");
document.body.append(form);

let inpArea = document.createElement("input");
inpArea.setAttribute("placeholder", "Please enter a value !");
form.append(inpArea);

let = inpButton = document.createElement("button");
inpButton.textContent = "INPUT";
form.append(inpButton);

let answer = document.createElement("div");
document.body.append(answer);

let numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numres = [];

for (let i = 0; i < 4; i++) {
  //   console.log(rdindex);
  // pop(마지막 배열부터 하나씩 빼낸다), shift(앞에서부터 빼낸다)
  // push(앞에서부터 하나씩 넣어준다), unshift(뒤에서부터 넣어준다)
  // splice(특정 인덱스에서 값을 빼준다) => splice 특성상 배열 상태로 뽑히기떄문에 인덱스를 추가로 지정해서 값만 뽑아줘야한다 [0]
  // ex )splice(4, 3) 4번쨰 인덱스로부터 뒤로 3가지 숫자를 뽑는다

  //.length 또는 -i 사용
  //   let k = Math.floor(Math.random() * numlist.length);
  let k = Math.floor(Math.random() * (9 - i));
  console.log(k);
  let tmp = numlist.splice(k, 1)[0];

  numres.push(tmp);
  console.log(tmp);
  console.log(numres);
}

form.addEventListener("submit", () => {});
