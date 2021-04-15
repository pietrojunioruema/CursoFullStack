let array1 = [1,2,3,4];
let array2 = [...array1,5,6,7,8];
console.log(array2);

let objeto1 = {
    cara:"teste",
    nome:"teste2",
    residencia:"teste3"
}
let objeto2 = {
    ...objeto1,
    email:"pietrinho@",
    amigo:"rodrigo"
}

console.log(objeto2);