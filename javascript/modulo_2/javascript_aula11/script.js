function cachorro(local_cachorro){
    document.querySelector(".imagem").setAttribute("src",local_cachorro);
    document.querySelector(".imagem").setAttribute("data-animal","Cachorro!");
}
function gato(local_gato){
    document.querySelector(".imagem").setAttribute("src",local_gato);
    document.querySelector(".imagem").setAttribute("data-animal","Gato!");
}
function pegaranimal(){
    alert(document.querySelector(".imagem").getAttribute("data-animal"));
}