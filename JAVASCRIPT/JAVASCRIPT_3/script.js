function trocarImagem(x,y){
    document.querySelector('.area1--cachorro').setAttribute('src', x);
    document.querySelector('.area1--cachorro').setAttribute('qualanimal',y);
}
function descobriranimal(){
    let resposta = document.querySelector('.area1--cachorro').getAttribute('qualanimal');
    alert('O animal é : '+resposta);
}