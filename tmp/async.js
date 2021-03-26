// async & await
// clear style of using promise

// 1. async
// 함수 앞에 async 만 붙여주면 해당 함수는 비동기로 사용이 가능하다.
async function fetchUser() {
  // do network req in 10 sec...
  return "default__Fox";
}

const user = fetchUser();
console.log(user);

console.log("====[ await ]====");

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log(delay(30));

async function getApple() {
  await delay(1200);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

console.log("====[ Promise Chain ]====");
function promiseBanana() {
  return delay(1000).then(() => "promiseBanana");
}

async function getFruits() {
  //병렬적으로 실행가능한 코드 두개가 동시에 호출되기때문에 1초 후에 결과를 출력할 수 있다
  //또한 사과를 가져오는데 바나나가필요없고 바나나또한 사과가 필요하지 않기떄문에 이렇게 코드를 작성하지 않고 (3)처럼 작성하는게 유용하다
  const applePromise = getApple();
  const bananaPromise = getBanana();

  //아래의 코드에서 Promise를 따로 만들어주지 않고 getApple을 한다면 서로의 작업이 끝날때까지 기다려서
  //수행을 하게된다 결과적으로 1초 + 1초 총 2초의 시간이 걸리게된다
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `async ${banana} + ${apple}`;
}

// function getFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

getFruits().then(console.log);
// 10 : 40 13.await and async

// (3). useful Promise APIs

function pickAllFuits() {
  //모든 Promise를 다 받을 떄까지 모아주는 기능을 가지고 있다.
  // 배열에 모은다
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFuits().then(console.log);

// 먼저 Promise가 수행되는 함수만을 보여주는 api도 있다

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then((e) => {
  console.log("race : ", e);
});
