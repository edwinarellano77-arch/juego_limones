function generarAleatorio(min,max){
    let random=Math.random();//genera numero entre 0 y 1
    let numero=random*(max-min); // genera numero entre 0 y max
    let numeroEntero = Math.ceil(numero);
    numeroEntero = numeroEntero+min;
    return numeroEntero
}

function mostrarEnSpan(idSpan,valor){
    let componente=document.getElementById(idSpan);
    componente.textContent=valor;
}