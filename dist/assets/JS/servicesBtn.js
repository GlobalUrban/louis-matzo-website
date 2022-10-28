const serviceBtn = document.getElementById("m-services__btn");
// const serviceBtn = document.querySelectorAll("m-services__btn");

serviceBtn.addEventListener("click", () => {
   console.log("se puyo el service")
   serviceBtn.classList.toggle("m-service__btn-pressed");
  });