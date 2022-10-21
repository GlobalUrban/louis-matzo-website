const slider = document.getElementById("slider");
const slides = 3.5;
const slideDuration = 7000;

let slideCalculation = slides * 100;

window.addEventListener("load", Slider());

function Slider() {
  let a = 50;
  setInterval(() => {
    slider.style = `margin-left: -${a}%`;
    a += 50;
    console.log(a);
    a = a == slideCalculation ? 0 : a;
  }, slideDuration);
}


