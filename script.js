const menu = document.querySelector('.menu');
const menu2 = document.querySelector('.menu2');

menu.onclick = function () {
  menu.classList.toggle('menu-open');
}

menu2.onclick = function () {
  menu2.classList.toggle('menu2-open');
}