let pessoa = {
    nome:"Piêtro",
    sobrenome:"Braga Aquino Júnior",
    email:"pietrobragaaquino@gmail.com",
    telefone:"98147-0013",
    social:{
        facebook:"facebookpietrinho",
        instagram:"instagrampietrinho",
        mais:{
            maisainda:{
                url:"@pietrinhogod"
            }
        }
    }
};

let {nome:pietro_nome="nenhum",sobrenome:pietro_sobrenome="nenhum",email:pietro_email="nenhum"} = pessoa;
console.log(pietro_nome,pietro_sobrenome,pietro_email);

let{facebook:pietro_facebook="nenhum",instagram:pietro_instagram="nenhum"} = pessoa.social;
console.log(pietro_facebook,pietro_instagram);

let{nome:nome2,sobrenome:sobrenome2,social:{instagram:instagram2="nenhum"}} = pessoa;
console.log(nome2,sobrenome2,instagram2);

function pegarNomeCompleto({nome,sobrenome,social:{mais:{maisainda:{url:instagram="nenhum"}}}}){
    return `Meu nome é ${nome} ${sobrenome} (siga-nos em ${instagram})`;
}
console.log(pegarNomeCompleto(pessoa));