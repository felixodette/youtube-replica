let menuIcon  = document.querySelector(".menu-icon")
let rightBar  = document.querySelector(".right-bar")
let container = document.querySelector(".container")

menuIcon.onclick = function () {
  rightBar.classList.toggle("small-right-bar");
  container.classList.toggle("large-container");
};

// Get the navbar
const navbar = document.getElementById("sticky-nav"),
      // Get the offset position of the navbar
      sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.onscroll = function() {
  if ( window.pageYOffset >= sticky )
    navbar.classList.add("sticky");
  else
    navbar.classList.remove("sticky");
};
