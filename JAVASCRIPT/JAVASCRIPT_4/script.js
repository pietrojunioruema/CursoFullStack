function protopo(){
    window.scrollTo({
        top: 0,
        left:0,
    });
}
function olharbotao(){
    if(window.scrollY <100){
        document.querySelector('.paratopo').style.display = 'none';
    }else{
        document.querySelector('.paratopo').style.display = 'inline-block';
    }
}


window.addEventListener('scroll', olharbotao)