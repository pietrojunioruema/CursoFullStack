let cartao = "1234123412348888";
let ultimos_digitos = cartao.substr(12,4);
let cartao_mascarado = ultimos_digitos.padStart(16,'*');
console.log(cartao_mascarado);