// const serviceBtn = document.getElementById("m-services__btn");
const serviceBtn = document.querySelectorAll(".m-services__btn");


serviceBtn.forEach(service => {
    service.addEventListener("click", () => {
        console.log("se puyo el service")
        service.classList.toggle("m-service__btn-pressed");
       });
});


 