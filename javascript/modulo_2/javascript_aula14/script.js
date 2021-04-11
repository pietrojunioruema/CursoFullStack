function subirtela(){
    window.scrollTo(0,0);
}

function apareceounao(){
    if(window.scrollY===0){
        document.querySelector(".scrollbutton").style.display = "none";
    }else{
        document.querySelector(".scrollbutton").style.display = "block";
    }
}

window.addEventListener('scroll', apareceounao);
