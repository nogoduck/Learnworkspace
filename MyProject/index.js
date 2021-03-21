const header_nav = document.querySelector(".navagation");

// document.addEventListener("click", () => {
//   console.log("^0^");
//   header_notice.style.display = "static";
//   //   header_nav.style.position = "fixed";
// });

// document.addEventListener("scroll", () => {
//   console.log(scrollY);
//   console.log("HI");

//   if (scrollY > 30) {
//     header_notice.style.display = "none";
//   } else {
//     header_notice.style.display = "static";
//   }
// });

window.addEventListener("scroll", () => {
  const header = document.querySelector("header"),
  header_notice = document.querySelector(".notice");

  header_notice.classList.toggle('none', window.scrollY > 0);
  // header.classList.toggle("sticky", window.scrollY > 0);
