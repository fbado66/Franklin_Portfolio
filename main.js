
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function myFunction2() {
  var responsive = document.getElementById("responsive");
  if (responsive.style.visibility == "hidden") {
    responsive.style.visibility = "visible";
  } else {
    responsive.style.visibility = "visible";
  }
}

function myFunction3() {
  var navbar_background = document.getElementById("responsive");
  if (navbar_background.style.visibility == "visible") {
    navbar_background.style.visibility = "hidden";
  } else {
    navbar_background.style.visibility = "hidden";
  }
}

function Fe_notext(id) {
  id.style.visibility = "hidden" 
}
function Fe_text(id) {
  id.style.visibility = "visible" 
}

function notext(id) {
  id.style.visibility = "hidden" 
}
function text(id) {
  id.style.visibility = "visible" 
}

