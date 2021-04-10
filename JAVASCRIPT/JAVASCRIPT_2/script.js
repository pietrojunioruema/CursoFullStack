function trocar(){
    if(document.querySelector('#button1').classList.contains('preto')){
        document.querySelector('#button1').classList.remove('preto')
        document.querySelector('#button1').classList.add('verde')
    }else{
        document.querySelector('#button1').classList.remove('verde')
        document.querySelector('#button1').classList.add('preto')
    }
}