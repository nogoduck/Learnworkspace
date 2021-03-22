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

document.addEventListener("scroll", () => {
  const header_notice = document.querySelector(".notice"),
    header_nav = document.querySelector(".navigation");
  // console.log("click");
  // header_notice.classList.toggle("none");
  header_notice.classList.toggle("none", window.scrollY > 0);
  header_nav.classList.toggle("fixed", window.scrollY > 0);
});
