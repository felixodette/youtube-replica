let menuIcon  = document.querySelector(".menu-icon")
let rightBar  = document.querySelector(".right-bar")
let container = document.querySelector(".container")

menuIcon.onclick = function () {
  rightBar.classList.toggle("small-right-bar");
  container.classList.toggle("large-container");
}

// window.onscroll = function () {myFunction()};
// let header = document.querySelector('nav');
// let sticky = header.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky');
//   }
// }
