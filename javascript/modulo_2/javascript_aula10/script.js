function alterar(){
    let trocar = somar(10,25);
    document.getElementById("titulo").innerHTML = trocar;
    document.querySelector("#campo").value = trocar;
}
function somar(x, y){
    let total;
    return total=x+y;
}
alterar();