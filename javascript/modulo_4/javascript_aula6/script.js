let lista = [
    'Ovos',
    'Farinha',
    'Corante',
    'Massa'
]
let lista2 = [
    'Aveia',
    'Frango',
    'Água'
]

lista.splice(1,1);
console.log(lista);

let res = lista.concat(lista2);
console.log(res);