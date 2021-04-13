function verde(){
    document.querySelectorAll(".botao")[1].classList.remove("azul");
    document.querySelectorAll(".botao")[0].classList.add("verde");
    document.querySelectorAll(".botao")[2].classList.remove("vermelho");
    document.querySelector(".texto").classList.remove("azul");
    document.querySelector(".texto").classList.remove("vermelho");
    document.querySelector(".texto").classList.add("verde");
}
function azul(){
    document.querySelectorAll(".botao")[1].classList.add("azul");
    document.querySelectorAll(".botao")[0].classList.remove("verde");
    document.querySelectorAll(".botao")[2].classList.remove("vermelho");
    document.querySelector(".texto").classList.remove("verde");
    document.querySelector(".texto").classList.remove("vermelho");
    document.querySelector(".texto").classList.add("azul");
}
function vermelho(){
    document.querySelectorAll(".botao")[1].classList.remove("azul");
    document.querySelectorAll(".botao")[0].classList.remove("verde");
    document.querySelectorAll(".botao")[2].classList.add("vermelho");
    document.querySelector(".texto").classList.remove("verde");
    document.querySelector(".texto").classList.remove("azul");
    document.querySelector(".texto").classList.add("vermelho");
}