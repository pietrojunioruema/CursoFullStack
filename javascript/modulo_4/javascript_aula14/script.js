let timer;
function rodar_em_2s(){
    timer = setTimeout(function(){
        document.querySelector(".demo").innerHTML = "Rodou!";
    },2000);
}
function parar_antes_dos_2s(){
    clearTimeout(timer);
}