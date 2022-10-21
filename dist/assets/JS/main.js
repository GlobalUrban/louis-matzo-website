"use strict";
const buttons = document.getElementsByClassName("button");
const first = document.getElementById("first");
const navBottomBar = document.getElementById("bottomBar");
const map = document.getElementById("map");
const mapButton = document.getElementById("mapButton");

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

mapButton.addEventListener("click", () => {
  map.classList.toggle("map-bigger");
});




