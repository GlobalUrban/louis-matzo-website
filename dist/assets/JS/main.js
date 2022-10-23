
// Main Slider Assets //
const buttons = document.getElementsByClassName("button");
const first = document.getElementById("first");
const navBottomBar = document.getElementById("bottomBar");
const map = document.getElementById("map");
const mapButton = document.getElementById("mapButton");

// Main Slider & Nav Bar// 
buttons[0].addEventListener("click", () => {
  first.style = "margin-left: 0%;";
  navBottomBar.style = "margin-left: 0%;";
  window.scrollBy(0,1000);
});

buttons[1].addEventListener("click", () => {
  first.style = "margin-left: -20%;";
  navBottomBar.style = "margin-left: 21%;";
  window.scrollBy(0,1000);
});

buttons[2].addEventListener("click", () => {
  first.style = "margin-left: -40%;";
  navBottomBar.style = "margin-left: 41.5%;";
  window.scrollBy(0,1000);
});

buttons[3].addEventListener("click", () => {
  first.style = "margin-left: -60%;";
  navBottomBar.style = "margin-left: 63%;";
  window.scrollBy(0,1000);
});

buttons[4].addEventListener("click", () => {
  first.style = "margin-left: -80%;";
  navBottomBar.style = "margin-left: 84%;";
  window.scrollBy(0,1000);
});

// Mobile Slider Assets //
const mobileNavButton = document.getElementsByClassName("mobileButton");
const mobileSlide = document.getElementById("mobileSlide");
const mobileBottomBar = document.getElementById("mobileBottomBar");


mobileNavButton[0].addEventListener("click", () => {
  console.log("Buenas");
  mobileSlide.style = "margin-left: -0%;";
  mobileBottomBar.style = "margin-left: 0%;";
});

mobileNavButton[1].addEventListener("click", () => {
  console.log("Buenas");
  mobileSlide.style = "margin-left: -20%;";
  mobileBottomBar.style = "margin-left: 20%;";
});


// Map Expand //
mapButton.addEventListener("click", () => {
  map.classList.toggle("map-bigger");
  
});




