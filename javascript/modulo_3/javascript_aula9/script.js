let texto ="";
for(let i =0;i<60;i++){
    texto+=i;
}
document.querySelector("#demo").innerHTML = texto;

//NO ARRAY


let carros = ["fiat","uno","ferrari","corsa"];
let html = "<ul>";
for(let y in carros){
    html += "<li>"+carros[y]+"</li>";
}
html +="</li>";
document.querySelector("#demo2").innerHTML = html;