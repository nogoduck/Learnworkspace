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
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(2000);
  return "🍌";
}

console.log("====[ Promise Chain ]====");
function promiseBanana() {
  return delay(2000).then(() => "promiseBanana");
}

function getFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

getFruits().then(console.log);
// 10 : 40 13.await and async
