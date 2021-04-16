async function requisitar2(){
    let r = await fetch('https://alunos.b7web.com.br/api/ping');
    let json = await r.json();
    console.log(json);
}