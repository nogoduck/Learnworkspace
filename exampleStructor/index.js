//구현할 남은 기능:
//하단으로 스크롤시 상단 메뉴바 토글 =>
//최하단으로 가는 버튼 생성(3초 후 사라짐)
// 현재 스크롤 위치 메뉴바에 표시,
// 로그인 기능 구현 + 페이지
// 회원가입 기능 구현 + 페이지
// 로그인 시 기존의 사진 모두 제거 후 초록색배경 표시 => // /// 회원가입, 로그인 버튼 제거 후 로그아웃으로 변경
const main = document.querySelector("#header .navbar h3"),
  mainImg = document.querySelector("#header .navbar img"),
  item1 = document.querySelector("#header .navbar .navbar__menu .item1"),
  item2 = document.querySelector("#header .navbar .navbar__menu .item2"),
  item3 = document.querySelector("#header .navbar .navbar__menu .item3"),
  item4 = document.querySelector("#header .navbar .navbar__menu .item4"),
  footer_favorite = document.querySelector("#footer .footer__items .item1 img"),
  footer_restart = document.querySelector("#footer .footer__items .item2 img"),
  footer_close = document.querySelector("#footer .footer__items .item3 img"),
  loginBtn = document.querySelector("#header .navbar .navbar__login .login"),
  signupBtn = document.querySelector("#header .navbar .navbar__login .signup"),
  navbar = document.querySelector("#header .navbar");

loginBtn.addEventListener("click", () => {
  console.log("login");
});

signupBtn.addEventListener("click", () => {
  console.log("signup");
});

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
  addFavorite();
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

addFavorite = () => {
  console.log("addFavorite");
  const title = document.title;
  const url = document.url;

  // Google Chrome, Microsoft Edge, Naver Whale...
  if (window.chrome) {
    alert(
      "크롬 브라우저는 즐겨찾기 함수를 지원하지 않으므로 \n[Ctrl] + [D] 조합키를 사용해 수동으로 추가해주세요!"
    );
  }
  // Firefox
  else if (window.sidebar) {
    window.sidebar.addPanel(title, url, "");
  } else {
    alert("해당 브라우저는 즐겨찾기 기능을 지원하지 않습니다");
  }
};

//bug : button 누를떄도 스크롤 동작 인식함
let previousScrollY;
navbar.style.display = "flex";
document.addEventListener("scroll", (e) => {
  nowScrollY = scrollY;
  if (nowScrollY > previousScrollY) {
    console.log("down Scroll");
    navbar.style.display = "none";
  } else {
    console.log("up Scroll");
    navbar.style.display = "flex";
  }
  // 스크롤을 내릴 때
  previousScrollY = scrollY;
});
