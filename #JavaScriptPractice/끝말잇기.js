let bodys = document.body;
let word = document.createElement("div");
word.textContent = "수박";
document.body.append(word);

let form = document.createElement("form");
document.body.append(form);

let inpArea = document.createElement("input");
inpArea.setAttribute("id", "val");
form.append(inpArea);

let inpButton = document.createElement("button");
inpButton.textContent = "입력";
form.append(inpButton);

let res = document.createElement("div");
document.body.append(res);

//form 안에 있는 input은 엔터를 칠 수 있다 , 하지만 페이지가 새로고침 된다
//form은 엔터를 쳐서 submit이 되면 다른페이지로 넘어가거나 새로고침이 된다 이게 기본동작이다 이를 바꾸기 위해선
//e.preventDefault()를 사용해 준다
//기존의 inpButton => form 으로 변경
form.addEventListener("submit", function 콜백함수(e) {
  //form에서 엔터를 사용했을 때
  e.preventDefault();

  //div, button같은 태그 안에 들어가는 값을 가져올땐 textContent를 사용하고
  //input 의 값을 가져올떈 value를 사용한다
  // console.log(word.textContent);
  // console.log(inpArea.value);
  // console.log(inpButton.textContent);
  if (word.textContent[word.textContent.length - 1] === inpArea.value[0]) {
    res.textContent = "딩동댕";
    word.textContent = inpArea.value;
    inpArea.value = ""; //입력 후 값이 비워짐
    inpArea.focus(); //입력 후 다시 입력가능한 창으로 이동함
  } else {
    res.textContent = "땡";
    inpArea.value = "";
    inpArea.focus();
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
