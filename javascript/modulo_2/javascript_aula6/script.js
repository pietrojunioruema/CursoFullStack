function trocar(){
    if(document.querySelector("button").classList.contains("vermelho")){
        document.querySelector("button").classList.remove("vermelho");
        document.querySelector("button").classList.add("azul");
    }else{
        document.querySelector("button").classList.add("vermelho");
        document.querySelector("button").classList.remove("azul");
    }
}