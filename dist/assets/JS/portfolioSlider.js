const portfolioSlider = document.getElementById("portfolioSlider");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

btnLeft.addEventListener("click", () => {
  portfolioSlider.style = `margin-left: 0%`;
  console.log("se pucho la izquierda")
})

btnRight.addEventListener("click", () => {
  portfolioSlider.style = "margin-left: -100%";
  console.log("se pucho la derecha")
})