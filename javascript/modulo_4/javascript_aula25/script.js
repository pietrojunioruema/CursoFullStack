function executar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("OK");
        },3000)
    });
}
executar().then((resposta)=>{
    console.log(resposta);
})