const main = document.querySelector("#header .navbar h3"),
  mainImg = document.querySelector("#header .navbar img"),
  item1 = document.querySelector("#header .navbar .navbar__menu .item1"),
  item2 = document.querySelector("#header .navbar .navbar__menu .item2"),
  item3 = document.querySelector("#header .navbar .navbar__menu .item3"),
  item4 = document.querySelector("#header .navbar .navbar__menu .item4"),
  footer_favorite = document.querySelector("#footer .footer__items .item1 img"),
  footer_restart = document.querySelector("#footer .footer__items .item2 img"),
  footer_close = document.querySelector("#footer .footer__items .item3 img");
console.log(footer_favorite);

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

footer_favorite.addEventListener("click", () => {
  console.log("favorite");
});
footer_restart.addEventListener("click", () => {
  location.reload();
  console.log("restart");
});
footer_close.addEventListener("click", () => {
  window.close();
  console.log("close");
});
