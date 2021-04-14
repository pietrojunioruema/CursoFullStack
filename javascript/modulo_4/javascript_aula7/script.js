let array = [641851918,6351651861,23753735,65198189,3513516516,989189189198];
resultado_final = []

resultado_final = array.map(function(item){
    string = item.toString();
    string2 = string.substr(0,2) + "." + string.substr(2);
    string2 = parseFloat(string2);
    string2 = string2.toFixed(3);
    return string2;
})
console.log(resultado_final);

//vou filtrar pq só quero os números maiores que 50.

let resultado_final2 = resultado_final.filter(function(item){
    return (item>50)? true : false;
})
console.log(resultado_final2);
//agora quero filtrar só os menores que 50

resultado_final2 = resultado_final.filter(function(item){
    return (item<50)? true : false;
})
console.log(resultado_final2)

//agora não quero mais nenhum item, só quero que me responda a pergunta o array se é true ou false

let resultado_final3 = resultado_final.every(function(item){
    return (item>0 && item<100)? true : false;
})
console.log(resultado_final3);