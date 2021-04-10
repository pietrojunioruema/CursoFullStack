function verde(){
    removercores()
    document.querySelector("#exemplo").classList.add("verde");
}
function vermelho(){
    removercores()
    document.querySelector("#exemplo").classList.add("vermelho");
}
function azul(){
    removercores()
    document.querySelector("#exemplo").classList.add("azul");
}
function removercores(){
    document.querySelector("#exemplo").classList.remove("vermelho");
    document.querySelector("#exemplo").classList.remove("azul");
    document.querySelector("#exemplo").classList.remove("verde")
}