let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let interval;
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goprev(){
    currentSlide--;
    if(currentSlide<0){
        currentSlide = totalSlides-1;
    }
    update();
    clearInterval(interval);
    interval = setInterval(gonext,2000);
}
function gonext(){
currentSlide++;
if(currentSlide>=totalSlides){
    currentSlide = 0;
    }
    update();
    clearInterval(interval);
    interval = setInterval(gonext,2000);
}
function update(){
    let novaMargem = (currentSlide * document.querySelector('.slider--item').clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${novaMargem}px`;
}

interval = setInterval(gonext,2000);