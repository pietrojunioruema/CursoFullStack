let info = ['Piêtro Braga Aquino Júnior','Piêtro','Braga Aquino Júnior','@Piêtro'];

let [nomeCompleto,nome,sobrenome,instagram] = info;
console.log(nomeCompleto,nome,sobrenome,instagram);

let [ , , , instagram2] = info;
console.log(instagram2);