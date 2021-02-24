// 강의에선 사용하지 않아서 왜 계속 써주는지 모르겠다, 개념 이해차원에서 다시 써본다
// body = document.body

let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);
let res = num1 * num2;

let problem = document.createElement("div");
problem.textContent = num1 + " X " + num2 + " = ???";
document.body.append(problem);

let form = document.createElement("form");
document.body.append(form);

let inpArea = document.createElement("input");
// inpArea.setAttribute("type", "number");
// inpArea.type = "number";
inpArea.setAttribute("placeholder", "정답을 입력해주세요!");
form.append(inpArea);

let = inpButton = document.createElement("button");
inpButton.textContent = "입력";
form.append(inpButton);

let isAnswer = document.createElement("div");
document.body.append(isAnswer);

form.addEventListener("submit", (e) => {
  e.preventDefault(); //입력시 새로고침 방지
  //   console.log(typeof res);
  //   console.log(typeof inpArea.value);
  //   console.log(inpArea.value === res);
  //   if (Number(inpArea.value) === res) {
  //input type = "number" 를 사용해서 위와같은 조건문을 작성하지 않아도 됌
  // 수정 : 위의 number를 사용해도 아래 코드에선 String으로 불러와짐
  if (Number(inpArea.value) === res) {
    isAnswer.textContent = inpArea.value + " 정답입니다 😁";
    inpArea.value = null;
    inpArea.focus();

    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    res = num1 * num2;
    problem.textContent = num1 + " X " + num2 + " = ???";
  } else {
    isAnswer.textContent = inpArea.value + " 오답입니다 😞";
    inpArea.value = null;
    inpArea.focus();
  }
});
