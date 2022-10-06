"use strict";
const buttons = document.getElementsByClassName("button");
const first = document.getElementById("first");
const navBottomBar = document.getElementById("bottomBar");

buttons[0].addEventListener("click", () => {
  first.style = "margin-left: 0%;";
  navBottomBar.style = "margin-left: 0%;";
});

buttons[1].addEventListener("click", () => {
  first.style = "margin-left: -20%;";
  navBottomBar.style = "margin-left: 25%;";
});

buttons[2].addEventListener("click", () => {
  first.style = "margin-left: -40%;";
  navBottomBar.style = "margin-left: 50%;";
});

buttons[3].addEventListener("click", () => {
  first.style = "margin-left: -60%;";
  navBottomBar.style = "margin-left: 75%;";
});
