function toggleMenu(x) {
  let menu = document.querySelector(".mob_menu");
  let body = document.querySelector("body");

  x.classList.toggle("show");
  menu.classList.toggle("show");
  body.classList.toggle("no_scroll");
}