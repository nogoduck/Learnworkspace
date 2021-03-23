let a = 20;

function func() {
  let a = 10;
  console.log("func: ", a);
}

console.log(a);

func();

console.log("func run:", a);
