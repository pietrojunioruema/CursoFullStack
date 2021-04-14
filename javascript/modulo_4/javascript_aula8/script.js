let pessoas = [
{nome:"pietro",cidade:"sao luis", email:"pietro@hotmail.com"},
{nome:"nizar",cidade:"estados unidos", email:"nizar@hotmail.com"},
{nome:"valadao",cidade:"sao paulo", email:"valadao@hotmail.com"},
{nome:"rodrigo",cidade:"pernambuco", email:"rodrigo@hotmail.com"}
]
let resultado = pessoas.find(function(item){
    return (item.nome=="pietro")? true : false;
})
let resultado_posicao = pessoas.findIndex(function(item){
    return (item.email=="valadao@hotmail.com")? true : false;
})
console.log(resultado);
console.log(resultado_posicao);