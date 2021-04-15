let carro = {
    motor:"12cavalos",
    nome:"gol",
    cor:"vermelho",
    capacidade:"4passageiros",
    social:{
        facebook:"pietrinhofacebook",
        instagram:"pietroinstagram"
    }
};

let {motor:x,nome:y,cor:z=0} = carro;
//valor padrão cor:z=0 como zero.
console.log(x,y,z);