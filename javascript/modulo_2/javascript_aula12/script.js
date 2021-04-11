
console.log("offsetHeight:"+document.querySelector(".texto").offsetHeight +" height + padding  não diminui do scroll");
console.log("offsetWidth:"+document.querySelector(".texto").offsetWidth+ " width + padding  não diminui do scroll");

console.log("clientHeight:"+document.querySelector(".texto").clientHeight+" height + padding  diminui do scroll");
console.log("clientWidth:"+document.querySelector(".texto").clientWidth+" width + padding  diminui do scroll");

console.log("scrollHeight:"+document.querySelector(".texto").scrollHeight+" height REAL + padding  diminui do scroll");
console.log("scrollWidth:"+document.querySelector(".texto").scrollWidth+" width REAL + padding  diminui do scroll");