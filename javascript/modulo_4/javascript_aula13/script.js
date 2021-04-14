let timer;
function comecar(){
    timer = setInterval(exibir_hora_atual,100);
}
function parar(){
    clearInterval(timer);
    document.querySelector(".demo").innerHTML =document.querySelector(".demo").innerHTML+" - Parou.";
}
function exibir_hora_atual(){
    let data_atual = new Date();
    let hora = data_atual.getHours();
    let minuto = data_atual.getMinutes();
    let segundo = data_atual.getSeconds();
    let texto_hora_minuto_segundo = hora+" : "+minuto+" : "+segundo;
    document.querySelector(".demo").innerHTML = texto_hora_minuto_segundo;
}
