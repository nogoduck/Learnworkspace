let bodys = document.body;
let word = document.createElement("div");
word.textContent = "수박";
document.body.append(word);

let inpArea = document.createElement("input");
inpArea.setAttribute("id", "val");
document.body.append(inpArea);

let inpButton = document.createElement("button");
inpButton.textContent = "입력";
document.body.append(inpButton);

let res = document.createElement("div");
document.body.append(res);

inpButton.addEventListener("click", function 콜백함수() {
  //div, button같은 태그 안에 들어가는 값을 가져올땐 textContent를 사용하고
  //input 의 값을 가져올떈 value를 사용한다
  // console.log(word.textContent);
  // console.log(inpArea.value);
  // console.log(inpButton.textContent);
  if (word.textContent[word.textContent.length - 1] === inpArea.value[0]) {
    res.textContent = "딩동댕";
    word.textContent = inpArea.value;
    inpArea.value = "";
  } else {
    res.textContent = "땡";
  }
});

// let inp = prompt("시작할 단어를 입력해주세요");
// while (inp != 0) {
//   let ans = inp[inp.length - 1];

//   inp = prompt(
//     inp + "\n이어갈 단어를 입력해 주세요\n'0'을 입력하면 종료됩니다."
//   );

//   if (inp[0] === ans) {
//     continue;
//   } else {
//     alert("땡");
//     break;
//   }
// }
