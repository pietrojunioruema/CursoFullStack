
function digitou(event){
    console.log(event);
    if(event.keyCode==13){
        alert(document.querySelector("#campo").value +" Enviado!");
    }
}