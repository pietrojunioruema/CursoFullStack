let pessoa = {
    nome:"pietro",
    email:"pietrobragaaquino@gmail.com",
    telefone:"98147-0013",
    acordado:false,
    acordar: function(){
        this.acordado = true;
        console.log("São 6:00 horas da manhã! Hora de acordar!");
    },
    escovar: function(){
        if(this.acordado==true){
            console.log("Eu só escovo meus dentes se eu estiver acordado!");
        } else{
            console.log("Eu ainda não estou acordado, como vou escovar meus dentes?");
        }
    }
}

pessoa.acordar();
pessoa.escovar();