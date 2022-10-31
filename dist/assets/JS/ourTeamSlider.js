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

// Mobile Slider //
const slider = document.getElementById("slider");
const mobileSlides = 4;
let mobileSlideCalculation = mobileSlides * 100;

window.addEventListener("load", Slider());
function Slider() {
  let a = 100;
  setInterval(() => {
    slider.style = `margin-left: -${a}%`;
    a += 100;
    a = a == mobileSlideCalculation ? 0 : a;
  }, 7000);
}
