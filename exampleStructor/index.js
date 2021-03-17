const main = document.querySelector("#header .navbar h3");
const mainImg = document.querySelector("#header .navbar img");

const item1 = document.querySelector("#header .navbar .navbar__menu .item1");
const item2 = document.querySelector("#header .navbar .navbar__menu .item2");
const item3 = document.querySelector("#header .navbar .navbar__menu .item3");
const item4 = document.querySelector("#header .navbar .navbar__menu .item4");

main.addEventListener("click", () => {
  console.log("main");
  scrollTo(0, 0);
});

mainImg.addEventListener("click", () => {
  console.log("mainimg");
  scrollTo(0, 0);
});
item1.addEventListener("click", () => {
  console.log("item1");
  scrollTo(0, 968);
});
item2.addEventListener("click", () => {
  console.log("item2");
  scrollTo(0, 1936);
});
item3.addEventListener("click", () => {
  console.log("item3");
  scrollTo(0, 3020);
});
item4.addEventListener("click", () => {
  console.log("item4");
  scrollTo(0, 5153);
});
