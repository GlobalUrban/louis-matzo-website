const slider = document.getElementById("slider");
const slides = 4;
const slideDuration = 2000;

let slideCalculation = slides * 100;

window.addEventListener("load", Slider());

function Slider() {
  let a = 100;
  setInterval(() => {
    slider.style = `margin-left: -${a}%`;
    a += 100;
    console.log(a);
    a = a == slideCalculation ? 0 : a;
  }, slideDuration);
}


