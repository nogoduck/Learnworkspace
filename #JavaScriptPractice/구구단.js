// 강의에선 사용하지 않아서 왜 계속 써주는지 모르겠다, 개념 이해차원에서 다시 써본다
// body = document.body

let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);
let res = num1 + num2;

let problem = document.createElement("div");
problem.textContent = num1 + " X " + num2 + " = ???";
document.body.append(problem);

let form = document.createElement("form");
document.body.append(form);

let inpArea = document.createElement("input");
inpArea.setAttribute("placeholder", "정답을 입력해주세요!");
form.append(inpArea);

let = inpButton = document.createElement("button");
inpButton.textContent = "입력";
form.append(inpButton);
