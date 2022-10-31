const ourTeamSlider = document.getElementById("ourTeamSlider");
const slides = 3.5;
const slideDuration = 7000;

let slideCalculation = slides * 100;

window.addEventListener("load", Slider());

function Slider() {
  let a = 50;
  setInterval(() => {
    ourTeamSlider.style = `margin-left: -${a}%`;
    a += 50;
    a = a == slideCalculation ? 0 : a;
  }, slideDuration);
}



