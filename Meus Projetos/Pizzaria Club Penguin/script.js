paraTopo();
setTimeout(()=>{document.querySelector('.menu').style.height = '140px'},500);
setTimeout(()=>{document.querySelector('.painel--porcima').style.opacity = '0.4'},500);
window.addEventListener('scroll',(item)=>{
    if(item.path[1].scrollY!==0){
        setTimeout(()=>{document.querySelector('.painel--porcima--frase').style.opacity = '1'},100);
        document.querySelector('.para--topo').style.display = 'flex';
    }else{
        document.querySelector('.para--topo').style.display = 'none';
    }
})

window.addEventListener('scroll',(item)=>{
    if(item.path[1].scrollY >= item.path[1].innerHeight*0.5){
        setTimeout(()=>{document.querySelector('.mapa--porcima').style.opacity = '0.4'},500);
        setTimeout(()=>{document.querySelector('.mapa--porcima--frase').style.opacity = '1'},500);
    }
})



let tocando = false;
function tocarMusica(){
    if(tocando==false){
        document.querySelector('.musica').play();
        document.querySelector('.botao--musica').innerHTML="Parar de tocar."
        tocando = true;
    }else{
        document.querySelector('.musica').pause();
        document.querySelector('.botao--musica').innerHTML="Tocar música."
        tocando = false;
    }
}

function paraTopo(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })
}


function carrinho(){

}

for(i in pizzas){
    let pizza = document.querySelector('.pizza--item');
    pizza.querySelector('.pizza--nome span').innerHTML = pizzas[i].nome;
    pizza.querySelector('.pizza--imagem img').src = `imagens/${pizzas[i].url}`;
    pizza.querySelector('.pizza--descricao span').innerHTML = pizzas[i].descricao;
    pizza.querySelector('.adicionar--area div').setAttribute('onclick',`adicionar(${i})`);
    let addpizza = pizza.cloneNode(true);
    addpizza.style.display = 'flex';
    document.querySelector('.pizza--area').appendChild(addpizza);
}


function adicionar(i){
    id = i+1;
    document.querySelector('.compra').style.animation = '1s linear animacao'
    document.querySelector('.compra').style.top = '15vh'
    document.querySelector('.compra').style.right = '20vw'
    document.querySelector('.compra').style.height = '70vh'
    document.querySelector('.compra').style.width = '60vw'

}
function fecharcompra(){
    document.querySelector('.compra').style.animation = '1s linear animacaocontrario'
    document.querySelector('.compra').style.top = '50vh'
    document.querySelector('.compra').style.right = '50vw'
    document.querySelector('.compra').style.height = '0'
    document.querySelector('.compra').style.width = '0'
}
